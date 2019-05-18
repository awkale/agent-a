import styled from 'styled-components';

const BoxWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default BoxWrapper;
