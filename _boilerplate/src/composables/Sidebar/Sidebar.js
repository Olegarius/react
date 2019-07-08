import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import { Col, Nav, NavItem } from 'shards-react';
import { NavLink as RouteNavLink } from 'react-router-dom';

import SidebarWrapper, { MainNavbar, ItemTitle, Link, Arrow, ArrowBack, NavbarItem } from './Sidebar.style';

const Sidebar = ({ pages, currentPage, menuVisible, handleToggleSidebar }) => {
	const classes = classNames('main-sidebar', 'px-0', 'col-12', menuVisible && 'open');

	return (
		<SidebarWrapper>
			{!menuVisible && <ArrowBack className="sidebar_arrow" onClick={ handleToggleSidebar }>
				<i className="material-icons">&#xE5C8;</i>
			</ArrowBack>}
			<Col tag="aside" className={ classes } lg={{ size: 2 }} md={{ size: 3 }}>
				<MainNavbar>
					<NavbarItem>Gender Fitness Administration</NavbarItem>
					{menuVisible && <Arrow className="sidebar_arrow" onClick={ handleToggleSidebar }>
						<i className="material-icons">&#xE5C4;</i>
					</Arrow>}
				</MainNavbar>
				<div className="nav-wrapper">
					<Nav className="nav--no-borders flex-column">
						{pages.map(item => (
							<NavItem key={ item.to }>
								<Link tag={ RouteNavLink } to={ item.to } className={ item.to === currentPage ? 'active' : '' }>
									{item.title && <ItemTitle>{item.title}</ItemTitle>}
								</Link>
							</NavItem>
						))}
					</Nav>
				</div>
			</Col>
		</SidebarWrapper>
	);
};

Sidebar.propTypes = {
	pages: ImmutablePropTypes.list,
	currentPage: PropTypes.string,
	menuVisible: PropTypes.bool,
	handleToggleSidebar: PropTypes.func
};

Sidebar.defaultProps = {
	pages: List(),
	currentPage: '',
	menuVisible: false,
	handleToggleSidebar: () => {}
};

export default Sidebar;
