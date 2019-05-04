import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const Process = ({ data }) => {
  const processes = data.allContentfulProcess.edges;

  return (
    <Layout>
      <SEO title="Process" />
      <h1>How We Do It</h1>
      {processes.map(process => (
        <div>
          <h2>{process.node.processType}</h2>
          {process.node.processTypeDescription.content.map(text => (
            <p>{text.content[0].value}</p>
          ))}
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ProcessQuery {
    allContentfulProcess {
      edges {
        node {
          processType
          processTypeDescription {
            id
            content {
              nodeType
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`;

export default Process;
