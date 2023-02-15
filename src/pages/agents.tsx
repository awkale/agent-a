import { graphql, HeadProps, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { SEO } from '../components'
import Layout from '../components/Layout'
import { SeoProps } from '../types'

const AgentBox = styled.div`
  display: flex;
  flex-direction: column;

  .gatsby-image-wrapper {
    margin-bottom: 45px;
    border-bottom: 10px solid #d22630;
  }
`

const AgentText = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`

const AgentsPage = ({ data }: PageProps<Queries.AgentsPageQuery>) => (
  <Layout>
    <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24">
      Agents
    </h1>
    <div className="grid gap-x-12 gap-y-20 md:grid-cols-[1fr_1fr_1fr]">
      {data.allContentfulAgents.edges.map((agent) => (
        <AgentBox key={agent.node.id}>
          <GatsbyImage image={agent.node.headshot.gatsbyImageData} />
          <AgentText>
            <h2 className="text-4xl leading-none text-white mb-8 after:content-[''] after:block after:w-[45px] after:h-[5px] after:mt-5 after:bg-red">
              {`${agent.node.firstName} ${agent.node.lastName}`}
              <br />
              <small>{agent.node.title}</small>
            </h2>

            <p>{agent.node.childContentfulAgentsBioTextNode.bio}</p>
          </AgentText>
        </AgentBox>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query AgentsPage {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulAgents(sort: { order: ASC }) {
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

export default AgentsPage

export function Head({}: HeadProps<SeoProps>) {
  return (
    <>
      <body className="agents" />
      <SEO title="Agents" />
    </>
  )
}
