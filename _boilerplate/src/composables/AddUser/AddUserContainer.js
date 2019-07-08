import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, setDisplayName, lifecycle, withHandlers, withState } from 'recompose';
import { OrderedSet, Map } from 'immutable';

import { getConfig } from 'config';
import { changeUserActions, modalActions, userListActions } from 'reducers';

import AddUser from './AddUser';

const mapStateToProps = state => ({
	users: state.getIn([ 'changeUser', 'users' ], OrderedSet()).toOrderedSet(),
	processing: state.getIn([ 'changeUser', 'processing' ], false)
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getUser: changeUserActions.getUser,
			addUser: changeUserActions.addUser,
			clearResults: changeUserActions.clearResults,
			showModal: modalActions.showModal,
			setUserToList: userListActions.setUserToList
		},
		dispatch
	);

let interval = null;

const handlers = {
	onCancel: props => () => {
		props.showModal(false);
	},
	setUser: props => user => () => {
		props.setQ(user.get('email'));
		props.setUserObject(user);
		props.clearResults();
	},
	onAdd: props => () => {
		props.setDisabledBtn(true);
		props.addUser(props.userObject).then((response)=>{
			props.setDisabledBtn(false);
			if (response.payload.userId) {
				props.setUserToList(response.payload);
				props.onSave(response.payload)();
			}
		});
	},
	onSearch: props => (e) => {
		clearInterval(interval);
		interval = null;

		const q = e.currentTarget.value;
		const time = Date.now();
		const deadlineTime = time + getConfig().gw.searchKeyEnterDelay;

		props.setDisabledBtn(q.length === 0);
		props.setQ(q);
		if (q.length < 3) {
			return;
		}

		interval = setInterval(()=>{
			const currentTime = Date.now();

			if (currentTime - deadlineTime >= 0) {
				props.setDisabledBtn(true);
				props.getUser(q).then(()=>{
					props.setDisabledBtn(false);
				});
				clearInterval(interval);
				interval = null;
			}
		}, 100);
	}
};

const lifecycleEvents = {
	componentDidMount() {
	},
	componentWillUnmount() {
	}
};

const enhance = compose(
	setDisplayName('AddUserContainer'),
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withState('q', 'setQ', ''),
	withState('userObject', 'setUserObject', Map()),
	withState('disabledBtn', 'setDisabledBtn', true),
	withHandlers(handlers),
	lifecycle(lifecycleEvents)
);

export default enhance(AddUser);
