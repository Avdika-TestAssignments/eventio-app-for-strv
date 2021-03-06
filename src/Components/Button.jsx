import React from 'react';
import PropTypes from 'prop-types';

import { BigButton, SmallButton } from '../Styles/buttonStyled';
import Loader from './Loader';
import theme from '../Styles/theme';

const Button = (props) => {
	const {
		type = 'button',
		isLoading = false,
		children = {},
		size = Button.getTypes().SIZE.BIG
	} = props;

	const ComponentButton = size === Button.getTypes().SIZE.BIG ?
		BigButton : SmallButton;

	return(
		<ComponentButton  color type={type} {...props}>
			{isLoading ? <Loader /> : children}
		</ComponentButton>
	)
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	children: PropTypes.string.isRequired,
	size: PropTypes.string
}

Button.defaultProps = {
	size: 'big'
}

Button.getTypes = () => {
	return {
		COLOR: {
			PRIMARY: theme.color.green,
			SECONDARY: theme.color.pink,
			NORMAL: theme.color.normal,
			THIRD: theme.color.dark
		},
		SIZE: {
			BIG: 'big',
			SMALL: 'small'
		}
	}
}

export default Button;
