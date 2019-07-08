export const SHOW_MODAL = 'SHOW_MODAL';

export const showModal = (status = false) => ({
	type: SHOW_MODAL,
	payload: status
});

export default function (state = false, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return action.payload;
		default:
			return state;
	}
}
