import { Map } from 'immutable';

export const INIT_PAGES = 'INIT_PAGES';
export const SET_PAGE = 'SET_PAGE';
export const SET_SETTINGS = 'SET_SETTINGS';

export const initPages = pages => ({
	type: INIT_PAGES,
	payload: { pages }
});

export const setPage = id => ({
	type: SET_PAGE,
	payload: { id }
});

export const setSettings = settings => ({
	type: SET_SETTINGS,
	payload: { settings }
});

export default function (state = Map(), action = {}) {
	switch (action.type) {
		case INIT_PAGES:
			return state.set('pages', action.payload.pages);
		case SET_PAGE:
			return state.set('id', action.payload.id || '');
		case SET_SETTINGS:
			return state.set('settings', Map(action.payload.settings) || Map());

		default:
			return state;
	}
}
