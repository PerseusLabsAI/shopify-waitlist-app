# Architecture

## Goal

Make the "Join Waitlist" experience reusable across future Shopify themes without copying Liquid and JavaScript into each theme.

## Repository split

### `shopify-waitlist-app`

- Shopify app project
- Theme app extension
- Shopify app configuration
- Future app proxy or app-owned storefront routes

### `shopify-waitlist-backend`

- External backend deployed on Vercel
- Customer create/update logic
- Marketing consent handling
- Customer metafield updates
- Waitlist API endpoint

### `shopifytheme`

- Theme-only presentation layer
- Should not own waitlist business logic
- Should only consume the app block through the theme editor

## Feature flow

1. Merchant installs or links the waitlist app.
2. Merchant adds the `Join Waitlist` app block to the product page.
3. The app block reads product and variant data from the product page.
4. The app block only reveals the UI when the selected variant is sold out.
5. The block submits customer data to the backend endpoint.
6. The backend creates or updates the customer and writes waitlist data.

## Why this split

- Theme app extensions are Shopify's supported reusable storefront integration point across themes.
- The backend contains secrets and Admin API logic, so it should stay server-side.
- The theme repo stays simpler and safer to evolve.

## Current implementation direction

- Short term:
  - App block submits directly to the backend URL configured in block settings.
- Future upgrade:
  - Route storefront submissions through a Shopify app proxy owned by the app repo.

## Required Shopify capabilities

- Customer scopes in the app config:
  - `read_customers`
  - `write_customers`
- Theme app extension deployment through `shopify app deploy`
- App linkage so `client_id` is populated in `shopify.app.toml`
