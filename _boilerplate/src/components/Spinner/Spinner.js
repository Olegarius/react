import React from 'react';
import PropTypes from 'prop-types';

import SpinnerWrapper from './Spinner.style';

const Spinner = ({ color, size }) => (
	<SpinnerWrapper color={ color } viewBox="0 0 50 50" width={ size } height={ size }>
		<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
	</SpinnerWrapper>
);

Spinner.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

Spinner.defaultProps = {
	color: '#777777',
	size: 50
};

export default Spinner;
