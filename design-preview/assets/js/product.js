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
