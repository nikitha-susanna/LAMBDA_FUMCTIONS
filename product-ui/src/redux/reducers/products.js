import * as type from "../types";

const initialState = {
   products: [],
   loading: false,
   error: null
};

export default function products(state = initialState, action) {
   switch (action.type) {
      case type.GET_ALL_PRODUCTS:
         return {
            ...state,
            loading: true
         };
      case type.GET_PRODUCTS_SUCCESS:
         return {
            ...state,
            loading: false,
            products: action.products
         };
      case type.GET_PRODUCTS_FAILED:
         return {
            ...state,
            loading: false,
            error: action.message
         };
      case type.GET_PRODUCT:
         return {
            ...state,
            loading: true,
            product: action.productId
         };
      case type.GET_PRODUCT_SUCCESS:
         return {
            ...state,
            loading: false,
            product: action.product
         };
      case type.GET_PRODUCT_FAILED:
         return {
            ...state,
            loading: false,
            error: action.message
         };
      case type.DELETE_PRODUCT:
         return {
            ...state,
            loading: true,
            product: action.productId
         };
      case type.DELETE_PRODUCT_SUCCESS:
         return {
            ...state,
            loading: false,
            products: action.products
         };
      case type.DELETE_PRODUCT_FAILED:
         return {
            ...state,
            loading: false,
            error: action.message
         };
      default:
         return initialState;
   }
}
