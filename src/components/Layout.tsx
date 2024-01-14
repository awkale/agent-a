import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { Footer, Header } from '../components'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className='relative'>
        <Header />
        <div className="container mx-auto">
          <main className="pt-24 mb-80 px-4">{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)
