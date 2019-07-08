import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle, setDisplayName, withHandlers, withState } from 'recompose';
import { OrderedSet } from 'immutable';

import { getConfig } from 'config';
import { getPageTitle } from 'selectors';
import { pageActions, userListActions, modalActions } from 'reducers';

import Users from './Users';

export const mapStateToProps = state => ({
	title: getPageTitle(state),
	users: state.getIn([ 'userList', 'users' ], OrderedSet()).toOrderedSet(),
	continuationToken: state.getIn([ 'userList', 'continuationToken' ], ''),
	allowRegister: state.getIn([ 'userList', 'tenantData', 'allowSelfOnboarding' ], false)
});

export const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setSettings: pageActions.setSettings,
			getUserList: userListActions.getUserList,
			putAllowRegister: userListActions.putAllowRegister,
			getAllowRegister: userListActions.getAllowRegister,
			showModal: modalActions.showModal
		},
		dispatch
	);

let interval = null;

const handlers = {
	saveSettings: props => () => {
		props.setSettings(props.settings);
	},
	toggle: props => userId => () => {
		const dropdown = props.dropdown;

		dropdown[userId] = !dropdown[userId];
		props.setDropdown(dropdown);
	},
	search: props => (e) => {
		clearInterval(interval);
		interval = null;

		const q = e.currentTarget.value;
		const time = Date.now();
		const deadlineTime = time + getConfig().gw.searchKeyEnterDelay;

		props.setQ(q);
		if (q && q.length < 3) {
			return;
		}

		interval = setInterval(()=>{
			const currentTime = Date.now();

			if (currentTime - deadlineTime >= 0) {
				props.getUserList(q, props.order);
				clearInterval(interval);
				interval = null;
			}
		}, 100);
	},
	sort: props => (e) => {
		props.setOrder(e.currentTarget.value);
		props.getUserList(props.q, e.currentTarget.value);
	},
	showMore: props => () => {
		props.getUserList(props.q, props.order, props.continuationToken);
	},
	addUser: props => () => {
		props.setShowAddUserPopup(true);
		props.setShowEditUserPopup(false);
		props.showModal(true);
	},
	editUser: props => user => () => {
		props.setUserId(user.userId);
		props.setShowAddUserPopup(false);
		props.setShowEditUserPopup(true);
		props.showModal(true);
	}
};

const lifecycleEvents = {
	componentDidMount() {
		this.props.setShowEditUserPopup(true);
		this.props.getUserList();
		this.props.getAllowRegister();
	}
};

const enhance = compose(
	setDisplayName('UsersContainer'),
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withState('settings', 'backupSettings', ({ initialSettings }) => initialSettings),
	withState('dropdown', 'setDropdown', {}),
	withState('settings', 'backupSettings', ({ initialSettings }) => initialSettings),
	withState('q', 'setQ', ''),
	withState('userId', 'setUserId', ''),
	withState('order', 'setOrder', ''),
	withState('showAddUserPopup', 'setShowAddUserPopup', false),
	withState('showEditUserPopup', 'setShowEditUserPopup', false),
	withHandlers(handlers),
	withRouter,
	lifecycle(lifecycleEvents)
);

export default enhance(Users);
