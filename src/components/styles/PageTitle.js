import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: 3rem;
  border-bottom: 6px solid ${props => props.theme.gray900};
  line-height: 1;
`;

export default PageTitle;
