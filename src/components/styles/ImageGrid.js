import styled from 'styled-components';

const ImageGrid = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-gap: 60px 60px;
  margin-top: 4rem;
  margin-bottom: 8rem;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${props => props.theme.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default ImageGrid;
