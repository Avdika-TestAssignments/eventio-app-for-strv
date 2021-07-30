import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Styles/linkButtonStyled';

const LinkButton = ({ children, ...rest }) => {
	return (
		<Button {...rest}>
			{children}
		</Button>
	)
}

LinkButton.propTypes = {
  children: PropTypes.array
}

LinkButton.defaultProps = {
	children: ''
}

export default LinkButton;
