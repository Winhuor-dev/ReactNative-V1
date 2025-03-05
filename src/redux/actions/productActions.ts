// Product Action Types
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const CREATE_PRODUCT_START = 'CREATE_PRODUCT_START';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

// Product Action Creators
export const fetchProductsStart = () => ({ type: FETCH_PRODUCTS_START });
export const fetchProductsSuccess = (data: any) => ({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
export const fetchProductsFailure = (error: string) => ({ type: FETCH_PRODUCTS_FAILURE, payload: error });

export const createProductStart = (product: { title: string; price: number }) => ({
  type: CREATE_PRODUCT_START,
  payload: product,
});
export const createProductSuccess = (data: any) => ({ type: CREATE_PRODUCT_SUCCESS, payload: data });
export const createProductFailure = (error: string) => ({ type: CREATE_PRODUCT_FAILURE, payload: error });

export const updateProductStart = (id: number, product: { title: string; price: number }) => ({
  type: UPDATE_PRODUCT_START,
  payload: { id, product },
});
export const updateProductSuccess = (data: any) => ({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
export const updateProductFailure = (error: string) => ({ type: UPDATE_PRODUCT_FAILURE, payload: error });

export const deleteProductStart = (id: number) => ({ type: DELETE_PRODUCT_START, payload: id });
export const deleteProductSuccess = (id: number) => ({ type: DELETE_PRODUCT_SUCCESS, payload: id });
export const deleteProductFailure = (error: string) => ({ type: DELETE_PRODUCT_FAILURE, payload: error });