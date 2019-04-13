import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Agent A`, `brand innovation`, `react`]} />
    <h1>Agent A is a brand innovation studio</h1>
    <div>
      <Image />
    </div>
    <Link to="/process/">Process</Link>
  </Layout>
)

export default IndexPage
