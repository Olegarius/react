import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Row, Col, Button, FormSelect } from 'shards-react';

import { UserName, ButtonGroup, UserGender, FormText } from './EditUser.style';

const EditUser = props => (
	<Fragment>
		<Row>
			<Col md="8">
				<UserName>{props.userObject.get('displayName')}</UserName>
				<UserGender>
					<FormText>Gender</FormText>
					<FormSelect onChange={ props.onChange } value={ props.userObject.get('gender') }>
						<option value="No gender set">No gender set</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</FormSelect>
				</UserGender>
			</Col>
		</Row>
		<Row>
			<Col md="12">
				<ButtonGroup>
					<Button theme="light" onClick={ props.onCancel }>Cancel</Button>
					<Button theme="secondary" onClick={ props.onSave } disabled={ props.disabledBtn }>Save</Button>
				</ButtonGroup>
			</Col>
		</Row>
	</Fragment>
);

EditUser.propTypes = {
	userObject: PropTypes.instanceOf(Map),
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
	onChange: PropTypes.func,
	disabledBtn: PropTypes.bool
};

EditUser.defaultProps = {
	onSave: () => {},
	onCancel: () => {},
	onChange: () => {},
	disabledBtn: false
};

export default EditUser;
