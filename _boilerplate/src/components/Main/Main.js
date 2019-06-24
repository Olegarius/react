import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from './Main.style';

const userListClick = history => () => {
	const userListCount = prompt('UserList count=');

	history.replace(`/userlist/${ userListCount }`);
};

const Main = ({ history, children }) => (
	<Fragment>
		<ul>
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<NavLink to="/greating">Greating</NavLink>
			</li>
			<li>
				<button onClick={ userListClick(history) }>UserList</button>
			</li>
		</ul>
		{children}
	</Fragment>
);

Main.propTypes = {
	history: PropTypes.object,
	children: PropTypes.node
};

export default Main;
