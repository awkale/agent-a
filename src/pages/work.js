/* eslint-disable max-len */
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Helmut from 'react-helmet'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import BoxWrapper from '../components/styles/BoxWrapper'
import ImageGrid from '../components/styles/ImageGrid'
import PageSubTitle from '../components/styles/PageSubTitle'
import PageTitleDivider from '../components/styles/PageTitleDivider'

const Work = ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: 'work' }} />
    <SEO
      title="Work"
      description={data.site.siteMetadata.description}
      keywords={data.site.siteMetadata.keywords}
    />
    <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24">Missions Accomplished</h1>
    <BoxWrapper>
      {data.allContentfulWork.edges.map(work => (
        <div className="p-5">
          <h3 className="text-xs text-red uppercase mb-5">{work.node.category.category}</h3>
          <PageSubTitle>{work.node.clientName}</PageSubTitle>
          <p className="text-xl">{work.node.description.description}</p>
        </div>
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
    allContentfulWork(sort: {order: ASC}) {
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
