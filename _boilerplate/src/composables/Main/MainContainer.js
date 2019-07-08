import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import Main from './Main';

const mapStateToProps = state => ({
	fetching: state.getIn([ 'fetch', 'processing' ], false)
});

const enhance = compose(
	setDisplayName('MainContainer'),
	connect(
		mapStateToProps,
		null
	)
);

export default enhance(Main);
