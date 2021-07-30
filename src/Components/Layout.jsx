import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { userContext } from '../Context/userContext';
import PublicPageMaquette from './PublicPageMaquette';
import PrivatePageMaquette from './PrivatePageMaquette';

const renderPublicSession = ({children}) => {
	return <PublicPageMaquette> {children} </PublicPageMaquette>
}

renderPublicSession.propTypes = {
  children: PropTypes.object.isRequired
}

const renderPrivateSession = ({children}) => {
	return <PrivatePageMaquette> {children} </PrivatePageMaquette>
}

renderPrivateSession.propTypes = {
  children: PropTypes.object.isRequired
}

const Layout = ({ children }) => {
	const { state } = useContext(userContext);
	const { isLogged } = state;
	return (
		<>
			{isLogged ? renderPrivateSession({children}) : renderPublicSession({children})}
		</>
	)
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout;
