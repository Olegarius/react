import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Home, Greating, UserList } from 'pages';

const Routes = () => (
	<Switch>
		<Route exact path="/greating" component={ Greating } />
		<Route exact path="/userlist/:usersCount?" component={ UserList } />
		<Route exact path="/" component={ Home } />

		<Redirect to="/" />
	</Switch>
);

export default Routes;
