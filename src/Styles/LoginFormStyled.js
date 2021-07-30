import styled from 'styled-components';

import Button from '../Components/Button';
import theme from './theme';

export const FormStyle = styled.form`
  margin-top: 3rem;
`

export const StyledButton = styled(Button)`
  margin-top: 3rem;
`

export const ErrorMsg = styled.div`
  margin-top: 0.5rem;
  color: ${theme.color.pink};
`
export const SignUp = styled.div`
  display: block;
  margin-top: 3rem;

  @media (min-width: ${theme.viewport.tablet}) {
    display: none;
  }
`