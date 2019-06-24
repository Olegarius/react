import { compose, setDisplayName, withProps } from 'recompose';

import UserList from './UserList';

const addProps = ({ match }) => ({
	count: Number(match.params.usersCount)
});

const enhance = compose(
	setDisplayName('UserListPage'),
	withProps(addProps)
);

export default enhance(UserList);
