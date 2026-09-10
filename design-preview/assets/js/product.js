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

// Gallery thumbnails
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.product-thumb');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    if (mainImage) mainImage.src = thumb.dataset.img;
    thumbs.forEach((t) => t.classList.remove('is-active'));
    thumb.classList.add('is-active');
  });
});

// Colour swatches
const swatches = document.querySelectorAll('.swatch');
const variantSelected = document.getElementById('variantSelected');

swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    swatches.forEach((s) => s.classList.remove('is-active'));
    swatch.classList.add('is-active');
    if (variantSelected) variantSelected.textContent = swatch.dataset.color;
  });
});
