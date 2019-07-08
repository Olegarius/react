import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'shards-react';

import ErrorWraper from './Error.style';

const Error = ({ message, open }) => (
	<ErrorWraper>
		<Alert theme="danger" open={ open }>
			{message}
		</Alert>
	</ErrorWraper>
);

Error.propTypes = {
	message: PropTypes.string,
	open: PropTypes.bool
};

Error.defaultProps = {
	message: '',
	open: false
};

export default Error;
