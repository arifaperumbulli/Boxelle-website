Image assets in this preview

REAL ASSETS (already in use):
- logo.png            -> cropped from the client-supplied "Boxelle by YM" logo
- founder-photo.jpg    -> client's real photo, used in the "Why Boxelle" section
- founder-square.jpg   -> square crop of the same photo, used in "About the Founder"
- source/              -> original, uncropped files as supplied (logo.jpeg,
                          founder-photo.jpeg, homepage-mockup.jpeg for reference)
- products/tall-cake-box-10x10x8/ -> real product photos (Pink & White, open/closed)
                          used on product-tall-cake-box.html and the homepage's
                          "Tall Cake Boxes" category card

STILL PLACEHOLDER (styled dashed boxes, pending real photos):
1. Hero product photo (index.html, class="hero-photo-frame") — needs a
   boxed-cake product photo for the homepage hero.
2. Shop by Category images (class="card-img") — Cake Boxes, Cake Drum
   Boards, Cupcake Boxes, Brownie Boxes still need real photos (Tall Cake
   Boxes is done).

Once product photography is supplied, replace each placeholder div's
background with an <img> tag pointing at the final asset (see
product-tall-cake-box.html for the pattern to follow, including the
colour-swatch/gallery-thumbnail JS in assets/js/product.js).
