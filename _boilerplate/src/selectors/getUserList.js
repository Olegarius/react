import { createSelector } from 'reselect';
import faker from 'faker';
import { List, fromJS } from 'immutable';

const getAuth = props => props.auth || false;
const getUserList = ({ userListCount }) => {
	const users = [];

	if (!Object.is(userListCount, NaN)) {
		for (let i = 0; i < userListCount; i++) {
			users.push(
				fromJS({
					name: faker.internet.userName(),
					id: i
				})
			);
		}
	}

	return users;
};

export default createSelector(
	getAuth,
	getUserList,
	(auth, userList) => (auth ? List(userList) : List())
);
