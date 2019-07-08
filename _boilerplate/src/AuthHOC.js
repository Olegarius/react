import React, { useState } from 'react';

import { login, getLogin } from 'utils/Auth';

const HOC = (ChildComponent) => {
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

		const noName = () => (
			<div>
				<div>You are not logined!</div>
				<button onClick={ auth }>Login</button>
			</div>
		);

		return name ? <ChildComponent name={ name } /> : noName();
	};

	return AuthHOC;
};

export default HOC;
