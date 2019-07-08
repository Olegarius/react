import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { Map } from 'immutable';

import { localStorageMiddleware, fetchMiddleware } from 'middleware';
import { pageReducer, userListReducer, fetchReducer, modalReducer, changeUserReducer, errorReducer } from 'reducers';

import defaultState from './defaultState';

const rootReducer = combineReducers({
	page: pageReducer,
	userList: userListReducer,
	changeUser: changeUserReducer,
	fetch: fetchReducer,
	modal: modalReducer,
	error: errorReducer
});

const getInitialStore = () => Map(defaultState);

const middleware = applyMiddleware(thunk, apiMiddleware, localStorageMiddleware, fetchMiddleware);

export default function (additionalMiddleware) {
	const middlewares = additionalMiddleware ?
		compose(
			middleware,
			additionalMiddleware
		) :
		middleware;

	return createStore(rootReducer, getInitialStore(), middlewares);
}
