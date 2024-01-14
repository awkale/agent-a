/* eslint-disable max-len */
import { graphql, HeadProps, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Layout, SEO } from '../components'
import { SeoProps } from '../types'

const WorkPage = ({ data }: PageProps<Queries.WorkPageQuery>) => (
  <Layout>
    <h1 className="text-white text-5xl md:text-8xl tracking-tight mb-10 md:mb-24 px-4 md:px-0">
      Missions Accomplished
    </h1>
    <div className="grid md:gap-x-8 gap-y-20 grid-cols-12 px-4 md:px-0">
      {data.allContentfulWork.edges.map((work) => (
        <>
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-xs text-red uppercase mb-5">
              {work.node.category?.category}
            </h3>
            <h2 className="text-4xl leading-none text-white mb-8 after:content-[''] after:block after:w-[45px] after:h-[5px] after:mt-5 after:bg-red">
              {work.node.clientName}
            </h2>
            <p className="text-xl">{work.node.description?.description}</p>
          </div>
          {work.node.examples && work.node.examples.map((asset) => {
            if (asset?.mimeType === 'video/quicktime') {
              return (
                <div className="col-span-12 md:col-span-8">
                  <video controls className="w-full h-full">
                    <source src={asset?.url} type="video/mp4" />
                  </video>
                </div>
              )
            }
            if (asset?.mimeType === 'image/jpeg') {
              return (
                <div className="col-span-12 md:col-span-4">
                  <GatsbyImage image={asset?.gatsbyImageData} alt={asset?.title} />
                </div>
              )
            }

          }
          )
          }
        </>
      ))}
    </div>
    <h2 className="text-3xl leading-none text-white mt-48 text-center relative ">
      Brands we've helped
    </h2>
    <div className="w-[70%] my-0 mx-auto grid gap-16 mt-16 mb-32 grid-cols-2 md:grid-cols-5">
      {data.allFile.edges.map((image) => (
        <GatsbyImage
          key={image.node.id}
          image={image.node.childImageSharp.gatsbyImageData}
          alt={image.node.name}
        />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query WorkPage {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulWork(sort: { order: ASC }) {
      edges {
        node {
          clientName
          description {
            description
          }
          category {
            category
          }
          examples {
            url
            title
            mimeType
            gatsbyImageData
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

export default WorkPage

export function Head({ }: HeadProps<SeoProps>) {
  return (
    <>
      <body className="work" />
      <SEO title="Work" />
    </>
  )
}
