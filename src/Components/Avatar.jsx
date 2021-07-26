import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import { getInicials } from '../Config/getInicials';

const Avatar = () => {
	const { state, dispatch } = useContext(userContext)
	const { firstName, lastName } = state

	const _handleLogout = () => dispatch({type: 'LOGOUT'})

	return (
		<div>
			<div>{getInicials(firstName, lastName)}</div>
			<span>{`${firstName} ${lastName}`}</span>
			<button type='button' onClick={_handleLogout}>Logout</button>
		</div>
	)
}

export default Avatar;
