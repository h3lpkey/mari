import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "../components/gallery"

const KidsPage = ({ data }) => {
  return (
    <Layout>
      <div className="main">
        <Gallery album={data.allFile.nodes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "photos-kids" } }) {
      nodes {
        id
        name
        publicURL
        sourceInstanceName
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  }
`

export default KidsPage
