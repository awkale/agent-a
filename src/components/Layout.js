/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import './layout.scss';

const theme = {
  red: '#d22630',
  coolGray1c: '#d9d9d6',
  coolGray6c: '#a7a8aa',
  coolGray11c: '#53565A',
  gray900: '#212529',
};

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  main {
    min-height: 600px;
  }
`;

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
    render={data => (
      <ThemeProvider theme={theme}>
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>{`© Agent A ${new Date().getFullYear()}`}</footer>
        </Container>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
