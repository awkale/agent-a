import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  background: linear-gradient(
    to top,
    ${props => props.theme.gray900} 50%,
    ${props => props.theme.red} 50%
  );
  background-size: 100% 200%;
  background-position: bottom left;
  padding: 20px;
  transition: all 0.2s ease;

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  :hover {
    background-position: top left;
    p {
      visibility: visible;
    }
  }
`;

export default Box;
