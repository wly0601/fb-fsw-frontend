function offeringCardLayout(buyerOrder) {
  const result = {
    btnAccReject: false,
    btnStatus: false,
  };

  if (buyerOrder.accBySeller === null) {
    result.btnAccReject = true;
  } else {
    result.btnStatus = true;
  }

  if (buyerOrder.accBySeller === false) {
    result.btnAccReject = false;
    result.btnStatus = false;
  }

  if (buyerOrder.isCanceled === true) {
    result.btnStatus = false;
  } else if (buyerOrder.isCanceled === false) {
    result.btnStatus = true;
  }
  console.log(result);
  return result;
}

export default offeringCardLayout;
