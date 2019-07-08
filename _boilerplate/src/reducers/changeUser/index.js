import changeUserReducer, * as changeUserActions from './changeUser';

const { getUser, addUser, saveUser, clearResults, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } = changeUserActions;

export { getUser, addUser, saveUser, clearResults, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE };
export default changeUserReducer;
