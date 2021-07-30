import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 auto;
`

export const EventsActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const List = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.type === 'list' ? 'nowrap' : 'wrap')};
  justify-content: space-between;
  flex-direction: ${(props) => (props.type === 'list' ? 'column' : 'row')};
`
