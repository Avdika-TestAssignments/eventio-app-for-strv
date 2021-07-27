import styled from 'styled-components';

import theme from './theme';
import LinkButton from '../Components/LinkButton';

export const Wrapper = styled.div`
	box-sizing: border-box;
	background-color: ${theme.color.background};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 2rem;
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Content = styled.div`
	text-align: center;
	transform: translate(-50%, -50%);
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: ${theme.color.white};
	width: 25rem;
	box-shadow: 0 2px 3px 0 rgba(0,0,0,0.11);
	border-radius: .125rem;
	padding: 3rem 2rem;
`

export const Button = styled(LinkButton)`
	color: ${theme.color.dark};
	text-transform: capitalize;
	transition: all .1s ease-in-out;
	&:hover {
		color: ${theme.color.normal};
	}
`
