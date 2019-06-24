import React from 'react';
import PropTypes from 'prop-types';

import { UserList } from 'containers';

const UserListPage = ({ count }) => <UserList userListCount={ count } />;

UserListPage.propTypes = {
	count: PropTypes.number
};

export default UserListPage;
