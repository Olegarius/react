import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, lifecycle, withState } from 'recompose';

import { getConfig } from 'config';
import { errorActions } from 'reducers';

import Error from './Error';

const mapStateToProps = state => ({
	message: state.getIn([ 'error', 'message' ], '')
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			showError: errorActions.showError,
			hideError: errorActions.hideError
		},
		dispatch
	);

const lifecycleEvents = {
	componentDidUpdate(prevProps) {
		if (this.props.message && this.props.message !== prevProps.message) {
			this.props.showError(this.props.message);
			this.props.setOpen(true);
			setTimeout(()=>{
				this.props.setOpen(false);
				this.props.hideError();
			}, getConfig().gw.showErrorTime);
		}
	}
};

const enhance = compose(
	setDisplayName('ModalContainer'),
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withState('open', 'setOpen', false),
	lifecycle(lifecycleEvents)
);

export default enhance(Error);
