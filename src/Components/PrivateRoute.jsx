import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../Config/routes';
import { userContext } from '../Context/userContext';

const PrivateRoute = ({ component: Component, ...options}) => {
	const { state } = useContext(userContext);
	const { isLogged } = state;

	return <Route {...options} render={props => {
		return isLogged ? <Component {...options} {...props} />
		: <Redirect to={ROUTES.LOGIN} />
	}} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default PrivateRoute;
