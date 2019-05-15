import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/styles/PageTitle';
import PageSubTitle from '../components/styles/PageSubTitle';
import BoxWrapper from '../components/styles/BoxWrapper';

const AgentBox = styled.div`
  background-color: ${props => props.theme.coolGray11c};
  position: relative;

  h2 {
    position: absolute;
    left: 30px;
    top: 250px;
    color: ${props => props.theme.red};
    background: #fff;
    padding: 5px 5px 2px;
  }

  p {
    color: #fff;
    padding: 15px;
  }
  .gatsby-image-wrapper {
    margin-bottom: 15px;
  }
`;

const Agents = ({ data }) => (
  <Layout>
    <SEO title="Agents" />
    <PageTitle>Agents</PageTitle>
    <BoxWrapper>
      {data.allContentfulAgents.edges.map(agent => (
        <AgentBox key={agent.node.id}>
          <Img fluid={agent.node.headshot.fluid} />
          <PageSubTitle>{`${agent.node.firstName} ${agent.node.lastName}`}</PageSubTitle>
          <p>{agent.node.childContentfulAgentsBioTextNode.bio}</p>
        </AgentBox>
      ))}
    </BoxWrapper>
  </Layout>
);

export const query = graphql`
  query AgentPhotosQuery {
    allContentfulAgents(sort: { fields: [order] }) {
      edges {
        node {
          id
          firstName
          lastName
          childContentfulAgentsBioTextNode {
            bio
          }
          headshot {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default Agents;
