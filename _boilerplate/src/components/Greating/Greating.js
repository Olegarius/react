import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Greating = ({ name }) => <div>Greating {name}!</div>;

Greating.propTypes = {
	name: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
	progress: PropTypes.number,
	users: ImmutablePropTypes.list,
	someList: ImmutablePropTypes.setOf(
		ImmutablePropTypes.contains({
			id: PropTypes.number,
			name: PropTypes.string
		})
	),
	buttonStyle: PropTypes.oneOf([ 'default', 'red', 'green', 'blue' ]),
	odds: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
	oddsProps: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	})
};

Greating.defaultProps = {
	name: 'noname',
	onClick: () => {},
	children: null,
	users: List()
};

export default Greating;