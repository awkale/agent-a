import styled from 'styled-components';

const CaseNumber = styled.h4`
  font-size: 1.4rem;
  text-align: center;
  line-height: 1;
  color: ${props => props.theme.red};
  position: absolute;
  left: 0;
  right: 0;
  top: 80%;
  /* transform: rotate(-25deg); */
  opacity: 0.25;
`;

export default CaseNumber;
