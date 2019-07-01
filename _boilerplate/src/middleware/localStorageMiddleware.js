import { SET_PAGE } from 'reducers/page';

export default ({ getState }) => next => (action) => {
	const result = next(action);

	switch (action.type) {
		case SET_PAGE:
			localStorage.setItem('pageTitle', action.payload.id);

			return result;
	}

	return result;
};
