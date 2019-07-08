import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import {
	Row,
	Col,
	FormCheckbox,
	FormInput,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormSelect,
	Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'shards-react';

import { Header } from 'elements';
import { ModalPopup, AddUser, EditUser } from 'composables';
import {
	HeaderBox,
	RegisterBox,
	RegisterText,
	RegisterSwiper,
	FilterBox,
	FormText,
	ButtonsBox,
	FileUpload,
	ShowMore
} from './Users.style';

const Users = props => (
	<Fragment>
		{props.showAddUserPopup && <ModalPopup title="Add user">
			<AddUser onSave={ props.editUser } />
		</ModalPopup>}
		{props.showEditUserPopup && <ModalPopup title="Edit user">
			<EditUser userId={ props.userId } />
		</ModalPopup>}
		<HeaderBox>
			<Header>{props.title}</Header>
			<RegisterBox>
				<RegisterText>Allow users to register</RegisterText>
				<RegisterSwiper>
					<FormCheckbox toggle small checked={ props.allowRegister } onChange={ props.putAllowRegister }>
            On
					</FormCheckbox>
				</RegisterSwiper>
			</RegisterBox>
		</HeaderBox>
		<FilterBox>
			<Row>
				<Col md="3">
					<FormText>Search for user</FormText>
					<InputGroup seamless className="mb-3">
						<FormInput type="text" value={ props.q } onChange={ props.search } />
						<InputGroupAddon type="append">
							<InputGroupText>
								<i className="material-icons">search</i>
							</InputGroupText>
						</InputGroupAddon>
					</InputGroup>
				</Col>
				<Col md="3">
					<FormText>Sort by</FormText>
					<FormSelect onChange={ props.sort } defaultValue="displayName">
						<option value="displayName" disabled>Given name</option>
						<option value="email">Email</option>
						<option value="gender">Gender</option>
					</FormSelect>
				</Col>
				<Col md="6">
					<FormText>&nbsp;</FormText>
					<ButtonsBox>
						<FileUpload>
							<input type="file" className="users-file-input" id="customFile" />
							<Button htmlFor="customFile">Upload user list</Button>
						</FileUpload>
						<Button onClick={ props.addUser }>Add new user</Button>
					</ButtonsBox>
				</Col>
			</Row>
		</FilterBox>
		{!!props.users.size && (
			<Row>
				<Col>
					<table className="table mb-0">
						<thead className="bg-light">
							<tr>
								<th scope="col" className="border-0">
                  Name
								</th>
								<th scope="col" className="border-0">
                  Email
								</th>
								<th scope="col" className="border-0">
                  Gender
								</th>
								<th scope="col" className="border-0">
                  Department
								</th>
								<th scope="col" className="border-0">
                  Role
								</th>
								<th scope="col" className="border-0">
                  Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{props.users.keySeq().map(user => (
								<tr key={ user.get('id') }>
									<td>{user.get('displayName', '')}</td>
									<td>{user.get('email')}</td>
									<td>{user.get('gender')}</td>
									<td>{user.get('department', '')}</td>
									<td>{user.get('role', '')}</td>
									<td>
										<Dropdown open={ !!props.dropdown[user.get('userId')] } toggle={ props.toggle(user.get('userId')) }>
											<DropdownToggle caret>Actions</DropdownToggle>
											<DropdownMenu>
												<DropdownItem onClick={ props.editUser(user.toJS()) }>Edit</DropdownItem>
												<DropdownItem>Pause</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Col>
			</Row>
		)}
		{props.continuationToken && <ShowMore onClick={ props.showMore }>Show more...</ShowMore>}
	</Fragment>
);

Users.propTypes = {
	users: ImmutablePropTypes.orderedSet,
	title: PropTypes.string,
	dropdown: PropTypes.object,
	toggle: PropTypes.func,
	q: PropTypes.string,
	search: PropTypes.func,
	order: PropTypes.string,
	sort: PropTypes.func,
	showMore: PropTypes.func,
	continuationToken: PropTypes.string,
	allowRegister: PropTypes.bool,
	putAllowRegister: PropTypes.func,
	addUser: PropTypes.func,
	showAddUserPopup: PropTypes.bool,
	showEditUserPopup: PropTypes.bool,
	editUser: PropTypes.func,
	userId: PropTypes.string
};

Users.defaultProps = {
	users: Map(),
	userId: '',
	dropdown: {},
	toggle: () => {},
	continuationToken: ''
};

export default Users;
