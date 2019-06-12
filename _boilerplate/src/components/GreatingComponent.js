import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Set, Map, List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

const GreatingComponent = ({ name }) => (
	<div>Greating { name }!</div>
);

GreatingComponent.propTypes = {
	name: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
	progress: PropTypes.number,
	users: ImmutablePropTypes.list,
	//coupons: ImmutablePropTypes.orderedSet,
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
	}),
};

GreatingComponent.defaultProps = {
	name: 'noname',
	coupons: Set(),
  onClick: () => {},
  children: null,
  users: List()
};

export default GreatingComponent;