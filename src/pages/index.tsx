import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"

const IndexPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <Gallery album={Object.keys(pageContext).length === 0 ? data.allStrapiAlbum.nodes[0] : pageContext.album} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAlbum(limit: 1) {
      nodes {
        title
        title_ru
        id
        images {
          id
          url
          formats {
            small {
              url
            }
            medium {
              url
            }
            large {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
