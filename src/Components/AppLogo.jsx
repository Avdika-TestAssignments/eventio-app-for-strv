import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import { LogoImageS } from '../Styles/appLogoStyled';
import BlackLogo from '../Images/BlackLogo.png';
import WhiteLogo from '../Images/WhiteLogo.png';

const AppLogo = () => {
	const { state } = useContext(userContext);
	const { isLogged } = state;
	const logoVariant = isLogged ? BlackLogo : WhiteLogo;

	return (
		<div>
			<LogoImageS src={logoVariant} alt='Logo'/>
		</div>
	)
}

export default AppLogo;
