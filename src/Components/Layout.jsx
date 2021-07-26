import React, { useContext } from 'react';

import { userContext } from '../Context/userContext';
import PublicPageMaquette from './PublicPageMaquette';
import PrivatePageMaquette from './PrivatePageMaquette';

const _renderPublicPage = ({children}) => {
	return <PublicPageMaquette> {children} </PublicPageMaquette>
}

const _renderPrivatePage = ({children}) => {
	return <PrivatePageMaquette> {children} </PrivatePageMaquette>
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

export default Layout;
