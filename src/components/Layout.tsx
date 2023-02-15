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
      <div className="container mx-auto">
        <Header />
        <main className="px-4">{children}</main>
        <Footer />
      </div>
    )}
  />
)
