// Data-driven Tall Cake Box sizes.
// Add a new size by adding an entry here — a full, separate product block
// (its own photos, price, description) renders automatically for it.
const TALL_CAKE_BOX_DATA = {
  '8x8x8': {
    label: '8×8×8 inch',
    dimensions: '8 × 8 × 8 inch',
    priceOld: 65,
    priceBest: 58,
    tiers: [
      { qty: '10+ pcs', each: 65.00, total: 650.00 },
      { qty: '50+ pcs', each: 61.50, total: 3075.00 },
      { qty: '100+ pcs', each: 58.00, total: 5800.00 },
    ],
    colors: {
      White: [
        { src: 'assets/img/products/tall-cake-box-8x8x8/white-open-with-cake.jpeg', alt: 'White tall cake box, open, with cake' },
        { src: 'assets/img/products/tall-cake-box-8x8x8/white-closed.jpeg', alt: 'White tall cake box, closed' },
      ],
      Pink: [
        { src: 'assets/img/products/tall-cake-box-8x8x8/pink-open-with-cake.jpeg', alt: 'Pink tall cake box, open, with cake' },
        { src: 'assets/img/products/tall-cake-box-8x8x8/pink-empty-open.jpeg', alt: 'Pink tall cake box, empty, open' },
      ],
    },
  },
  '10x10x8': {
    label: '10×10×8 inch',
    dimensions: '10 × 10 × 8 inch',
    priceOld: 85,
    priceBest: 76,
    tiers: [
      { qty: '10+ pcs', each: 85.00, total: 850.00 },
      { qty: '50+ pcs', each: 80.00, total: 4000.00 },
      { qty: '100+ pcs', each: 76.00, total: 7600.00 },
    ],
    colors: {
      White: [
        { src: 'assets/img/products/tall-cake-box-10x10x8/white-empty-open.jpeg', alt: 'White tall cake box, empty, open' },
        { src: 'assets/img/products/tall-cake-box-10x10x8/white-with-cocomelon-cake.jpeg', alt: 'White tall cake box with a birthday cake' },
      ],
    },
  },
  '12x12x14': {
    label: '12×12×14 inch',
    dimensions: '12 × 12 × 14 inch',
    priceOld: 100,
    priceBest: 90,
    tiers: [
      { qty: '10+ pcs', each: 100.00, total: 1000.00 },
      { qty: '50+ pcs', each: 94.00, total: 4700.00 },
      { qty: '100+ pcs', each: 90.00, total: 9000.00 },
    ],
    colors: {
      White: [
        { src: 'assets/img/products/tall-cake-box-12x12x14/white-with-wedding-cake-held.jpeg', alt: 'White tall cake box with a wedding cake, held' },
        { src: 'assets/img/products/tall-cake-box-12x12x14/white-open-empty.jpeg', alt: 'White tall cake box, empty, open' },
        { src: 'assets/img/products/tall-cake-box-12x12x14/white-closed.png', alt: 'White tall cake box, closed' },
      ],
    },
  },
  '12x12x20': {
    label: '12×12×20 inch',
    dimensions: '12 × 12 × 20 inch',
    priceOld: 120,
    priceBest: 106,
    tiers: [
      { qty: '10+ pcs', each: 120.00, total: 1200.00 },
      { qty: '50+ pcs', each: 113.00, total: 5650.00 },
      { qty: '100+ pcs', each: 106.00, total: 10600.00 },
    ],
    colors: {
      White: [
        { src: 'assets/img/products/tall-cake-box-12x12x20/white-closed.jpeg', alt: 'White tall cake box, closed' },
      ],
    },
  },
};

const SWATCH_COLORS = { Pink: '#f2c9d3', White: '#ffffff' };

const sizeBlocksEl = document.getElementById('sizeBlocks');
const sizeQuickNavEl = document.getElementById('sizeQuickNav');

function formatINR(amount) {
  return '₹' + amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

function buildTierRows(tiers) {
  return tiers.map((tier) =>
    `<tr><td>${tier.qty}</td><td>${formatINR(tier.each)}</td><td>${formatINR(tier.total)}</td></tr>`
  ).join('');
}

function buildBlock(sizeKey, data) {
  const colorNames = Object.keys(data.colors);
  const hasMultipleColors = colorNames.length > 1;
  const firstColor = colorNames[0];
  const firstImage = data.colors[firstColor][0];

  const swatchesHTML = colorNames.map((name, i) =>
    `<button type="button" class="swatch${i === 0 ? ' is-active' : ''}" style="background:${SWATCH_COLORS[name] || '#ccc'}" data-color="${name}" aria-label="${name}"></button>`
  ).join('');

  const block = document.createElement('section');
  block.className = 'product size-block';
  block.id = 'size-' + sizeKey;
  block.innerHTML = `
    <div class="container product-inner">
      <div class="product-gallery">
        <div class="product-gallery-main">
          <img class="js-main-image" src="${firstImage.src}" alt="${firstImage.alt}">
        </div>
        <div class="product-gallery-thumbs js-gallery-thumbs"></div>
      </div>

      <div class="product-details">
        <h2>Tall Cake Box &ndash; ${data.label}</h2>

        <div class="product-price">
          <span class="price-old">Rs. ${data.priceOld.toFixed(2)}</span>
          <span class="price-best">Best Price: Rs. ${data.priceBest.toFixed(2)}</span>
          <span class="price-note">(example pricing &mdash; to be confirmed)</span>
        </div>
        <p class="product-tax-note">Taxes included. Shipping calculated at checkout.</p>

        ${hasMultipleColors ? `
        <div class="variant-row">
          <span class="qty-label">Colour</span>
          <div class="variant-swatches js-color-swatches">${swatchesHTML}</div>
          <span class="variant-selected js-variant-selected">${firstColor}</span>
        </div>` : ''}

        <div class="qty-row">
          <span class="qty-label">Quantity</span>
          <div class="qty-stepper">
            <button type="button" class="qty-btn qty-minus" aria-label="Decrease quantity">&minus;</button>
            <input type="text" class="qty-value" value="10" readonly>
            <button type="button" class="qty-btn qty-plus" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <table class="price-tier-table">
          <thead>
            <tr><th>Quantity</th><th>Price Per Piece</th><th>Total Price</th></tr>
          </thead>
          <tbody>${buildTierRows(data.tiers)}</tbody>
        </table>
        <p class="price-note">Sample pricing shown for layout purposes only.</p>

        <label class="customise-check">
          <input type="checkbox">
          Get it customised &ndash; minimum order 200 pcs (free single-colour logo print)
        </label>

        <div class="product-actions">
          <button type="button" class="btn btn-outline btn-block">Add to Cart</button>
          <button type="button" class="btn btn-primary btn-block">Buy it Now</button>
        </div>

        <div class="product-description">
          <p><strong>Dimensions:</strong> ${data.dimensions} &nbsp;|&nbsp; Available in ${colorNames.join(' and ')}</p>
          <p>
            Our tall cake boxes are built for layered and tiered cakes, with a clear
            display window and a sturdy base that keeps every cake steady from counter
            to doorstep.
          </p>
        </div>
      </div>
    </div>
  `;

  const mainImageEl = block.querySelector('.js-main-image');
  const thumbsEl = block.querySelector('.js-gallery-thumbs');
  const swatchEls = block.querySelectorAll('.js-color-swatches .swatch');
  const variantSelectedEl = block.querySelector('.js-variant-selected');

  function renderGallery(colorName) {
    const images = data.colors[colorName];
    mainImageEl.src = images[0].src;
    mainImageEl.alt = images[0].alt;
    thumbsEl.innerHTML = '';
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
        thumbsEl.querySelectorAll('.product-thumb').forEach((t) => t.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
      thumbsEl.appendChild(btn);
    });
  }

  swatchEls.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatchEls.forEach((s) => s.classList.remove('is-active'));
      swatch.classList.add('is-active');
      const colorName = swatch.dataset.color;
      if (variantSelectedEl) variantSelectedEl.textContent = colorName;
      renderGallery(colorName);
    });
  });

  renderGallery(firstColor);

  return block;
}

if (sizeBlocksEl) {
  Object.keys(TALL_CAKE_BOX_DATA).forEach((sizeKey, index) => {
    const data = TALL_CAKE_BOX_DATA[sizeKey];
    sizeBlocksEl.appendChild(buildBlock(sizeKey, data));
    if (index < Object.keys(TALL_CAKE_BOX_DATA).length - 1) {
      const divider = document.createElement('hr');
      divider.className = 'size-divider';
      sizeBlocksEl.appendChild(divider);
    }
  });

  // Wire up quantity steppers now that all blocks exist in the DOM.
  document.querySelectorAll('.qty-stepper').forEach((stepper) => {
    const minusBtn = stepper.querySelector('.qty-minus');
    const plusBtn = stepper.querySelector('.qty-plus');
    const valueInput = stepper.querySelector('.qty-value');
    const min = 1;
    minusBtn.addEventListener('click', () => {
      const current = parseInt(valueInput.value, 10) || min;
      valueInput.value = Math.max(min, current - 1);
    });
    plusBtn.addEventListener('click', () => {
      const current = parseInt(valueInput.value, 10) || min;
      valueInput.value = current + 1;
    });
  });
}

if (sizeQuickNavEl) {
  Object.keys(TALL_CAKE_BOX_DATA).forEach((sizeKey) => {
    const link = document.createElement('a');
    link.href = '#size-' + sizeKey;
    link.className = 'size-btn';
    link.textContent = TALL_CAKE_BOX_DATA[sizeKey].label;
    sizeQuickNavEl.appendChild(link);
  });
}
