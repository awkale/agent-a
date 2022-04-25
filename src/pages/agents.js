import React from 'react'
import styled from 'styled-components'
import Helmut from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import PageTitle from '../components/styles/PageTitle'
import PageSubTitle from '../components/styles/PageSubTitle'
import BoxWrapper from '../components/styles/BoxWrapper'

const AgentBox = styled.div`
  display: flex;
  flex-direction: column;

  .gatsby-image-wrapper {
    margin-bottom: 45px;
    border-bottom: 10px solid #d22630;
  }
`;

const AgentText = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

const Agents = ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: 'agents' }} />
    <SEO
      title="Agents"
      description={data.site.siteMetadata.description}
      keywords={data.site.siteMetadata.keywords}
    />
    <PageTitle>Agents</PageTitle>
    <BoxWrapper>
      {data.allContentfulAgents.edges.map(agent => (
        <AgentBox key={agent.node.id}>
          <GatsbyImage image={agent.node.headshot.gatsbyImageData} />
          <AgentText>
            <PageSubTitle>
              {`${agent.node.firstName} ${agent.node.lastName}`}
              <br />
              <small>{agent.node.title}</small>
            </PageSubTitle>

            <p>{agent.node.childContentfulAgentsBioTextNode.bio}</p>
          </AgentText>
        </AgentBox>
      ))}
    </BoxWrapper>
  </Layout>
)

export const query = graphql`
  query AgentPhotosQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulAgents(sort: { fields: [order] }) {
      edges {
        node {
          id
          firstName
          lastName
          childContentfulAgentsBioTextNode {
            bio
          }
          title
          headshot {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Agents
