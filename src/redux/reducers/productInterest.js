/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */

const initialStateProduct = {
  interestLoading: false,
  interestResult: false,
  interestError: false,
};

export const getProductInterestReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case 'setProductInterest':
      return {
        ...state,
        interestLoading: action.payload.loading,
        interestResult: action.payload.result,
        interestError: action.payload.error,
      };
    default:
      return state;
  }
};
