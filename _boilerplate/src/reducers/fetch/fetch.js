import {
	userListActions
} from 'reducers';

export const FETCHING_STARTED = 'FETCHING_STARTED';
export const FETCHING_FINISHED = 'FETCHING_FINISHED';

export const fetchingStarted = () => ({
	type: FETCHING_STARTED
});

export const fetchingFinished = () => ({
	type: FETCHING_FINISHED
});

export default function (state = Map(), action = {}) {
	switch (action.type) {
		case FETCHING_STARTED:
		case userListActions.USER_LIST_REQUEST:
			return state.set('processing', true);

		case FETCHING_FINISHED:
		case userListActions.USER_LIST_SUCCESS:
		case userListActions.USER_LIST_FAILURE:
			return state.set('processing', false);

		default:
			return state;
	}
}
