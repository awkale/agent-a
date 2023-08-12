import { graphql, HeadProps, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Layout, SEO } from '../components'
import { SeoProps } from '../types'



const AgentsPage = ({ data }: PageProps<Queries.AgentsPageQuery>) => (
  <Layout>
    <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24 px-4 md:px-0">
      Agents
    </h1>
    <div className="grid gap-x-12 gap-y-20 md:grid-cols-[1fr_1fr_1fr] px-4 md:px-0">
      {data.allContentfulAgents.edges.map((agent) => (
        <div className="flex flex-col" key={agent.node.id}>
          <GatsbyImage className="mb-12 border-solid border-b-8 border-b-red" image={agent.node.headshot?.gatsbyImageData} />
          <div>
            <h2 className="text-4xl leading-none text-white mb-8 after:content-[''] after:block after:w-[45px] after:h-[5px] after:mt-5 after:bg-red">
              {`${agent.node.firstName} ${agent.node.lastName}`}
              <br />
              <small>{agent.node.title}</small>
            </h2>

            <p className="text-lg leading-normal" >{agent.node.childContentfulAgentsBioTextNode?.bio}</p>
          </div>
        </div>
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

export function Head({ }: HeadProps<SeoProps>) {
  return (
    <>
      <body className="agents" />
      <SEO title="Agents" />
    </>
  )
}
