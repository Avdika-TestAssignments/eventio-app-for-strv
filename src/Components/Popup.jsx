import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AppLogo from './AppLogo';
import { Wrapper, Header, Content, Button, Icon, SpanText } from '../Styles/popupStyled';
import CloseIcon from '../Images/icon-close.png';

const Popup = ({ children, onClose }) => {

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = 'unset'; }
	}, []);

	return (
		<Wrapper>
			<Header>
				<AppLogo />
				<Button onClick={onClose}>
					<Icon src={CloseIcon} alt='close-icon' />
					<SpanText>Close</SpanText>
				</Button>
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
