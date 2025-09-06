Baby Girl Boutique – a fullstack Next.js storefront for baby girl clothes (ages 1–3). Ships with a local product seed and optional WordPress/WooCommerce integration.

## Quickstart

1) Install and run:
```bash
npm install
npm run dev
```

2) Visit http://localhost:3000

## Features
- Local product seed in `data/products.json`
- API routes: `GET /api/products`, `POST /api/checkout`
- Pages: home, `/age/1`, `/age/2`, `/age/3`, product detail, cart, checkout, order thank-you
- Cart with localStorage persistence
- Tailwind CSS styling and responsive cards

## Configure WooCommerce (optional)
If you have a WordPress + WooCommerce store, set these env vars in `.env.local` (see `.env.local.example`):
```
WOOCOMMERCE_URL=https://your-wp-site.com
WOOCOMMERCE_CONSUMER_KEY=ck_...
WOOCOMMERCE_CONSUMER_SECRET=cs_...
```
When provided, product data will be fetched from WooCommerce with a simple normalization, falling back to the local seed if unreachable.

## Customize the theme
- Update brand name in `app/components/Header.js`
- Tweak colors and layout in `app/globals.css` and component classNames
- Replace product images or add more in `data/products.json`

## Deploy
Any Node hosting works. For Vercel:
```bash
npm run build
npm start
```
