/* eslint-disable max-len */
import React from 'react'
import Helmut from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import PageTitle from '../components/styles/PageTitle'
import PageSubTitle from '../components/styles/PageSubTitle'
import PageTitleDivider from '../components/styles/PageTitleDivider'
import MetaData from '../components/styles/MetaData'
import BoxWrapper from '../components/styles/BoxWrapper'
import Box from '../components/styles/Box'
import ImageGrid from '../components/styles/ImageGrid'

const Work = ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: 'work' }} />
    <SEO
      title="Work"
      description={data.site.siteMetadata.description}
      keywords={data.site.siteMetadata.keywords}
    />
    <PageTitle>Missions Accomplished</PageTitle>
    <BoxWrapper>
      {data.allContentfulWork.edges.map(work => (
        <Box>
          <MetaData>{work.node.category.category}</MetaData>
          <PageSubTitle>{work.node.clientName}</PageSubTitle>
          <p>{work.node.description.description}</p>
        </Box>
      ))}
    </BoxWrapper>
    <PageTitleDivider>Brands we've helped</PageTitleDivider>
    <ImageGrid>
      {data.allFile.edges.map(image => (
        <GatsbyImage key={image.node.id} image={image.node.childImageSharp.gatsbyImageData} />
      ))}
    </ImageGrid>
  </Layout>
)

export const query = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulWork {
      edges {
        node {
          clientName
          description {
            description
          }
          category {
            category
          }
        }
      }
    }

    allFile(filter: { relativePath: { regex: "/co_logos/" } }) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Work
