import styled from 'styled-components';

import theme from './theme';
import LinkButton from '../Components/LinkButton';

export const HeaderWrap = styled.div`
	display: flex;
	justify-content: space-between;
`

export const User = styled.div`
	display: flex;
	align-items: center;
`

export const Menu = styled.div`
position: relative;
color: ${theme.color.light};
font-size: ${theme.fontSize.small};
letter-spacing: 0;

@media (min-width: ${theme.viewport.tablet}) {
	margin-left: 0.5rem;
}
`

export const Icon = styled.img`
vertical-align: middle;

&:hover {
	cursor: pointer;
}

@media (min-width: ${theme.viewport.tablet}) {
	margin-left: 0.5rem;
}
`

export const Dropdown = styled.div`
position: absolute;
z-index: 10;
right: 0;
top: 2.5rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 10rem;
height: 3rem;
background: ${theme.color.white};
box-shadow: 0 0.3125rem 0.9375rem 0 rgba(0, 0, 0, 0.2);
border-radius: 0.875rem;
padding: 0.5rem;

@media (min-width: ${theme.viewport.tablet}) {
	height: 5rem;
}
`

export const MenuButton = styled(LinkButton)`
text-transform: capitalize;
display: block;
text-align: left;
font-size: ${theme.fontSize.small};
font-family: Hind;
`

export const Name = styled.span`
  display: none;

  @media (min-width: ${theme.viewport.tablet}) {
    display: inline-block;
  }
`
