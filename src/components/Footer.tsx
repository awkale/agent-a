import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as React from 'react'

export function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulAsset(contentful_id: {eq: "3T1W24dQzYEcbrJ9h5GIGR"}) {
        id
        file {
          url
        }
        title
      }
    }
  `)

  return (
    <footer className=" bg-red pt-10 transition-all ">
      <div className="grid grid-cols-4 mb-16">
        <ul className="list-none flex flex-col pl-0 text-3xl font-brand text-gray-900 col-start-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="what-we-do">What We Do</Link></li>
          <li><Link to="work">Work</Link></li>
          <li><Link to="agents">Agents</Link></li>
        </ul>
        <ul className="list-none flex flex-col pl-0 text-3xl font-brand text-gray-900 col-start-3">
          <li className="mb-2">
            <OutboundLink
              className=" hover:text-gray-700"
              href="mailto:alex@agent-a-ny.com"
            >
              Email <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </OutboundLink>
          </li>
          <li className="mb-2">
            <OutboundLink
              className=" hover:text-gray-500"
              href="https://www.instagram.com/agent_a_ny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </OutboundLink>
          </li>
          <li className="mb-2">
            <OutboundLink
              className=" hover:text-gray-500"
              href="https://www.linkedin.com/in/alejandro-rodriguez-b406ab4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </OutboundLink>
          </li>

        </ul>
      </div>

      <div className="pt-2 pr-4 pb-3">
        <object title={data.contentfulAsset.title} data={data.contentfulAsset.file.url} type="image/svg+xml">© Agent A</object>
      </div>
    </footer>
  )
}
