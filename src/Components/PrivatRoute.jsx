import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../Config/routes';
import { userContext } from '../Context/userContext';

const PrivateRoute = ({ component: Component, ...options}) => {
	const { state } = useContext(userContext)
	const { isLogged } = state

	console.log('isLogged', state);

	return <Route {...options} render={props => {
		return !isLogged ? <Component {...options} {...props} />
		: <Redirect to={ROUTES.LOGIN} />
	}} />
}

export default PrivateRoute;
