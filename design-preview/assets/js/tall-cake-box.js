// Data-driven size + colour + gallery for the Tall Cake Box product page.
// Add a new size by adding an entry here — everything else (buttons,
// swatches, gallery, price, dimensions) renders from this object.
const TALL_CAKE_BOX_DATA = {
  '10x10x8': {
    label: '10×10×8 inch',
    dimensions: '10 × 10 × 8 inch',
    priceOld: 65,
    priceBest: 58,
    tiers: [
      { qty: '10+ pcs', each: 65.00, total: 650.00 },
      { qty: '50+ pcs', each: 61.50, total: 3075.00 },
      { qty: '100+ pcs', each: 58.00, total: 5800.00 },
    ],
    colors: {
      Pink: [
        { src: 'assets/img/products/tall-cake-box-10x10x8/pink-open-with-cake.jpeg', alt: 'Pink tall cake box, open, with cake' },
        { src: 'assets/img/products/tall-cake-box-10x10x8/pink-empty-open.jpeg', alt: 'Pink tall cake box, empty, open' },
      ],
      White: [
        { src: 'assets/img/products/tall-cake-box-10x10x8/white-open-with-cake.jpeg', alt: 'White tall cake box, open, with cake' },
        { src: 'assets/img/products/tall-cake-box-10x10x8/white-closed.jpeg', alt: 'White tall cake box, closed' },
      ],
    },
  },
  '10x10x14': {
    label: '10×10×14 inch',
    dimensions: '10 × 10 × 14 inch',
    priceOld: 85,
    priceBest: 76,
    tiers: [
      { qty: '10+ pcs', each: 85.00, total: 850.00 },
      { qty: '50+ pcs', each: 80.00, total: 4000.00 },
      { qty: '100+ pcs', each: 76.00, total: 7600.00 },
    ],
    colors: {
      White: [
        { src: 'assets/img/products/tall-cake-box-10x10x14/white-empty-open.jpeg', alt: 'White tall cake box, empty, open' },
        { src: 'assets/img/products/tall-cake-box-10x10x14/white-with-cocomelon-cake.jpeg', alt: 'White tall cake box with a birthday cake' },
      ],
    },
  },
};

const SWATCH_COLORS = { Pink: '#f2c9d3', White: '#ffffff' };

const sizeOptionsEl = document.getElementById('sizeOptions');
const colorSwatchesEl = document.getElementById('colorSwatches');
const galleryThumbsEl = document.getElementById('galleryThumbs');
const mainImageEl = document.getElementById('mainImage');
const variantSelectedEl = document.getElementById('variantSelected');
const sizeInTitleEl = document.getElementById('sizeInTitle');
const priceOldEl = document.getElementById('priceOld');
const priceBestEl = document.getElementById('priceBest');
const priceTierBodyEl = document.getElementById('priceTierBody');
const dimensionsTextEl = document.getElementById('dimensionsText');
const colorsAvailableTextEl = document.getElementById('colorsAvailableText');

if (sizeOptionsEl && colorSwatchesEl && galleryThumbsEl && mainImageEl) {
  let activeSize = Object.keys(TALL_CAKE_BOX_DATA)[0];
  let activeColor = Object.keys(TALL_CAKE_BOX_DATA[activeSize].colors)[0];

  function renderSizeOptions() {
    sizeOptionsEl.innerHTML = '';
    Object.keys(TALL_CAKE_BOX_DATA).forEach((sizeKey) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'size-btn' + (sizeKey === activeSize ? ' is-active' : '');
      btn.textContent = TALL_CAKE_BOX_DATA[sizeKey].label;
      btn.addEventListener('click', () => {
        activeSize = sizeKey;
        activeColor = Object.keys(TALL_CAKE_BOX_DATA[activeSize].colors)[0];
        renderAll();
      });
      sizeOptionsEl.appendChild(btn);
    });
  }

  function renderColorSwatches() {
    colorSwatchesEl.innerHTML = '';
    const colors = Object.keys(TALL_CAKE_BOX_DATA[activeSize].colors);
    colors.forEach((colorName) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch' + (colorName === activeColor ? ' is-active' : '');
      btn.style.background = SWATCH_COLORS[colorName] || '#ccc';
      btn.setAttribute('aria-label', colorName);
      btn.dataset.color = colorName;
      btn.addEventListener('click', () => {
        activeColor = colorName;
        renderColorSwatches();
        renderGallery();
        if (variantSelectedEl) variantSelectedEl.textContent = activeColor;
      });
      colorSwatchesEl.appendChild(btn);
    });
    if (variantSelectedEl) variantSelectedEl.textContent = activeColor;
  }

  function renderGallery() {
    const images = TALL_CAKE_BOX_DATA[activeSize].colors[activeColor];
    mainImageEl.src = images[0].src;
    mainImageEl.alt = images[0].alt;

    galleryThumbsEl.innerHTML = '';
    images.forEach((img, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'product-thumb' + (index === 0 ? ' is-active' : '');
      const thumbImg = document.createElement('img');
      thumbImg.src = img.src;
      thumbImg.alt = img.alt;
      btn.appendChild(thumbImg);
      btn.addEventListener('click', () => {
        mainImageEl.src = img.src;
        mainImageEl.alt = img.alt;
        galleryThumbsEl.querySelectorAll('.product-thumb').forEach((t) => t.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
      galleryThumbsEl.appendChild(btn);
    });
  }

  function renderPriceAndDetails() {
    const data = TALL_CAKE_BOX_DATA[activeSize];
    if (sizeInTitleEl) sizeInTitleEl.textContent = '– ' + data.label;
    if (priceOldEl) priceOldEl.textContent = 'Rs. ' + data.priceOld.toFixed(2);
    if (priceBestEl) priceBestEl.textContent = 'Best Price: Rs. ' + data.priceBest.toFixed(2);
    if (dimensionsTextEl) dimensionsTextEl.textContent = data.dimensions;
    if (colorsAvailableTextEl) colorsAvailableTextEl.textContent = Object.keys(data.colors).join(' and ');

    if (priceTierBodyEl) {
      priceTierBodyEl.innerHTML = '';
      data.tiers.forEach((tier) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${tier.qty}</td><td>₹${tier.each.toFixed(2)}</td><td>₹${tier.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>`;
        priceTierBodyEl.appendChild(tr);
      });
    }
  }

  function renderAll() {
    renderSizeOptions();
    renderColorSwatches();
    renderGallery();
    renderPriceAndDetails();
  }

  renderAll();
}
