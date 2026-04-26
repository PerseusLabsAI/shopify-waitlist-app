(function () {
  function parseVariants(container) {
    const source = container.querySelector(".pl-waitlist__variants");
    if (!source) return [];

    try {
      return JSON.parse(source.textContent || "[]");
    } catch {
      return [];
    }
  }

  function findSelectedVariantId(container) {
    const url = new URL(window.location.href);
    const fromUrl = url.searchParams.get("variant");
    if (fromUrl) return String(fromUrl);

    const form =
      container.closest("section")?.querySelector('form[action*="/cart/add"]') ||
      document.querySelector('form[action*="/cart/add"]');

    if (!form) return container.dataset.initialVariantId || null;

    const checkedRadio = form.querySelector('input[name="id"]:checked');
    if (checkedRadio) return checkedRadio.value;

    const select = form.querySelector('select[name="id"]');
    if (select) return select.value;

    const hidden = form.querySelector('input[name="id"][type="hidden"]');
    if (hidden) return hidden.value;

    return container.dataset.initialVariantId || null;
  }

  function syncVisibility(container) {
    const shell = container.querySelector(".pl-waitlist__shell");
    const variants = parseVariants(container);
    const selectedId = findSelectedVariantId(container);
    const selectedVariant = variants.find((variant) => String(variant.id) === String(selectedId));

    if (!shell || !selectedVariant) {
      if (shell) shell.hidden = true;
      return;
    }

    const soldOut = !selectedVariant.available;
    shell.hidden = !soldOut;

    const variantInput = container.querySelector('input[name="variantGid"]');
    if (variantInput) variantInput.value = "gid://shopify/ProductVariant/" + selectedVariant.id;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const container = form.closest(".pl-waitlist");
    if (!container) return;

    const endpoint = container.dataset.endpointUrl;
    const status = form.querySelector(".pl-waitlist__status");
    const submit = form.querySelector(".pl-waitlist__submit");

    if (!endpoint) {
      if (status) {
        status.textContent = "Set a backend endpoint in the app block settings first.";
        status.className = "pl-waitlist__status is-error";
      }
      return;
    }

    const payload = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      marketingOptIn: form.elements.marketingOptIn.checked,
      variantGid: form.elements.variantGid.value,
    };

    submit.disabled = true;
    if (status) {
      status.textContent = "Submitting...";
      status.className = "pl-waitlist__status";
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      if (status) {
        status.textContent = container.dataset.successMessage || "You're on the waitlist.";
        status.className = "pl-waitlist__status is-success";
      }

      form.reset();
      syncVisibility(container);
    } catch {
      if (status) {
        status.textContent =
          container.dataset.errorMessage || "We couldn't save your request. Please try again.";
        status.className = "pl-waitlist__status is-error";
      }
    } finally {
      submit.disabled = false;
    }
  }

  function bindContainer(container) {
    const shell = container.querySelector(".pl-waitlist__shell");
    const form = container.querySelector(".pl-waitlist__form");

    if (!shell || !form) return;

    form.addEventListener("submit", handleSubmit);

    document.addEventListener("change", function (event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches('input[name="id"], select[name="id"]')) {
        syncVisibility(container);
      }
    });

    syncVisibility(container);
  }

  document.querySelectorAll(".pl-waitlist").forEach(bindContainer);
})();
