import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
`

const FooterNavLink = styled.li`
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;

  a {
    color: #fff;

    &:hover {
      color: #53565a;
    }
  }
`

const Copyright = styled.div`
  color: #53565a;
  text-align: right;
`

function Footer() {
  return (
    <footer className="px-4">
      <FooterNav>
        <FooterNavLink>
          <OutboundLink href="mailto:alex@agent-a-ny.com">
            <FontAwesomeIcon size="lg" icon={faAt} />
            <span className="sr-only">email</span>
          </OutboundLink>
        </FooterNavLink>
        <FooterNavLink>
          <OutboundLink
            href="https://www.instagram.com/agent_a_ny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </OutboundLink>
        </FooterNavLink>
        <FooterNavLink>
          <OutboundLink
            href="https://www.linkedin.com/in/alejandro-rodriguez-b406ab4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
            <span className="sr-only">Linkedin</span>
          </OutboundLink>
        </FooterNavLink>
      </FooterNav>
      <Copyright>{`© Agent A ${new Date().getFullYear()}`}</Copyright>
    </footer>
  )
}

export default Footer
