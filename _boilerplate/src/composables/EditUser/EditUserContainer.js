import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, withHandlers, withState, lifecycle } from 'recompose';
import { Map } from 'immutable';

import { changeUserActions, modalActions, userListActions } from 'reducers';

import EditUser from './EditUser';

const mapStateToProps = (state, { userId }) => ({
	user: state.getIn([ 'userList', 'users', userId ], Map())
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			showModal: modalActions.showModal,
			saveUser: changeUserActions.saveUser,
			setUserToList: userListActions.setUserToList
		},
		dispatch
	);

const handlers = {
	onCancel: props => () => {
		props.showModal(false);
	},
	onSave: props => () => {
		props.setDisabledBtn(true);
		props.saveUser(props.userObject).then((response)=>{
			if (response.payload.isSuccess) {
				props.setDisabledBtn(false);
				props.setUserToList(props.userObject.toJS());
				props.showModal(false);
			}
		});
	},
	onChange: props => (e) => {
		const userObject = props.userObject.set('gender', e.currentTarget.value || '');

		props.setUserObject(userObject);
	}
};

const lifecycleEvents = {
	componentDidMount() {
		this.props.setUserObject(this.props.user);
	}
};

const enhance = compose(
	setDisplayName('EditUserContainer'),
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withState('userObject', 'setUserObject', Map()),
	withState('disabledBtn', 'setDisabledBtn', false),
	withHandlers(handlers),
	lifecycle(lifecycleEvents)
);

export default enhance(EditUser);
