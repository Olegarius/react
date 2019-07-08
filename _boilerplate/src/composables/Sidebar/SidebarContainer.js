import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, setDisplayName, withState, withHandlers } from 'recompose';
import { List } from 'immutable';

import { pageActions } from 'reducers';

import Sidebar from './Sidebar';

const pages = List([ { title: 'User management', to: 'users' }, { title: 'Information', to: 'info' } ]);

const mapStateToProps = state => ({
	pages: state.getIn([ 'page', 'pages' ], List()),
	currentPage: state.getIn([ 'page', 'id' ], '')
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			initPages: pageActions.initPages
		},
		dispatch
	);

const handlers = {
	handleToggleSidebar: props => () => {
		props.setMenuVisible(!props.menuVisible);
	}
};

const lifecycleEvents = {
	componentDidMount() {
		this.props.initPages(pages);
	}
};

const enhance = compose(
	setDisplayName('SidebarContainer'),
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withState('menuVisible', 'setMenuVisible', true),
	withHandlers(handlers),
	lifecycle(lifecycleEvents)
);

export default enhance(Sidebar);
