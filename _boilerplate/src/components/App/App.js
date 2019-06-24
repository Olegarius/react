import React from 'react';
import { withRouter } from 'react-router-dom';

import Main from 'components/Main';
import Routes from 'root/Routes';
import AuthHOC from 'root/AuthHOC';

const App = props => (
	<Main { ...props }>
		<Routes />
	</Main>
);

export default AuthHOC(withRouter(App));
