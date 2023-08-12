import 'animate.css'
import { graphql, HeadProps, PageProps } from 'gatsby'
import * as React from 'react'
import { SEO, Layout } from '../components'
import '../styles/home.css'
import { SeoProps } from '../types'

function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-y-2">
        <h1 className="col-start-3 col-span-9 row-start-2 text-red leading-tight text-3xl md:text-5xl uppercase md:text-justify">
          Agent A is a Brooklyn-based brand and innovation studio.
        </h1>
        <h1 className="col-start-3 col-span-9 row-start-4 text-red leading-tight text-3xl md:text-5xl uppercase md:text-justify">
          We’re multicultural moderators, researchers, brand strategists,
          creatives & designers working with some of the world’s leading brands.
        </h1>
        <h1 className="col-start-3 col-span-9 row-start-6 text-red leading-tight text-3xl md:text-5xl uppercase md:text-justify">
          We merge consumer & cultural insights with imagination, curiosity and
          a healthy obsession with facts to unlock growth.
        </h1>
        <h2 className="col-start-1 row-start-1 text-red leading-tight text-9xl font-extrabold uppercase">
          Truth
        </h2>
        <h2 className="col-start-1 row-start-1 translate-y-6 -translate-x-6 text-black leading-tight text-9xl font-extrabold uppercase">
          Truth
        </h2>
        <h2 className="col-start-1 row-start-3 text-red leading-tight text-9xl font-extrabold uppercase">
          Ideas
        </h2>
        <h2 className="col-start-1 row-start-3 translate-y-6 -translate-x-6 text-black leading-tight text-9xl font-extrabold uppercase">
          Ideas
        </h2>
        <h2 className="col-start-1 row-start-5 text-red leading-tight text-8xl md:text-9xl font-extrabold uppercase">
          Courage
        </h2>
        <h2 className="col-start-1 row-start-5 translate-y-6 -translate-x-6 text-black leading-tight text-8xl md:text-9xl font-extrabold uppercase">
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

export function Head({ }: HeadProps<SeoProps>) {
  return (
    <>
      <body className="home" />
      <SEO />
    </>
  )
}
