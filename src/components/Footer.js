import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`;

const FooterNavLink = styled.li`
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;

  a {
    color: #fff;

    &:hover {
      color: ${props => props.theme.coolGray11c};
    }
  }
`;

const Copyright = styled.div`
  color: ${props => props.theme.coolGray11c};
  text-align: right;
`;

function Footer() {
  return (
    <footer>
      <FooterNav>
        <FooterNavLink>
          <OutboundLink href="mailto:alex@agent-a-ny.com">
            <FontAwesomeIcon size="lg" icon={faAt} />
          </OutboundLink>
        </FooterNavLink>
        <FooterNavLink>
          <OutboundLink
            href="https://www.instagram.com/agent_a_ny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </OutboundLink>
        </FooterNavLink>
        <FooterNavLink>
          <OutboundLink
            href="https://www.linkedin.com/in/alejandro-rodriguez-b406ab4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </OutboundLink>
        </FooterNavLink>
        <FooterNavLink>
          <OutboundLink
            href="https://twitter.com/agentabranding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </OutboundLink>
        </FooterNavLink>
      </FooterNav>
      <Copyright>{`© Agent A ${new Date().getFullYear()}`}</Copyright>
    </footer>
  );
}

export default Footer;
