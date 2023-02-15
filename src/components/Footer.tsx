import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as React from 'react'

export function Footer() {
  return (
    <footer className="px-4">
      <ul className="list-none flex pl-0">
        <li className="pt-2 pr-4 pb-3">
          <OutboundLink
            className="text-white hover:text-gray-500"
            href="mailto:alex@agent-a-ny.com"
          >
            <FontAwesomeIcon size="lg" icon={faAt} />
            <span className="sr-only">email</span>
          </OutboundLink>
        </li>
        <li className="pt-2 pr-4 pb-3">
          <OutboundLink
            className="text-white hover:text-gray-500"
            href="https://www.instagram.com/agent_a_ny/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </OutboundLink>
        </li>
        <li className="pt-2 pr-4 pb-3">
          <OutboundLink
            className="text-white hover:text-gray-500"
            href="https://www.linkedin.com/in/alejandro-rodriguez-b406ab4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
            <span className="sr-only">Linkedin</span>
          </OutboundLink>
        </li>
      </ul>
      <div className="text-gray-500 text-right">{`© Agent A ${new Date().getFullYear()}`}</div>
    </footer>
  )
}
