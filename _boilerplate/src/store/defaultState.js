import { Map, List } from 'immutable';

const defaultState = {
	page: Map({ title: '', settings: {}, pages: List() }),
	userList: Map(),
	changeUser: Map(),
	fetch: Map({ processing: false }),
	modal: false,
	error: Map({ message: '' })
};

export default defaultState;
