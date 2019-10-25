import styled from 'styled-components';

const PageTitleDivider = styled.h2`
  font-size: 2rem;
  line-height: 1;
  color: #fff;
  margin-top: 12rem;
  text-align: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 45px;
    height: 5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 50px;
    background-color: ${props => props.theme.red};
  }

  &:after {
    content: '';
    position: absolute;
    width: 45px;
    height: 5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50px;
    background-color: ${props => props.theme.red};
  }
`;

export default PageTitleDivider;
