import styled from 'styled-components';

import theme from './theme';

const button = styled.button`
	display: block;
	background-color: ${props => props.color};
	color: ${theme.color.white};
	border-radius: .25rem;
	border: none;
	text-transform: uppercase;
	font-size: ${theme.fontSize.small};
	cursor: pointer;
	transition: ${theme.transition.fast};

	&:focus {
		outline:0;
	}

	&:hover {
		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    filter: ${(props) =>
      props.disabled ? 'brightness(100%)' : 'brightness(85%)'};
	}
`

export const BigButton = styled(button)`
	width: 15rem;
	height: 3.5rem;
`

export const SmallButton = styled(button)`
	display: inline-block;
	width: 6.25rem;
	height: 2rem;
`
