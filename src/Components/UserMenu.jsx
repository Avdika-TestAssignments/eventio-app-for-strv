import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import { getInicials } from '../Config/getInicials';
import { Wrapper } from '../Styles/userMenuStyled';

const UserMenu = () => {
	const { state } = useContext(userContext);
	const { firstName, lastName } = state;

	return (
		<Wrapper>
			{getInicials(firstName, lastName)}
		</Wrapper>
	)
}

export default UserMenu;
