import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const ProcessGrid = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    grid-row-gap: 100px;
    grid-template-columns: 1fr 2fr;
  }
`

const Process = ({ data }) => {
  const processes = data.allContentfulProcess.edges

  return (
    <Layout>
      <SEO
        bodyAttributes={{ class: 'what-we-do' }}
        title="What We Do"
        description={data.site.siteMetadata.description}
        keywords={data.site.siteMetadata.keywords}
      />
      <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24">
        Global research. <br />
        Brand Strategy. <br />
        Creative. <br />
        Innovation.
      </h1>
      <ProcessGrid>
        {processes.map((process) => (
          <>
            <h2 className="text-red text-4xl md:text-8xl" key={process.node.id}>
              {process.node.processType}
            </h2>
            <p
              className=" text-2xl md:text-4xl leading-relaxed font-normal "
              key={process.node.processDescription.id}
            >
              {process.node.processDescription.processDescription}
            </p>
          </>
        ))}
      </ProcessGrid>
    </Layout>
  )
}

export const query = graphql`
  query ProcessQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulProcess(sort: { order: ASC }) {
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
`

export default Process
