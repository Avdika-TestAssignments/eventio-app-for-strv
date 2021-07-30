import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from '../Styles/privatePageMaquetteStyled';
import Header from './Header';

const PrivatePageMaquette = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Content>
				{children}
			</Content>
		</Wrapper>
	)
}

PrivatePageMaquette.propTypes = {
  children: PropTypes.array.isRequired
}

export default PrivatePageMaquette;
