import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Typist from 'react-typist';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Agent A`, `brand innovation`, `react`]} />
    <Typist>
      <h1>Agent A is a brand innovation studio</h1>
      <h2>
        We merge curiosity, insight and imagination to help brands matter.
      </h2>
    </Typist>
    <Link to="/process/">Process</Link>
  </Layout>
);

export default IndexPage;
