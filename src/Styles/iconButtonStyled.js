import styled from 'styled-components';

import LinkButton from '../Components/LinkButton';
import theme from './theme';

const IconButton = styled(LinkButton)`
  background: url(${(props) => props.iconUrl});
  width: 1.5rem;
  height: 1.5rem;
  transition: ${theme.transition.slower};
  filter: brightness(${(props) => (props.isActive ? '20%' : '100%')});

  &:hover {
    filter: brightness(20%);
}
`
export default IconButton;
