import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import { Wrapper, Header, Content, Button } from '../Styles/PopupStyled';

const Popup = ({ children = {}, onClose = () => {} }) => {
	return (
		<Wrapper>
			<Header>
				<Logo />
				<Button onClick={() => onClose()}>X close</Button>
			</Header>
			<Content>
				{children}
			</Content>
		</Wrapper>
	)
}

Popup.propTypes = {
  children: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
}

export default Popup;
