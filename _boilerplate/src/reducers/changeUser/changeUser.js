import { Map, fromJS } from 'immutable';
import { RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { users } from 'schemas';
import { getEndpointUrl, getConfig, tenantId } from 'config';

export const CLEAR_RESULTS = 'CLEAR_RESULTS';
export const GET_USER_REQUEST = 'GET_USERS_REQUEST';
export const GET_USER_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USER_FAILURE = 'GET_USERS_FAILURE';
export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';
export const PUT_USER_REQUEST = 'PUT_USER_REQUEST';
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS';
export const PUT_USER_FAILURE = 'PUT_USER_FAILURE';

export const clearResults = () => ({
	type: CLEAR_RESULTS
});

export const getUser = q => ({
	[RSAA]: {
		endpoint: getEndpointUrl('getGraphUsers', { tenantId, q: (q ? q : undefined) }),
		method: 'GET',
		headers: getConfig().gw.headers,
		types: [ GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE ]
	}
});

export const addUser = user => (dispatch) => {
	const postData = user.toJS();

	return dispatch({
		[RSAA]: {
			endpoint: getEndpointUrl('users'),
			method: 'POST',
			body: JSON.stringify(postData),
			headers: getConfig().gw.headers,
			types: [ POST_USER_REQUEST, POST_USER_SUCCESS, POST_USER_FAILURE ]
		}
	});
};

export const saveUser = user => (dispatch) => {
	const postData = user.toJS();

	return dispatch({
		[RSAA]: {
			endpoint: getEndpointUrl('users'),
			method: 'PUT',
			body: JSON.stringify(postData),
			headers: getConfig().gw.headers,
			types: [ PUT_USER_REQUEST, PUT_USER_SUCCESS, PUT_USER_FAILURE ]
		}
	});
};

export default function (state = Map(), action = {}) {
	switch (action.type) {
		case CLEAR_RESULTS:
			return state.set('users', Map());

		case GET_USER_REQUEST:
			return state.set('users', Map()).set('processing', true);

		case GET_USER_SUCCESS:
			const normalizedData = normalize(action.payload, users);
			const userList = Object.assign({}, normalizedData.entities.user);

			return state.set('users', fromJS(userList)).set('processing', false);

		case GET_USER_FAILURE:
			return state.set('processing', false);

		default:
			return state;
	}
}
