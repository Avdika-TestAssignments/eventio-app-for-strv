import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { userContext } from '../Context/userContext';
import PublicPageMaquette from './PublicPageMaquette';
import PrivatePageMaquette from './PrivatePageMaquette';

const _renderPublicPage = ({children}) => {
	return <PublicPageMaquette> {children} </PublicPageMaquette>
}

_renderPublicPage.propTypes = {
  children: PropTypes.object.isRequired
}

const _renderPrivatePage = ({children}) => {
	return <PrivatePageMaquette> {children} </PrivatePageMaquette>
}

_renderPrivatePage.propTypes = {
  children: PropTypes.object.isRequired
}

const Layout = ({ children }) => {
	const { state } = useContext(userContext)
	const { isLogged } = state
	return (
		<>
			{isLogged ? _renderPrivatePage({children}) : _renderPublicPage({children})}
		</>
	)
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout;
