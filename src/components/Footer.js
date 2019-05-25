import React from 'react';
import styled from 'styled-components';

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

const FooterNavLink = styled.li`
  a {
    color: ${props => props.theme.gray900};

    &:hover {
      color: ${props => props.theme.coolGray6c};
    }
  }
`;

function Footer() {
  return (
    <footer>
      <FooterNav>
        <FooterNavLink>
          <a href="mailto:alex@agent-a-ny.com">Email me</a>
        </FooterNavLink>
      </FooterNav>
      <div>{`© Agent A ${new Date().getFullYear()}`}</div>
    </footer>
  );
}

export default Footer;
