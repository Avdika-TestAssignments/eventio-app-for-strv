import React, { useContext, useState, useRef } from 'react';

import { userContext } from '../Context/userContext';
import UserMenu from './UserMenu';
import AppLogo from './AppLogo';
import { HeaderWrap, User, Menu, Icon, Dropdown, MenuButton } from '../Styles/headerStyled';
import LinkButton from './LinkButton';
import outsideClick from '../Config/outsideClick';
import dropdownIcon from '../Images/dropdown.png';

const Header = () => {
	const { state, dispatch } = useContext(userContext);
	const { firstName, lastName } = state;
	const [showMenu, setShowMenu] = useState(false);
	const dropdownRef = useRef();

	outsideClick(dropdownRef, () => {
		if (showMenu) {
			setShowMenu(false);
		}
	})

	const Logout = () => dispatch({ type: 'LOGOUT' });

	const activateMenu = () => {
		setShowMenu(!showMenu);
	}

	const renderUserMenu = () => {
		return (
			<User>
				<UserMenu />
				<Menu>
					<LinkButton onClick={activateMenu}>
						{`${firstName} ${lastName}`}
						<Icon src={dropdownIcon} />
					</LinkButton>
					{showMenu &&
						<Dropdown ref={dropdownRef}>
							<MenuButton type='button'>Profile</MenuButton>
							<MenuButton type='button' onClick={Logout}>Log out</MenuButton>
						</Dropdown>
					}
				</Menu>
			</User>
		)
	}

	return (
		<HeaderWrap>
			<AppLogo />
			{renderUserMenu()}
		</HeaderWrap>
	)
}

export default Header;
