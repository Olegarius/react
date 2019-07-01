import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { Map } from 'immutable';

import { localStorageMiddleware } from 'middleware';
import { pageReducer, userListReducer } from 'reducers';

import defaultState from './defaultState';

const rootReducer = combineReducers({
	page: pageReducer
});

const getInitialStore = () => Map(defaultState);

const middleware = applyMiddleware(
	thunk,
	apiMiddleware,
	localStorageMiddleware
);

export default function (additionalMiddleware) {
	const middlewares = additionalMiddleware ? compose(middleware, additionalMiddleware) : middleware;

	return createStore(rootReducer, getInitialStore(), middlewares);
}
