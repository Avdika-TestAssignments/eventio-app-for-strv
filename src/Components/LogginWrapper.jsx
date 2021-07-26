import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';


import { getRefreshToken } from '../API/refreshToken';
import { refreshAuthToken } from '../API/auth';
import { ROUTES } from '../Config/routes';
import { userContext } from '../Context/userContext';

const LoginWrapper = (props) => {
	const { dispatch } = useContext(userContext)
	const logInHistory = useHistory()
	const refreshToken = getRefreshToken()

	useEffect(() => {
		const fetchLogin = async () => {
			if (refreshToken) {
				const response = await refreshAuthToken(refreshToken)

				dispatch({ type: 'LOGIN', payload: response })

				//redirect to events page after login
				logInHistory.push(ROUTES.EVENTS)

			} else {
				//we havent got token -> redirect to login page
				logInHistory.push(ROUTES.HOMEPAGE)
			}
		}

		fetchLogin()
	}, [dispatch, refreshToken, logInHistory])

	return (
		<>
			{props.children}
		</>
	)
}

export default LoginWrapper;
