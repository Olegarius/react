export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const showError = message => ({
	type: SHOW_ERROR,
	message
});

export const hideError = () => ({
	type: HIDE_ERROR
});

export default function (state = Map(), action = {}) {
	switch (action.type) {
		case SHOW_ERROR:
			return state.set('message', action.message || '');

		case HIDE_ERROR:
			return state.set('message', '');

		default:
			return state;
	}
}
