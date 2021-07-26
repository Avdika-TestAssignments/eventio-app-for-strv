import React from 'react';

import { Wrapper } from '../Styles/PrivatePageMaquetteStyled';
import Header from './Header';

const PrivatePageLayout = ({ children }) => {
	return (
		<Wrapper>
			<Header />

			<div>
				{children}
			</div>
		</Wrapper>
	)
}

export default PrivatePageLayout;
