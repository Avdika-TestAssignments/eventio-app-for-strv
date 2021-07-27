import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from '../Styles/PrivatePageMaquetteStyled';
import Header from './Header';

const PrivatePageLayout = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Content>
				{children}
			</Content>
		</Wrapper>
	)
}

PrivatePageLayout.propTypes = {
  children: PropTypes.object.isRequired
}

export default PrivatePageLayout;
