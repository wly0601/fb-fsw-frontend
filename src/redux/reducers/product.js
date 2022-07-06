/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

const initialStateProduct = {
  productLoading: false,
  productResult: false,
  productError: false,
};

export const getProductReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'setProducts':
      return {
        ...state,
        productLoading: action.payload.loading,
        productResult: action.payload.result,
        productError: action.payload.error,
      };
    default:
      return state;
  }
};
