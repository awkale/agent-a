import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="px-4">{children}</main>
        <Footer />
      </div>
    )}
  />
)

export default Layout
