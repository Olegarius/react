import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, withHandlers } from 'recompose';

import { modalActions } from 'reducers';

import ModalPopup from './ModalPopup';

const mapStateToProps = state => ({
	open: state.get('modal', false)
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			showModal: modalActions.showModal
		},
		dispatch
	);

const handlers = {
	onToggle: props => () => {
		if (props.open) {
			props.showModal(false);
		} else {
			props.showModal(true);
		}
	}
};

const enhance = compose(
	setDisplayName('ModalContainer'),
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withHandlers(handlers)
);

export default enhance(ModalPopup);
