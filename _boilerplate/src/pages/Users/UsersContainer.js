import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, setDisplayName } from 'recompose';
import { Map } from 'immutable';

import { pageActions } from 'reducers';

import Users from './Users';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setPage: pageActions.setPage,
			setSettings: pageActions.setSettings
		},
		dispatch
	);

const lifecycleEvents = {
	componentDidMount() {
		const currentPage = this.props.location.pathname.split('/').join('');

		this.props.setPage(currentPage);
	},
	componentWillUnmount() {
		this.props.setSettings(Map());
	}
};

const enhance = compose(
	setDisplayName('UsersContainer'),
	connect(
		null,
		mapDispatchToProps
	),
	lifecycle(lifecycleEvents)
);

export default enhance(Users);
