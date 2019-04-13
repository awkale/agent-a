import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Process = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Process</h1>
    <p>process page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Process;
