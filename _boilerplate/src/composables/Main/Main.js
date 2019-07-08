import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import { Sidebar } from 'composables';
import { Spinner } from 'components';

import MainContentWrapper, { SpinnerWrapper } from './Main.style';

const Main = ({ children, fetching }) => (
	<Container fluid>
		<Row>
			<Sidebar />
			<Col className="main-content p-0" lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }} sm="12" tag="main">
				<MainContentWrapper>
					{ fetching &&
						(<SpinnerWrapper>
							<Spinner />
						</SpinnerWrapper>)
					}
					{children}</MainContentWrapper>
			</Col>
		</Row>
	</Container>
);

Main.propTypes = {
	children: PropTypes.node,
	fetching: PropTypes.bool
};

Main.defaultProps = {
	fetching: false
};

export default Main;
