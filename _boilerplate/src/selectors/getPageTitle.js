import { createSelector } from 'reselect';

const getPageId = state => state.getIn([ 'page', 'id' ], '');
const getPagesList = state => state.getIn([ 'page', 'pages' ], []);

export default createSelector(
	getPageId,
	getPagesList,
	(id, pages) => pages.filter(page => page.to === id).getIn([ 0, 'title' ], '')
);
