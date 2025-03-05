import {
    FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
    CREATE_PRODUCT_START, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_START, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
  } from '../actions/productActions';
  
  interface ProductState {
    data: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: ProductState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action: any): ProductState => {
    switch (action.type) {
      case FETCH_PRODUCTS_START:
      case CREATE_PRODUCT_START:
      case UPDATE_PRODUCT_START:
      case DELETE_PRODUCT_START:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, data: action.payload.products };
      case CREATE_PRODUCT_SUCCESS:
        return { ...state, loading: false, data: [...state.data, action.payload] };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.map(product => product.id === action.payload.id ? action.payload : product),
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.filter(product => product.id !== action.payload),
        };
      case FETCH_PRODUCTS_FAILURE:
      case CREATE_PRODUCT_FAILURE:
      case UPDATE_PRODUCT_FAILURE:
      case DELETE_PRODUCT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;