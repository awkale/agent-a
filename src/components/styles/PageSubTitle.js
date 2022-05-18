import styled from 'styled-components';

const PageSubTitle = styled.h2`
  font-size: 2rem;
  line-height: 1;
  color: #fff;
  margin-bottom: 2rem;

  &:after {
    content: '';
    display: block;
    width: 45px;
    height: 5px;
    margin-top: 20px;
    background-color: #d22630;
  }

  small {
    font-size: 1rem;
    color: #d22630;
  }
`;

export default PageSubTitle;
