import * as type from '../types'

export function getProducts(products) {
   return {
      type: type.GET_ALL_PRODUCTS,
      payload: products
   }
}

export function getProduct(id) {
   return {
      type: type.GET_PRODUCT,
      productId:id
   }
}

export function deleteProduct(id) {
   return {
      type: type.DELETE_PRODUCT,
      productId: id
   }
}

