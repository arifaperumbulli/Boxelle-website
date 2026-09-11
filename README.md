# Boxelle-website
Official website project for BOXELLE, a premium bakery and food packaging brand in India. Built with WordPress and WooCommerce.

## Homepage Design Preview (live)

Before building the final WordPress site, the homepage layout and visual
direction are being prototyped as static HTML/CSS in [`docs/`](./docs).
This lets the look and feel be reviewed live, on a real link, before it's
translated into the actual WordPress theme/page-builder implementation.

The site lives in `docs/` specifically so it can be served with **GitHub
Pages** — see "Making it live" below for the one-time setup step.

To view it locally instead, just open `docs/index.html` in a browser
(no build step required).

**Pages included:**
- `docs/index.html` — homepage: header/navigation (with the real Boxelle by
  YM logo), hero, trust badges, "Shop by Category", "Why Boxelle" and
  "About the Founder" (using the founder's real photo), testimonials,
  newsletter CTA, and footer
- `docs/product.html` — example product page layout (Cake Box, ½ kg)
- `docs/product-tall-cake-box.html` — Tall Cake Box product page with a
  working Size and Colour selector, backed by real product photos for
  4 sizes so far (8x8x8, 10x10x8, 12x12x14, 12x12x20)

All pages are fully responsive for desktop, tablet, and mobile. The
layout, copy, and green/gold/cream color palette are matched to the
client-supplied homepage mockup (`docs/assets/img/source/homepage-mockup.jpeg`).

**Still needed to finalize the design:**
- Product photography: the hero's boxed-cake photo, the remaining "Shop by
  Category" images (Cake Boxes, Cake Drum Boards, Cupcake Boxes, Brownie
  Boxes), and the remaining Tall Cake Box sizes (13x12x14, 10x10x14)
- Final confirmation of homepage copy/pricing/contact details — see
  `PRODUCT-CATALOG.md` for pending size questions

See `docs/assets/img/README.txt` for exactly which placeholders still
need real images.

## Making it live (GitHub Pages)

This is a one-time, ~1 minute step, done once in the repo's web UI (not
something that can be done from a pull request):

1. Go to this repository's **Settings → Pages**.
2. Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
3. Under "Branch", pick this branch (or `main`, once this is merged) and
   folder **`/docs`**, then **Save**.
4. After a minute, the live URL appears at the top of that same Pages
   settings page (usually `https://<username>.github.io/Boxelle-website/`).

Every time new commits land in `docs/` on that branch, the live page
updates automatically within a minute or two — no redeploy step needed.

This GitHub Pages link is a **preview/staging** site, not the final
WordPress site on the purchased domain — it's just the fastest way to get
a real, shareable link while the design and product catalog are still
being filled in.
