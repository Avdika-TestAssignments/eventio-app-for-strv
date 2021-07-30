import styled from 'styled-components';

import theme from './theme';

export const Card = styled.div`
margin: 0.5rem 0;
padding: 1rem;
background: ${theme.color.white};
border-radius: 0.125rem;
letter-spacing: 0;
display: flex;
justify-content: space-between;
align-items: center;
transition: ${theme.transition.slower};
width: ${(props) => (props.type === 'list' ? 'unset' : '30%')};
flex-direction: ${(props) => (props.type === 'list' ? 'row' : 'column')};
flex-wrap: wrap;

&:hover {
	cursor: pointer;
	background: rgb(251, 251, 251);
}
@media (min-width: ${theme.viewport.tablet}) {
	flex-wrap: nowrap;
}
`

export const Item = styled.div`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

&:nth-child(1) {
	color: ${theme.color.dark};
	font-size: 1.125rem;
	width: 80%;

	@media (min-width: ${theme.viewport.tablet}) {
		width: 20%;
	}
}

&:nth-child(2) {
	font-size: ${theme.fontSize.normal};
	color: ${theme.color.light};
	width: 80%;

	@media (min-width: ${theme.viewport.tablet}) {
		width: 20%;
	}
}

&:nth-child(3) {
	font-size: ${theme.fontSize.small};
	color: rgb(125, 120, 120);
	display: none;

	@media (min-width: ${theme.viewport.tablet}) {
		display: block;
	}
}

&:nth-child(4) {
	font-size: ${theme.fontSize.small};
	color: rgb(202, 205, 208);
	width: 60%;

	@media (min-width: ${theme.viewport.tablet}) {
		width: 20%;
	}
}

&:nth-child(5) {
	font-size: ${theme.fontSize.small};
	color: ${theme.color.light};
	width: 60%;

	@media (min-width: ${theme.viewport.tablet}) {
		width: 10%;
	}
}
`