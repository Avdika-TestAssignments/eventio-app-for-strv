import React from 'react';

import { StyledButton } from '../Styles/buttonStyled';
import Loader from './Loader';

const Button = (props) => {
	const { type = 'button', isLoading = false, children = {}} = props

	return(
		<StyledButton type={type} {...props}>
			{!isLoading ? <Loader /> : children}
		</StyledButton>
	)
}

Button.getTypes = () => {
	return {
		COLOR: {
			PRIMARY: 'primary',
			SECONDARY: 'secondary',
			THIRD: 'third'
		},
		SIZE: {
			BIG: 'big',
			SMALL: 'small'
		}
	}
}

export default Button;
