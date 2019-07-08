import userListReducer, * as userListActions from './userList';

const { USER_LIST_SUCCESS, USER_LIST_REQUEST, USER_LIST_FAILURE, getUserList, getAllowRegister, putAllowRegister, setUserToList } = userListActions;

export { USER_LIST_SUCCESS, USER_LIST_REQUEST, USER_LIST_FAILURE, getUserList, getAllowRegister, putAllowRegister, setUserToList };
export default userListReducer;
