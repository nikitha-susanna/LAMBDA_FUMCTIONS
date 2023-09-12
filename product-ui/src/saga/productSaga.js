import { call, put, takeEvery, all } from "redux-saga/effects";
import * as type from "../redux/types";

const apiUrl = "http://localhost:5001";

function getAllAPI() {
   return fetch(apiUrl + "/getProducts", {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   })
      .then(response => {
      return response.json();
      })
      .catch(error => {
      console.log(error);
   });
}

function* getAllProducts() {
   try {
      const products = yield call(getAllAPI);
      yield put({ type: type.GET_PRODUCTS_SUCCESS, products: products.body });
   } catch (error) {
      yield put({ type: type.GET_PRODUCTS_FAILED, message: error.message });
   }
}

function* getProductsSaga() {
   yield takeEvery(type.GET_ALL_PRODUCTS, getAllProducts);
}

function getByIdAPI(action) {
   return fetch(apiUrl + "/getProduct/"+ action.productId, {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   })
      .then(response => {
         return response.json();
      })
      .catch(error => {
         console.log(error);
      }
   );
}

function* getProduct(action) {
   try {
     const product = yield call(getByIdAPI,action);
     yield put({ type: type.GET_PRODUCT_SUCCESS, product: product.body });
   } catch (error) {
     yield put({ type: type.GET_PRODUCT_FAILED, message: error.message });
   }
}

function* getSingleProduct() {
   yield takeEvery(type.GET_PRODUCT, getProduct);
}

function deleteAPI(action) {
   return fetch(apiUrl + "/deleteProduct/"+ action.productId, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json"
      }
   })
      .then(response => {
         return response.json();
      })
      .catch(error => {
         console.log(error);
      }
   );
}

function* deleteProduct(action) {
   try {
     yield call(deleteAPI,action);
     const products = yield call(getAllAPI);
     yield put({ type: type.DELETE_PRODUCT_SUCCESS, product: products.body });
   } catch (error) {
     yield put({ type: type.DELETE_PRODUCT_FAILED, message: error.message });
   }
}

function* deleteSingleProduct() {
   yield takeEvery(type.DELETE_PRODUCT, deleteProduct);
}

export default function* rootSaga() {
   yield all([
      getProductsSaga(),
      getSingleProduct(),
      deleteSingleProduct()
   ]);
}
