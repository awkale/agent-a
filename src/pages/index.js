import React from 'react';
import { graphql } from 'gatsby';
import Helmut from 'react-helmet';
import Typist from 'react-typist';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

function IndexPage({ data }) {
  return (
    <Layout>
      <Helmut bodyAttributes={{ class: 'home' }} />
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        keywords={data.site.siteMetadata.keywords}
      />
      <div className="typist-wrapper">
        <Typist cursor={{ show: false }}>
          <h1 className="typist-heading">
            Agent A is a brand innovation studio
          </h1>
          <h2 className="typist-heading">
            We merge curiosity, insight and imagination to help brands matter.
          </h2>
        </Typist>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

export default IndexPage;
