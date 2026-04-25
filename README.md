# Shopify Waitlist App

This repo is the reusable Shopify app layer for the Perseus Labs waitlist feature.

## What lives here

- Shopify app project based on Shopify's official React Router template
- Reusable theme app extension for the product-page waitlist UI
- Shopify-side configuration that should survive future theme rebuilds

## What does not live here

- The Vercel backend business logic
- One-off theme customizations
- Theme-editor-only content changes

## Related repos

- Backend: `/Users/sam/Documents/perseusLabs/shopify-waitlist-backend`
- Theme: `/Users/sam/Documents/perseusLabs/shopifytheme`

## Key docs

- [Architecture](docs/ARCHITECTURE.md)
- [Usage](docs/USAGE.md)
- [Theme install](docs/THEME_INSTALL.md)
- [Shopify best practices](docs/SHOPIFY_BEST_PRACTICES.md)
- [Past errors and guardrails](docs/PAST_ERRORS_AND_GUARDRAILS.md)
- [Future model context](docs/FUTURE_MODEL_CONTEXT.md)

## Setup

```bash
npm install
```

Link the local app config to the real Shopify app, then run:

```bash
npm run dev
```

## Current extension

The reusable storefront block scaffold lives in:

- `extensions/waitlist-theme/`

It is intended to be added to product templates and only reveal itself when the selected variant is sold out.
