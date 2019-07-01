import { createSelector } from 'reselect';
import { List } from 'immutable';

const getPageId = state => state.getIn([ 'page', 'id' ], '');
const getPagesList = () => List([
	{ title: 'User management', to: 'userlist' },
	{ title: 'Information', to: 'info' }
]);

export default createSelector(getPageId, getPagesList, (id, pages) => pages.filter(page => page.to === id).getIn([ 0, 'title' ], ''));
