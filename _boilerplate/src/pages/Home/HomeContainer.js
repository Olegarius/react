import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, setDisplayName } from 'recompose';
import { Map } from 'immutable';

import { pageActions } from 'reducers';

import Home from './Home';

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
		this.props.setPage('');
	},
	componentWillUnmount() {
		this.props.setSettings(Map());
	}
};

const enhance = compose(
	setDisplayName('HomeContainer'),
	connect(
		null,
		mapDispatchToProps
	),
	lifecycle(lifecycleEvents)
);

export default enhance(Home);
