import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import { LogoImage } from '../Styles/LogoStyled';

const Logo = () => {
	const { state } = useContext(userContext)
	const { isLogged } = state

	const logoPath = isLogged ? 'logo-black' : 'logo-white'

	return (
		<div>
			<LogoImage src={`/icon/${logoPath}.svg`} alt='svg'/>
		</div>
	)
}

export default Logo;
