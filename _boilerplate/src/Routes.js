import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { Home, Users, Page404 } from 'pages';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={ Home } />
		<Route exact path="/404" component={ Page404 } />
		<Route exact path="/users" component={ Users } />

		<Redirect to="/404" />
	</Switch>
);

export default Routes;
