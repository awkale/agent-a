import React from 'react';

import Typist from 'react-typist';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Agent A', 'brand innovation', 'react']} />
    <div className="typist-wrapper">
      <Typist cursor={{ show: false }}>
        <h1 className="typist-heading">Agent A is a brand innovation studio</h1>
        <h2 className="typist-heading">
          We merge curiosity, insight and imagination to help brands matter.
        </h2>
      </Typist>
    </div>
  </Layout>
);

export default IndexPage;
