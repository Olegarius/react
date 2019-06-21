import React, { Fragment } from 'react';

import Greating from 'components/GreatingComponent';
import UserList from 'containers/UserListContainer';

const HelloComponent = () => (
	<Fragment>
		<div>Hello World!</div>
		<Greating />
		<UserList />
	</Fragment>
);

export default HelloComponent;
