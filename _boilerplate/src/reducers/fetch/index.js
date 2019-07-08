import fetchReducer, * as fetchActions from './fetch';

const { FETCHING_STARTED, FETCHING_FINISHED, fetchingStarted, fetchingFinished } = fetchActions;

export { FETCHING_STARTED, FETCHING_FINISHED, fetchingStarted, fetchingFinished };
export default fetchReducer;
