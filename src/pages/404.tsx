import { HeadProps, Link, PageProps } from 'gatsby'
import * as React from 'react'
import { SEO, Layout } from '../components'
import { SeoProps } from '../types'

const NotFoundPage = (props: PageProps) => (
  <Layout>
    <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24">
      Page Not Found
    </h1>
    <p className="text-xl mb-8">
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <p>
      <Link className="text-xl hover:text-red" to="/">
        Return home
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage

export function Head({}: HeadProps<SeoProps>) {
  return (
    <>
      <body className="not-found" />
      <SEO title="404: Not found" />
    </>
  )
}
