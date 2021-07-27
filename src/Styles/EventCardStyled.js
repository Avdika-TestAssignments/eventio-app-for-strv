import styled from 'styled-components';

import theme from './theme';

export const Card = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	background: ${theme.color.white};
	box-shadow: 0 2px 3px 0 rgba(0,0,0,0.11);
	border-radius: .125rem;
	letter-spacing: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all .2s ease-in-out;

	&:hover {
		cursor: pointer;
		background: #fbfbfb;
	}
`

export const Item = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&:nth-child(1) {
		color: ${theme.color.dark};
		width: 20%;
		font-size: 1.125rem;
	}
	&:nth-child(2) {
		font-size: ${theme.fontSize.normal};
		color: ${theme.color.light};
		width: 20%;
	}
	&:nth-child(3) {
		font-size: ${theme.fontSize.small};
		color: #7D7878;
	}
	&:nth-child(4) {
		font-size: ${theme.fontSize.small};
		color: #CACDD0;
	}
	&:nth-child(5) {
		font-size: ${theme.fontSize.small};
		color: ${theme.color.light};
	}
`
