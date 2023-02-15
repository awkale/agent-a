import 'animate.css'
import { graphql, HeadProps, PageProps } from 'gatsby'
import * as React from 'react'
import { SEO, Layout } from '../components'
import '../styles/home.css'
import { SeoProps } from '../types'

function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      <div className="grid grid-cols-12 grid-rows-6 ">
        <h1 className="text-white leading-tight text-5xl">
          We’re a multi-disciplinary brand innovation team
        </h1>
        <h2 className="text-white leading-tight text-7xl">Truth</h2>
        <h2 className="text-white leading-tight text-7xl">Ideas</h2>
        <h2 className="text-white leading-tight text-7xl">Courage</h2>
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
