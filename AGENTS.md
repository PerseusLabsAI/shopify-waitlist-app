# Shopify Waitlist App Guidance

This repo is the reusable Shopify app layer for the waitlist feature.

## Purpose

- Own the Shopify app project.
- Own the theme app extension for the storefront waitlist UI.
- Stay separate from the theme repo so waitlist functionality can survive theme rebuilds.
- Integrate with the external backend repo at `/Users/sam/Documents/perseusLabs/shopify-waitlist-backend`.

## Related repos

- App repo: `/Users/sam/Documents/perseusLabs/shopify-waitlist-app`
- Backend repo: `/Users/sam/Documents/perseusLabs/shopify-waitlist-backend`
- Theme repo: `/Users/sam/Documents/perseusLabs/premium-editorial-v1-0`

## Guardrails

- Do not put storefront waitlist logic directly into the theme repo unless there is a temporary emergency patch.
- Prefer extending the app block or app embed in `extensions/waitlist-theme/`.
- Do not push any theme directly to live as a first step.
- Preview changes on an unpublished theme or in app development first.
- The storefront primary-domain redirect can strip `preview_theme_id`; do not assume a preview failure means files are missing.
- Treat Shopify theme editor content as production data. Pull or back up before large pushes.
- The waitlist block should render one inline form for sold-out variants only; do not reintroduce a second toggle button above the form.
- If the waitlist block appears twice, inspect the product JSON template for duplicate app-block placements before changing extension code.

## Current state

- The app repo is based on Shopify's official React Router template.
- The waitlist UI scaffold lives in `extensions/waitlist-theme/`.
- The backend is still the system of record for customer creation, marketing consent, and waitlist metafields.
- `shopify.app.toml` still needs a real `client_id` after local config is linked to the Shopify app.
- The current storefront payload contract is exactly `{ name, email, marketingOptIn, variantGid }`.
