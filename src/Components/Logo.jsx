import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import { Image } from '../Styles/LogoStyled';

const Logo = () => {
	const { state } = useContext(userContext)
	const { isLogged } = state

	const logoPath = isLogged ? 'logo-black' : 'logo-white'

	return (
		<div>
			<img src={`/icon/${logoPath}.svg`} alt='svg'/>
		</div>
	)
}

export default Logo;
