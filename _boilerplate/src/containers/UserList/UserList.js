import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Reload } from './UserList.style';

const UserList = props => (
	<Fragment>
		<Reload onClick={ props.reloadUserList } auth={ props.authStatus }>
      Reload!
		</Reload>
		<ol>
			{props.userList.map(i => (
				<li key={ i.get('id') }>{i.get('name')}</li>
			))}
		</ol>
	</Fragment>
);

UserList.propTypes = {
	userList: ImmutablePropTypes.listOf(
		ImmutablePropTypes.contains({
			id: PropTypes.number,
			name: PropTypes.string
		})
	),
	reloadUserList: PropTypes.func,
	authStatus: PropTypes.bool
};

export default UserList;
