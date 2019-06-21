import React, { Component } from 'react';

import { login } from 'utils/Auth';

export default ChildComponent =>
	class AuthHOC extends Component {
		constructor() {
			super();
			this.state = { name: '' };
		}

    auth = () => {
    	if (this.state.name) {
    		return true;
    	}

    	const name = prompt('Enter your name: ');

    	if (!name || !name.trim().length) {
    		return false;
    	}

    	this.setState({ name });
    	login();

    	return true;
    };

    noName = () => (
    	<div>
    		<div>You didn't enter name!</div>
    		<button onClick={ this.auth }>try again?</button>
    	</div>
    );

    render() {
    	return this.state.name ? <ChildComponent name={ this.state.name } /> : this.noName();
    }
	};
