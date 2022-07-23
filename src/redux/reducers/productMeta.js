/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

const initialStateProduct = {
  productMetaLoading: false,
  productMetaResult: false,
  productMetaError: false,
};

export const getProductMetaReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_META':
      return {
        ...state,
        productMetaLoading: action.payload.loading,
        productMetaResult: action.payload.result,
        productMetaError: action.payload.error,
      };
    default:
      return state;
  }
};
