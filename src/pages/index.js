import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Agent A`, `brand innovation`, `react`]} />
    <h1>Agent A is a brand innovation studio</h1>
    <p>
      Agent A is a brand innovation studio We merge curiosity, insight and
      imagination to help brands matter.{' '}
    </p>
    <Link to="/process/">Process</Link>
  </Layout>
);

export default IndexPage;
