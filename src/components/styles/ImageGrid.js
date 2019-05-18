import styled from 'styled-components';

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 0 40px;
  margin-bottom: 4rem;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default ImageGrid;
