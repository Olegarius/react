import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { asyncLoader } from 'utils';
import { Main, Error } from 'composables';
import Routes from 'root/Routes';
import AuthHOC from 'root/AuthHOC';

const App = (props) => {
	const [ configLoaded, setConfigLoaded ] = useState(false);
	const SvgSprite = asyncLoader(() => import(/* webpackChunkName: "svgsprite" */ 'elements/SvgSprite'));

	let awaitConfig = setInterval(()=> {
		if (window.__globalConfig__) {
			setConfigLoaded(true);
			clearInterval(awaitConfig);
			awaitConfig = null;
		}
	});

	return configLoaded &&
		<Main { ...props }>
			<Error />
			<Routes />
			<SvgSprite />
		</Main>;

};

export default AuthHOC(withRouter(App));
