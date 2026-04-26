# Usage

## Local development

1. Link the project to the real Shopify app.
2. Populate environment variables required by the Shopify app template.
3. Run:

```bash
npm run dev
```

## Waitlist extension

The reusable storefront UI lives in:

- `extensions/waitlist-theme/blocks/join-waitlist.liquid`
- `extensions/waitlist-theme/assets/waitlist-block.js`
- `extensions/waitlist-theme/assets/waitlist-block.css`

## Merchant setup

1. Install the app on the store.
2. Open the theme editor.
3. Add the `Join Waitlist` app block to the product page.
4. The block will use the current default backend endpoint automatically:

```text
https://shopify-waitlist-backend.vercel.app/api/waitlist
```

5. Override the backend endpoint in block settings only if the backend URL changes.
6. Save and preview on a sold-out variant.

## Backend expectation

The block currently expects a JSON endpoint that accepts:

- `name`
- `email`
- `marketingOptIn`
- `variantGid`

## Current backend repo

- `/Users/sam/Documents/perseusLabs/shopify-waitlist-backend`
