# Past Errors And Guardrails

## Critical mistakes that happened

### 1. Wrong local theme source was pushed to live

Impact:

- Live layout was replaced with the wrong baseline.
- A later rollback used the same wrong source.

Guardrail:

- Confirm the exact theme source directory before any `shopify theme push`.
- Use the dedicated theme repo only.

### 2. Live theme editor changes were overwritten

Impact:

- Wording, images, and page configuration changed through the Shopify theme editor were lost.

Guardrail:

- Treat `theme push` as destructive to theme editor state.
- Pull and back up current live theme files before pushing.
- Push to unpublished themes first.

### 3. The waitlist feature was mixed into theme work

Impact:

- Waitlist work became tangled with unrelated theme changes.
- Rollback risk increased.

Guardrail:

- Keep waitlist logic in the app repo and backend repo.
- Themes should only consume the app block.

### 4. Shopify preview errors were misdiagnosed

Impact:

- Time was spent chasing "missing required files" even when top-level files existed.

Actual issue:

- Storefront redirects stripped `preview_theme_id`, sending requests back to the live theme.

Guardrail:

- Inspect HTTP redirects before assuming the theme is structurally broken.
- Validate which theme ID actually rendered in the response headers.

### 5. Too much trust was placed in local assumptions

Impact:

- The wrong folders and wrong deployment targets were used.

Guardrail:

- Verify repo, theme ID, and deployment target every time.
- Prefer concrete identifiers over names alone.

### 6. Backend metafield keys did not match Shopify Admin definitions

Impact:

- waitlist submissions looked successful but customer metafields remained blank

Guardrail:

- verify the exact namespace and key values in Shopify Admin custom data before implementing backend writes
- current store definitions are `custom.waitlist` and `custom.waitlist_products`
- do not assume generic names like `waitlist.joined` or `waitlist.variants` without checking the store

### 7. Vercel was behind local backend code

Impact:

- the live endpoint continued running older backend behavior even after local fixes existed

Guardrail:

- remember that Vercel deploys from GitHub, not local files
- after backend changes, push the backend repo before testing storefront behavior

### 8. Product template ended up with duplicate app-block placements

Impact:

- the waitlist block appeared twice on the PDP

Guardrail:

- inspect `templates/product.json` after theme-editor changes
- keep one authoritative waitlist app block placement only
