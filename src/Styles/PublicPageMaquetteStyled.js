import styled from 'styled-components';

import theme from '../Styles/theme';

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
`

const Column = styled.div`
	padding: 2rem 3rem;
	position: relative;
`

export const LeftSide = styled(Column)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 25%;
	background: url('/img/login-wallpaper.png') #323C46 no-repeat;
    background-size: 100%;
`

export const RightSide = styled(Column)`
	width: 75%;
	display:flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const SignUp = styled.div`
	position: absolute;
	right: 3rem;
	top: 2rem;
`

export const BottomText = styled.span`
	font-family: Playfair;
	font-size: ${theme.fontSize.poster};
	color: ${theme.color.white};
	display: block;
`

export const BottomWrap = styled.div`
	text-align: center;
	margin-bottom: 2rem;
`

export const Separator = styled.div`
	margin: 1rem auto;
	display: block;
	width: 0.75rem;
	height: 0.125rem;
	background-color: ${theme.color.green};
`

export const Content = styled.div`
	text-align: left;
	width: 50%;
`
