import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Row, Col, InputGroup, FormInput, InputGroupAddon, InputGroupText, Button, ListGroup, ListGroupItem } from 'shards-react';

import { Spinner } from 'components';

import { FormText, ButtonGroup, SearchBlock, SearchResults, SearchName, SearchEmail } from './AddUser.style';

const AddUser = props => (
	<Fragment>
		<Row>
			<Col md="8">
				<SearchBlock>
					<FormText>Search for user</FormText>
					<InputGroup seamless className="mb-3">
						<FormInput type="text" value={ props.q } onChange={ props.onSearch } />
						<InputGroupAddon type="append">
							<InputGroupText>
								<i className="material-icons">search</i>
							</InputGroupText>
						</InputGroupAddon>
					</InputGroup>
					{props.users.size > 0 && <SearchResults>
						<ListGroup>
							{props.users.map(user => (
								<ListGroupItem key={ user.get('userId') } onClick={ props.setUser(user) }>
									<SearchName>{ user.get('displayName') }</SearchName>
									<SearchEmail>{ user.get('email') }</SearchEmail>
								</ListGroupItem>
							))}
						</ListGroup>
					</SearchResults>}
					{props.processing && <Spinner size={ 25 } />}
				</SearchBlock>
			</Col>
		</Row>
		<Row>
			<Col md="12">
				<ButtonGroup>
					<Button theme="light" onClick={ props.onCancel }>Cancel</Button>
					<Button theme="secondary" onClick={ props.onAdd } disabled={ props.disabledBtn }>Add</Button>
				</ButtonGroup>
			</Col>
		</Row>
	</Fragment>
);

AddUser.propTypes = {
	users: ImmutablePropTypes.orderedSet,
	q: PropTypes.string,
	onSearch: PropTypes.func,
	onCancel: PropTypes.func,
	onAdd: PropTypes.func,
	setUser: PropTypes.func,
	processing: PropTypes.bool,
	disabledBtn: PropTypes.bool
};

AddUser.defaultProps = {
	q: '',
	onSearch: () => {},
	onCancel: () => {},
	onAdd: () => {},
	processing: false,
	disabledBtn: false
};

export default AddUser;
