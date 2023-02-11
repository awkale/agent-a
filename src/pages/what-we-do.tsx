import { graphql, PageProps } from 'gatsby'
import React, { Fragment } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const ProcessPage = ({ data }: PageProps<Queries.ProcessPageQuery>) => {
  return (
    <Layout>
      <SEO
        bodyAttributes={{ class: 'what-we-do' }}
        title="What We Do"
        description={data.site?.siteMetadata?.description}
        keywords={data.site?.siteMetadata?.keywords}
      />
      <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24">
        Global research. <br />
        Brand Strategy. <br />
        Creative. <br />
        Innovation.
      </h1>
      <section className="grid gap-5 md:gap-y-24 md:grid-cols-[1fr_2fr]">
        {data.allContentfulProcess.edges.map((process) => (
          <Fragment key={process.node.id}>
            <h2 className="text-red text-4xl md:text-8xl">
              {process.node.processType}
            </h2>
            <p className=" text-2xl md:text-4xl leading-relaxed font-normal ">
              {process.node.processDescription?.processDescription}
            </p>
          </Fragment>
        ))}
      </section>
    </Layout>
  )
}

export default ProcessPage

export const query = graphql`
  query ProcessPage {
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
