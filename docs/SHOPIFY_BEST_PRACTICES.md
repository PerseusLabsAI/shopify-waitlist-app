# Shopify Best Practices

## Theme safety

- Never make the live theme the first deployment target.
- Always preview on an unpublished theme first.
- Pull the current Shopify state before large theme pushes.
- Remember that theme editor content is stored in theme files such as `config/settings_data.json` and template JSON files.

## Waitlist feature placement

- Put reusable storefront integrations in a theme app extension.
- Keep app logic out of theme repos whenever possible.
- Use the theme editor to place the block instead of editing theme files directly.

## Backend safety

- Keep Admin API credentials server-side only.
- Use the backend for customer creation, updates, marketing consent, and metafield writes.
- Do not expose client secret or Admin tokens in theme JavaScript.

## App config

- Keep `shopify.app.toml` under version control.
- Ensure required scopes are explicit and minimal.
- Link local config to the real Shopify app before deploying.

## Previewing and debugging

- A broken preview URL is not always a broken theme.
- Check for domain redirects that strip `preview_theme_id`.
- Test unpublished themes from the editor link when possible.
- Use `shopify theme pull` and `shopify theme list` to compare local and remote state.
