import 'animate.css'
import { graphql, HeadProps, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { SEO } from '../components'
import '../styles/home.css'
import { SeoProps } from '../types'

function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      <div className="home-wrapper">
        <h1 className="home-heading animate__animated animate__faster animate__fadeInUp animate__delay-4s">
          We’re a multi-disciplinary brand innovation team
        </h1>
        <h2 className="home-heading value-1 animate__animated animate__faster animate__fadeInUp animate__delay-1s">
          Truth
        </h2>
        <h2 className="home-heading value-2 animate__animated animate__faster animate__fadeInUp animate__delay-2s">
          Ideas
        </h2>
        <h2 className="home-heading value-3 animate__animated animate__faster animate__fadeInUp animate__delay-3s">
          Courage
        </h2>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`

export default IndexPage

export function Head({}: HeadProps<SeoProps>) {
  return (
    <>
      <body className="home" />
      <SEO />
    </>
  )
}
