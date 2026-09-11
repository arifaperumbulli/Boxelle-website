const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const qtyValue = document.getElementById('qtyValue');

if (qtyMinus && qtyPlus && qtyValue) {
  const step = 1;
  const min = 1;

  qtyMinus.addEventListener('click', () => {
    const current = parseInt(qtyValue.value, 10) || min;
    qtyValue.value = Math.max(min, current - step);
  });

  qtyPlus.addEventListener('click', () => {
    const current = parseInt(qtyValue.value, 10) || min;
    qtyValue.value = current + step;
  });
}

// Simple static gallery thumbnails (pages with one fixed set of photos,
// no size/colour variants — see tall-cake-box.js for the variant-aware version).
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.product-thumb[data-img]');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    if (mainImage) mainImage.src = thumb.dataset.img;
    thumbs.forEach((t) => t.classList.remove('is-active'));
    thumb.classList.add('is-active');
  });
});
