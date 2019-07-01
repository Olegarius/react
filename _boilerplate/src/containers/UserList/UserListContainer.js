import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, setDisplayName, withHandlers, withProps, withState } from 'recompose';
import { List } from 'immutable';
import { withRouter } from 'react-router-dom';

import { getUserList, getPageTitle } from 'selectors';
import { pageActions } from 'reducers';
import { getLogin } from 'utils/Auth';

import UserList from './UserList';

export const mapStateToProps = state => ({
	title: getPageTitle(state)
});

export const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setPage: pageActions.setPage,
			setSettings: pageActions.setSettings
		},
		dispatch
	);

const addProps = props => ({
	auth: !!getLogin(props)
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
    const pageParts = this.props.location.pathname.split('/');
		const currentPage = pageParts.length > 1 ? pageParts[1] : '';

		this.props.setPage(currentPage);

		this.props.setUserList(getUsers(this.props));
	},
	componentDidUpdate(prevProps) {
		if (prevProps.userListCount !== this.props.userListCount) {
			this.props.setUserList(getUsers(this.props));
		}
	},
	componentWillUnmount() {}
};

const enhance = compose(
	setDisplayName('UserListContainer'),
	connect(mapStateToProps, mapDispatchToProps),
  withRouter,
	withProps(addProps),
	withState('userList', 'setUserList', List()),
	withState('authStatus', 'setAuthStatus', props => props.auth),
	withHandlers(handlers),
	lifecycle(lifecycleEvents)
);

export default enhance(UserList);
