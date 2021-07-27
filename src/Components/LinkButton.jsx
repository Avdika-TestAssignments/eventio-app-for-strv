import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Styles/LinkButtonStyled';

const LinkButton = (props = {}) => {
	return (
		<Button {...props}>
			{props.children}
		</Button>
	)
}

LinkButton.propTypes = {
  children: PropTypes.object.isRequired
}

export default LinkButton;
