import styled from 'styled-components';
import PropTypes from 'prop-types';

const defaultSizes = {
	xxs: '28px',
	xs: '34px',
	s: '38px',
	m: '40px',
	l: '44px',
	xl: '50px',
	xxl: '74px'
};

const getSize = props => defaultSizes[props.size] || defaultSizes['s'];

const IconWrapper = styled.svg.attrs({
	fill: props => props.fill || '#000000',
	width: getSize,
	height: getSize
})`
	overflow: hidden;
	min-width: ${ getSize };
`;

IconWrapper.propTypes = {
	fill: PropTypes.string,
	size: PropTypes.oneOf(Object.keys(defaultSizes)),
	width: PropTypes.string,
	height: PropTypes.string
};

export default IconWrapper;
