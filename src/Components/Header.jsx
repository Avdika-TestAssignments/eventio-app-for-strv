import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import Avatar from './Avatar';
import Logo from './Logo';
import { HeaderWrap } from '../Styles/HeaderStyled';

const Header = () => {
	const { state } = useContext(userContext)
	const { isLogged } = state

	const _renderAvatar = () => <Avatar />
	const _renderSignUp = () => <a href='todo'>Don't have account? SIGN UP</a>

	return (
		<HeaderWrap>
			<Logo />
			{isLogged ? _renderAvatar() : _renderSignUp()}
		</HeaderWrap>
	)
}

export default Header;
