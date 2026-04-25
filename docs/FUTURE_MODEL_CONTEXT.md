# Future Model Context

## What this repo is

This repo is the Shopify app home for the reusable waitlist feature.

## What this repo is not

- Not the theme repo
- Not the backend repo
- Not the place for one-off theme editor customizations

## Product intent

Build a reusable "Join Waitlist" feature for sold-out product pages that can survive future theme rebuilds.

## Intended storefront behavior

- Show a waitlist call to action on sold-out product variants
- Collect:
  - name
  - email
  - phone
  - marketing opt-in
- Submit to backend
- Backend creates or updates a Shopify customer
- Backend stores waitlist state on the customer

## Important operational context

- The store's primary domain redirect can break unpublished theme preview URLs by stripping `preview_theme_id`.
- Theme editor changes can be overwritten by pushes.
- The Shopify app project still needs to be fully linked so `client_id` and deploy metadata are real.

## Safe next steps

1. Link this local app project to the existing Shopify app.
2. Deploy the app project.
3. Confirm the theme extension appears in the app version.
4. Add the app block to an unpublished theme.
5. Validate sold-out PDP behavior end to end.
