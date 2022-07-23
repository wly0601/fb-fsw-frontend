const priceFormat = (data) => {
  if (typeof data === 'undefined') {
    return '';
  }
  const priceStr = data.toString();
  let i = priceStr.length;
  let renderPrice = '';
  let counter = 0;

  while (i > 0) {
    renderPrice = priceStr[i - 1] + renderPrice;
    i -= 1;
    counter += 1;
    if (counter === 3 && i !== 0) {
      renderPrice = `.${renderPrice}`;
      counter = 0;
    }
  }

  // eslint-disable-next-line consistent-return
  return `Rp ${renderPrice}`;
};

export default priceFormat;
