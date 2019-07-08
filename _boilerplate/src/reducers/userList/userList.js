import { Map, fromJS } from 'immutable';
import { RSAA } from 'redux-api-middleware';
import { normalize } from 'normalizr';

import { users } from 'schemas';
import { getEndpointUrl, getConfig, tenantId } from 'config';

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAILURE = 'USER_LIST_FAILURE';
export const GET_ALLOW_REGISTER_REQUEST = 'GET_ALLOW_REGISTER_REQUEST';
export const GET_ALLOW_REGISTER_SUCCESS = 'GET_ALLOW_REGISTER_SUCCESS';
export const GET_ALLOW_REGISTER_FAILURE = 'GET_ALLOW_REGISTER_FAILURE';
export const PUT_ALLOW_REGISTER_REQUEST = 'PUT_ALLOW_REGISTER_REQUEST';
export const PUT_ALLOW_REGISTER_SUCCESS = 'PUT_ALLOW_REGISTER_SUCCESS';
export const PUT_ALLOW_REGISTER_FAILURE = 'PUT_ALLOW_REGISTER_FAILURE';
export const SET_USER = 'SET_USER';

const pageSize = 20;

export const getUserList = (q, orderBy, continuationToken) => ({
	[RSAA]: {
		endpoint: getEndpointUrl('users', { tenantId, pageSize, q: (q ? q : undefined), orderBy: (orderBy ? orderBy : undefined), continuationToken: (continuationToken ? continuationToken : undefined) }),
		method: 'GET',
		headers: getConfig().gw.headers,
		types: [
			USER_LIST_REQUEST,
			{
				type: USER_LIST_SUCCESS,
				meta: { continuationToken }
			},
			USER_LIST_FAILURE ]
	}
});

export const getAllowRegister = () => ({
	[RSAA]: {
		endpoint: getEndpointUrl('getAllowRegister', { tenantId }),
		method: 'GET',
		headers: getConfig().gw.headers,
		types: [ GET_ALLOW_REGISTER_REQUEST, GET_ALLOW_REGISTER_SUCCESS, GET_ALLOW_REGISTER_FAILURE ]
	}
});

export const putAllowRegister = () => (dispatch, getState) => {
	const postData = getState().getIn([ 'userList', 'tenantData' ], Map()).toJS();

	postData.allowSelfOnboarding = !postData.allowSelfOnboarding;

	return dispatch({
		[RSAA]: {
			endpoint: getEndpointUrl('putAllowRegister', { tenantId }),
			method: 'PUT',
			body: JSON.stringify(postData),
			headers: getConfig().gw.headers,
			types: [ PUT_ALLOW_REGISTER_REQUEST, PUT_ALLOW_REGISTER_SUCCESS, PUT_ALLOW_REGISTER_FAILURE ]
		}
	});
};

export const setUserToList = user => ({
	type: SET_USER,
	payload: { user }
});

export default function (state = Map(), action = {}) {
	switch (action.type) {
		case USER_LIST_SUCCESS:
			const normalizedData = normalize(action.payload, users);
			const oldUserList = state.get('users', Map()).toJS();
			const newUserList = Object.assign({}, normalizedData.entities.user);
			const userList = action.meta.continuationToken ? Object.assign({}, oldUserList, newUserList) : newUserList;

			return state
				.set('users', fromJS(userList))
				.set('continuationToken', normalizedData.result.continuationToken);

		case GET_ALLOW_REGISTER_SUCCESS:
			return state.set('tenantData', Map(action.payload));

		case PUT_ALLOW_REGISTER_REQUEST:
		case PUT_ALLOW_REGISTER_FAILURE:
			const allowSelfOnboarding = state.getIn([ 'tenantData', 'allowSelfOnboarding' ], false);

			return state.setIn([ 'tenantData', 'allowSelfOnboarding' ], !allowSelfOnboarding);

		case SET_USER:
			return state.setIn([ 'users', action.payload.user.userId ], fromJS(action.payload.user));
		default:
			return state;
	}
}
