import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Styles/roundButtonStyled';
import PlusImage from '../Images/plus.png';

const RoundButton = (props = {}) => {
	return (
		<Button {...props}>
			<img src={PlusImage} alt='AddBtn' />
		</Button>
	)
}

RoundButton.propTypes = {
  children: PropTypes.string.isRequired
}

export default RoundButton;
