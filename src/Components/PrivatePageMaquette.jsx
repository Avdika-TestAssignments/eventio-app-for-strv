import React from 'react';
import PropTypes from 'prop-types';

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

PrivatePageLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default PrivatePageLayout;
