/* eslint-disable max-len */
import React from 'react';
import Helmut from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import PageTitle from '../components/styles/PageTitle';
import PageSubTitle from '../components/styles/PageSubTitle';
import MetaData from '../components/styles/MetaData';
import BoxWrapper from '../components/styles/BoxWrapper';
import Box from '../components/styles/Box';
import ImageGrid from '../components/styles/ImageGrid';
import CaseNumber from '../components/styles/CaseNumber';

const Work = ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: 'work' }} />
    <SEO
      title="Work"
      description={data.site.siteMetadata.description}
      keywords={data.site.siteMetadata.keywords}
    />
    <PageTitle>Missions Accomplished</PageTitle>
    <ImageGrid>
      {data.allFile.edges.map(image => (
        <Img key={image.node.id} fluid={image.node.childImageSharp.fluid} />
      ))}
    </ImageGrid>
    <BoxWrapper>
      {data.allContentfulWork.edges.map(work => (
        <Box>
          <CaseNumber>{`Case Number: ${work.node.caseNumber}`}</CaseNumber>
          <MetaData>{work.node.category.category}</MetaData>
          <PageSubTitle>{work.node.clientName}</PageSubTitle>
          <p>{work.node.description.description}</p>
        </Box>
      ))}
    </BoxWrapper>
  </Layout>
);

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
          caseNumber
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
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Work;
