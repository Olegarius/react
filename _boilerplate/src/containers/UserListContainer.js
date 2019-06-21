import { compose, lifecycle, setDisplayName, withHandlers, withProps, withState } from 'recompose';
import { List } from 'immutable';

import { getUserList } from 'selectors';
import { getLoginStatus } from 'utils/Auth';

import UserList from 'components/UserList';

const addProps = props => ({
	auth: getLoginStatus(props)
});

const getUsers = props => getUserList(props);

const handlers = {
	reloadUserList: props => () => {
		if (props.authStatus) {
			props.setUserList(getUsers(props));
		}
	}
};

const lifecycleEvents = {
	componentDidMount() {
		this.props.setUserList(getUsers(this.props));
	},
	componentDidUpdate(prevProps) {},
	componentWillUnmount() {}
};

const enhance = compose(
	setDisplayName('UserListContainer'),
	withProps(addProps),
	withState('userList', 'setUserList', List()),
	withState('authStatus', 'setAuthStatus', props => props.auth),
	withHandlers(handlers),
	lifecycle(lifecycleEvents)
);

export default enhance(UserList);
