import React, { useEffect, useContext, useState } from 'react';

import { getRefreshToken } from '../API/refreshToken';
import { refreshAuthToken } from '../API/auth';
import { userContext } from '../Context/userContext';

const Loginmanager = (props) => {
	const [readyToRender, setReadyToRender] = useState(false)
	const { dispatch } = useContext(userContext)
	const refreshToken = getRefreshToken()

	useEffect(() => {
		const fetchLogin = async () => {
			if (refreshToken) {
				const response = await refreshAuthToken(refreshToken)

				dispatch({ type: 'LOGIN', payload: response })

			}
			setReadyToRender(true)
		}

		if (!readyToRender) {
			fetchLogin()
		}
	}, [readyToRender, dispatch, refreshToken])

	return (
		<>
			{readyToRender ? props.children : <div>Loading</div>}
		</>
	)
}

export default Loginmanager;
