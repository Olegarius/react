import { Map, List } from 'immutable';

const defaultState = {
	page: Map({ title: '', settings: {}, pages: List() })
};

export default defaultState;
