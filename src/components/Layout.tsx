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
      <div>
        <Header />
        <div className="container mx-auto">
          <main className="pt-24">{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)
