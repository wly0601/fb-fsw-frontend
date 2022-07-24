export default function messageDetail(buyerOrder) {
  const result = {
    message: 'Penawaran Produk',
    strikeLinePrice: 'none',
    strikeLineOffering: 'none',
  };
  console.log(buyerOrder);
  // eslint-disable-next-line valid-typeof
  if (!buyerOrder.accBySeller && buyerOrder.accBySeller !== false) {
    result.strikeLinePrice = 'line-through';
  }

  if (buyerOrder.isCanceled) {
    result.message = 'Transaksi Dibatalkan';
    result.strikeLinePrice = 'line-through';
  }

  if (buyerOrder.accBySeller && !buyerOrder.isCanceled) {
    result.strikeLinePrice = 'line-through';
  } else if (buyerOrder.accBySeller === false) {
    result.strikeLineOffering = 'line-through';
  }
  console.log(result);
  return result;
}
