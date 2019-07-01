import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import store from 'store';

import App from 'components/App';

const reduxDevTools =
	typeof window !== 'undefined' &&
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__({ serialize: { immutable: Immutable } });
const adminStore = store(reduxDevTools);

render(
	<BrowserRouter>
		<Provider store={ adminStore }>
      <App />
    </Provider>
	</BrowserRouter>,
	document.querySelector('#root')
);
