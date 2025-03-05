import {
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE,
    UPDATE_USER_START, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
    DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE,
  } from '../actions/userActions';
  
  interface UserState {
    data: any[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
      case FETCH_USERS_START:
      case CREATE_USER_START:
      case UPDATE_USER_START:
      case DELETE_USER_START:
        return { ...state, loading: true, error: null };
      case FETCH_USERS_SUCCESS:
        return { ...state, loading: false, data: action.payload.users };
      case CREATE_USER_SUCCESS:
        return { ...state, loading: false, data: [...state.data, action.payload] };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.map(user => user.id === action.payload.id ? action.payload : user),
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.filter(user => user.id !== action.payload),
        };
      case FETCH_USERS_FAILURE:
      case CREATE_USER_FAILURE:
      case UPDATE_USER_FAILURE:
      case DELETE_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;