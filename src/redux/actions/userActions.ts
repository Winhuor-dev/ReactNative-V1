// User Action Types
export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

// User Action Creators
export const fetchUsersStart = () => ({ type: FETCH_USERS_START });
export const fetchUsersSuccess = (data: any) => ({ type: FETCH_USERS_SUCCESS, payload: data });
export const fetchUsersFailure = (error: string) => ({ type: FETCH_USERS_FAILURE, payload: error });

export const createUserStart = (user: { firstName: string; lastName: string; age: number }) => ({
  type: CREATE_USER_START,
  payload: user,
});
export const createUserSuccess = (data: any) => ({ type: CREATE_USER_SUCCESS, payload: data });
export const createUserFailure = (error: string) => ({ type: CREATE_USER_FAILURE, payload: error });

export const updateUserStart = (id: number, user: { firstName: string; lastName: string; age: number }) => ({
  type: UPDATE_USER_START,
  payload: { id, user },
});
export const updateUserSuccess = (data: any) => ({ type: UPDATE_USER_SUCCESS, payload: data });
export const updateUserFailure = (error: string) => ({ type: UPDATE_USER_FAILURE, payload: error });

export const deleteUserStart = (id: number) => ({ type: DELETE_USER_START, payload: id });
export const deleteUserSuccess = (id: number) => ({ type: DELETE_USER_SUCCESS, payload: id });
export const deleteUserFailure = (error: string) => ({ type: DELETE_USER_FAILURE, payload: error });