import styled from 'styled-components';

import theme from './theme';

export const Wrapper = styled.div`
	border-radius: 50%;
	background-color: rgb(217, 220, 225);
	width: ${props => props.isBig ? '7.5em' : '2.5rem'};
	height: ${props => props.isBig ? '7.5em' : '2.5rem'};
	color: ${theme.color.light};
	display: flex;
	align-items: center;
	justify-content: center;
`
