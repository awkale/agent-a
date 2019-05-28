import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Helmut from 'react-helmet';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/styles/PageTitle';
import PageSubTitle from '../components/styles/PageSubTitle';
import AnimatedGraph from '../components/AnimatedGraph';

const ProcessGrid = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  @media (min-width: ${props => props.theme.md}) {
    grid-row-gap: 250px;
    grid-template-columns: 1fr 1fr;
  }

  p {
    color: #fff;
    font-size: 1.7rem;
    line-height: 1.5;
  }
`;

const Process = ({ data }) => {
  const processes = data.allContentfulProcess.edges;

  return (
    <Layout>
      <Helmut bodyAttributes={{ class: 'how-we-do-it' }} />
      <SEO title="Process" />
      <PageTitle>How We Do It</PageTitle>
      <AnimatedGraph />
      <ProcessGrid>
        {processes.map(process => (
          <>
            <PageSubTitle key={process.node.id}>
              {process.node.processType}
            </PageSubTitle>
            <p key={process.node.processDescription.id}>
              {process.node.processDescription.processDescription}
            </p>
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
          id
          processType
          processDescription {
            id
            processDescription
          }
        }
      }
    }
  }
`;

export default Process;
