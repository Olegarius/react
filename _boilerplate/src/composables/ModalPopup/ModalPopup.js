import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'shards-react';

import { CloseIcon } from 'elements';

import { HeaderTitle, HeaderContent } from './ModalPopup.style';

const ModalPopup = ({ children, title, open, onToggle }) => (
	<Modal size="md" open={ open } toggle={ onToggle } centered>
		<ModalHeader>
			<HeaderContent>
				<HeaderTitle>{title}</HeaderTitle>
				<CloseIcon onClick={ onToggle } />
			</HeaderContent>
		</ModalHeader>
		<ModalBody>
			{ open && children }
		</ModalBody>
	</Modal>);

ModalPopup.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	open: PropTypes.bool,
	onToggle: PropTypes.func
};

ModalPopup.defaultProps = {
	children: null,
	title: '',
	open: false,
	onToggle: () => {}
};

export default ModalPopup;
