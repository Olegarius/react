import React from 'react';
import PropTypes from 'prop-types';
import IconWrapper from './SvgIcon.style';

const SvgIcon = ({ name, ...props }) => (
	<IconWrapper { ...props }>
		<use xlinkHref={ `#${ name }` } />
	</IconWrapper>
);

SvgIcon.propTypes = {
	...IconWrapper.props,
	name: PropTypes.string.isRequired
};

export default SvgIcon;
