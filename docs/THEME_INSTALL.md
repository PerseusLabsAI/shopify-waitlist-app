# Add The Waitlist To A Theme

## Goal

Add the reusable `Join Waitlist` app block to a product page without copying custom waitlist code into the theme repo.

## Before you start

- The Shopify app must be installed on the store.
- The theme app extension must be deployed as part of the app.
- The product template must be an Online Store 2.0 JSON template that supports app blocks.

## Default backend endpoint

The app block is preconfigured to post to:

```text
https://shopify-waitlist-backend.vercel.app/api/waitlist
```

You only need to change the endpoint setting if the backend URL changes.

## Add the block in Shopify

1. Open `Online Store -> Themes`.
2. Click `Customize` on the theme you want to use.
3. Navigate to a product template.
4. In the product section, click `Add block`.
5. Open the `Apps` tab.
6. Select `Join Waitlist`.
7. Place it near the buy buttons or product form.
8. Save the theme.

## What the block does

- Reads the selected product variant
- Checks whether the selected variant is sold out
- Shows the waitlist button only when the selected variant is unavailable
- Expands an inline form with:
  - name
  - email
  - phone
  - marketing opt-in
- Posts the data to the backend

## Block settings

- `Backend endpoint`
  - Defaults to the live Vercel endpoint
- `Button label`
- `Form heading`
- `Form body`
- `Marketing opt-in label`
- `Success message`
- `Fallback error message`

## Test checklist

1. Open a product with at least one sold-out variant.
2. Select the sold-out variant.
3. Confirm `Join the Waitlist` appears.
4. Submit the form.
5. Confirm the success message appears.
6. Verify the backend received the request.
7. Verify the customer record was created or updated in Shopify.

## Troubleshooting

### The app block does not appear in the theme editor

- Confirm the app was deployed after the extension was added.
- Confirm the app is installed on the store.
- Confirm you are editing a product template.

### The block appears but never shows on the storefront

- Make sure the selected variant is truly unavailable.
- Confirm the product form uses variant IDs in the standard Shopify pattern.

### The form shows but submit fails

- Check the backend endpoint setting.
- Confirm the Vercel backend has the correct environment variables.
- Check browser console and network requests.

### The theme preview seems wrong

- Remember that primary-domain redirects can strip `preview_theme_id`.
- Confirm you are actually viewing the intended theme, not the live fallback theme.
