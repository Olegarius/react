import React, { useState } from 'react';

import { login, getLogin } from 'utils/Auth';

export default (ChildComponent) => {
	const AuthHOC = () => {
		const [ name, setName ] = useState(getLogin() ? 'SomeUser' : '');

		const auth = () => {
    	if (name) {
    		return true;
    	}

    	const name = prompt('Enter your name: ');

    	if (!name || !name.trim().length) {
    		return false;
    	}

    	setName({ name });
    	login(name);

    	return true;
		};

		// eslint-disable-next-line react/display-name
		const noName = () => (
    	<div>
    		<div>You didn't enter name!</div>
    		<button onClick={ auth }>try again?</button>
    	</div>
		);

  	return name ? <ChildComponent name={ name } /> : noName();
	};

	return AuthHOC;
};
