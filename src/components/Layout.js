import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import AnimatedGraph from './AnimatedGraph';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, showGraph }) => (
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
    render={data => (
        <div className="container mx-auto">
          {showGraph && <AnimatedGraph />}
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </div>
    )}
  />
);

export default Layout;
