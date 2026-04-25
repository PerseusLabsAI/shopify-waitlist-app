import type { LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <s-page heading="Waitlist Dashboard">
      <s-section heading="Reusable waitlist app">
        <s-paragraph>
          This app repo owns the reusable Shopify-side waitlist integration.
          Storefront UI should live in the theme app extension, while customer
          creation and metafield writes stay in the external backend.
        </s-paragraph>
      </s-section>

      <s-section heading="Current structure">
        <s-paragraph>
          Use the theme app extension in <s-code>extensions/waitlist-theme</s-code>{" "}
          to place the waitlist feature into product templates. Keep reusable
          logic here, keep the backend in the Vercel repo, and avoid copying
          feature code into themes.
        </s-paragraph>
      </s-section>

      <s-section heading="Read before shipping">
        <s-unordered-list>
          <s-list-item>docs/ARCHITECTURE.md</s-list-item>
          <s-list-item>docs/SHOPIFY_BEST_PRACTICES.md</s-list-item>
          <s-list-item>docs/PAST_ERRORS_AND_GUARDRAILS.md</s-list-item>
          <s-list-item>docs/FUTURE_MODEL_CONTEXT.md</s-list-item>
        </s-unordered-list>
      </s-section>
    </s-page>
  );
}
