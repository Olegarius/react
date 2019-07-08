import errorReducer, * as errorActions from './error';

const { SHOW_ERROR, HIDE_ERROR, showError, hideError } = errorActions;

export { SHOW_ERROR, HIDE_ERROR, showError, hideError };
export default errorReducer;
