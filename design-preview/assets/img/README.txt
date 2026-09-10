Image assets in this preview

REAL ASSETS (already in use):
- logo.png            -> cropped from the client-supplied "Boxelle by YM" logo
- founder-photo.jpg    -> client's real photo, used in the "Why Boxelle" section
- founder-square.jpg   -> square crop of the same photo, used in "About the Founder"
- source/              -> original, uncropped files as supplied (logo.jpeg,
                          founder-photo.jpeg, homepage-mockup.jpeg for reference)
- products/tall-cake-box-8x8x8/    -> real photos (Pink & White, open/closed)
- products/tall-cake-box-10x10x8/  -> real photos (White only so far)
- products/tall-cake-box-12x12x20/ -> real photo (White, closed, only so far)
  All used on product-tall-cake-box.html (size selector switches between
  them) and the homepage's "Tall Cake Boxes" category card.

STILL PLACEHOLDER (styled dashed boxes, pending real photos):
1. Hero product photo (index.html, class="hero-photo-frame") — needs a
   boxed-cake product photo for the homepage hero.
2. Shop by Category images (class="card-img") — Cake Boxes, Cake Drum
   Boards, Cupcake Boxes, Brownie Boxes still need real photos (Tall Cake
   Boxes is done, for the 8x8x8, 10x10x8, and 12x12x20 sizes).
3. Tall Cake Box sizes still missing photos: 13x12x14, 10x10x14 (and a
   Pink option for 10x10x8 and 12x12x20).

To add a new Tall Cake Box size/colour once photos arrive: add an entry to
the TALL_CAKE_BOX_DATA object in assets/js/tall-cake-box.js (dimensions,
example price, image list per colour) — the size buttons, colour
swatches, gallery, price table, and description all render from that data
automatically. For a brand-new category, follow the pattern in
product-tall-cake-box.html / product.html.
