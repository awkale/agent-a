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

const Work = ({ data }) => (
  <Layout>
    <Helmut bodyAttributes={{ class: 'work' }} />
    <SEO title="Work" />
    <PageTitle>Missions Accomplished</PageTitle>
    <ImageGrid>
      {data.allFile.edges.map((path, index) => (
        <Img fluid={path.node.childImageSharp.fluid} />
      ))}
    </ImageGrid>
    <BoxWrapper>
      <Box>
        <MetaData>New Products</MetaData>
        <PageSubTitle>Coty</PageSubTitle>
        <p>
          We immersed ourselves in the lives of women in China, Spain and the US – and dug into
          their tensions and aspirations in wellness and beauty in order to create disruptive
          innovation concepts for night time skin care.
        </p>
      </Box>
      <Box>
        <MetaData>New Products</MetaData>
        <PageSubTitle>Diageo</PageSubTitle>
        <p>
          How do you reinvent a stodgy, often rigid and polarizing spirit for a new generation of
          spirit drinkers? We talked to haters and lovers of gin to uncover the spirit’s barriers
          and passion points, conducted a semiotic analysis of the category to reveal the hidden
          cultural narrative of gin. We ultimately developed a range of new product territories to
          help make gin the spirit of a new generation.
        </p>
      </Box>
      <Box>
        <MetaData>Insights & Strategy</MetaData>
        <PageSubTitle>Buchanan’s</PageSubTitle>
        <p>
          We uncovered cultural insights and tensions to help the brand celebrate and empower the US
          Hispanic community in today’s volatile climate.
        </p>
      </Box>
      <Box>
        <MetaData>New Products</MetaData>
        <PageSubTitle>Pepsico</PageSubTitle>
        <p>
          Today, we look at food, wellness and snacking very differently. By uncovering consumer
          tensions and leveraging forces in fine dining, luxury experiences, nutrition, fitness,
          happiness and travel – we developed a concept for a new to world brand of premium snacks,
          including narrative, naming, packaging and ingredient guidelines.
        </p>
      </Box>
      <Box>
        <MetaData>Experiential</MetaData>
        <PageSubTitle>Pepisco</PageSubTitle>
        <p>
          If movies are our great escape, why does the concessions experience remain so mundane and
          ordinary? We leveraged cultural forces to help reinterpret the movie concessions
          experience for Pepsico and its beloved brands.
        </p>
      </Box>
      <Box>
        <MetaData>Communications</MetaData>
        <PageSubTitle>Etsy</PageSubTitle>
        <p>
          How do you help break a niche darling into the mainstream? We leveraged our insights into
          the consumers, the brand and category to arrive at a point of difference – unique gifts
          for unique people – and ultimately developed the brand’s global digital campaign.
        </p>
      </Box>
      <Box>
        <MetaData>Insights & Strategy</MetaData>
        <PageSubTitle>Ketel One</PageSubTitle>
        <p>
          Masculinity is a loaded term. We combined consumers groups and ethnographies with the
          insight and objectivity of cultural experts and influencers to develop a more inclusive,
          relevant and aspirational version of masculinity for the iconic vodka brand.
        </p>
      </Box>
    </BoxWrapper>
  </Layout>
);

export const query = graphql`
  query CompanyLogosQuery {
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
