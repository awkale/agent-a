import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/styles/PageTitle';
import PageSubTitle from '../components/styles/PageSubTitle';

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;

  h2 {
    grid-row: 1 / 2;
  }

  div {
    font-size: 1.5rem;
  }
`;

const Process = ({ data }) => {
  const processes = data.allContentfulProcess.edges;

  return (
    <Layout>
      <SEO title="Process" />
      <PageTitle>How We Do It</PageTitle>
      <ProcessGrid>
        {processes.map(process => (
          <>
            <PageSubTitle>{process.node.processType}</PageSubTitle>
            <div>
              {process.node.processTypeDescription.content.map(text => (
                <p>{text.content[0].value}</p>
              ))}
            </div>
          </>
        ))}
      </ProcessGrid>
    </Layout>
  );
};

export const query = graphql`
  query ProcessQuery {
    allContentfulProcess(sort: { fields: [order] }) {
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
