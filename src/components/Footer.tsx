import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import * as React from 'react'

export function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulAsset(contentful_id: { eq: "3T1W24dQzYEcbrJ9h5GIGR" }) {
        id
        file {
          url
        }
        title
      }
    }
  `)

  return (
    <footer className="bg-red pt-10 transition-all ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 mb-16">
          <ul className="list-none col-span-4 md:col-span-3 col-start-3 md:col-start-1 flex flex-col pl-0 text-xl md:text-3xl font-brand text-gray-900 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/what-we-do">What We Do</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/agents">Agents</Link>
            </li>
          </ul>
          <ul className="list-none col-span-4 md:col-span-3 col-start-8 md:col-start-4 flex flex-col pl-0 text-xl md:text-3xl font-brand text-gray-900 ">
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
                href="https://www.linkedin.com/in/alejandro-rodriguez-b406ab4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </OutboundLink>
            </li>
          </ul>
          <div className="col-span-full md:col-span-6">
            <iframe
              title="Apple Music"
              allow="autoplay *; encrypted-media *;"
              height="450"
              className="w-full max-w-2xl overflow-hidden bg-transparent"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/agent-a-radio/pl.u-leyl82AUj8Kj3m"
            />
          </div>
        </div>
      </div>
      <div className="pt-2 pr-4 pb-3">
        <object
          title={data.contentfulAsset.title}
          data={data.contentfulAsset.file.url}
          type="image/svg+xml"
        >
          © Agent A
        </object>
      </div>
    </footer>
  )
}
