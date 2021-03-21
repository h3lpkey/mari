import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

type PricesProps = {
  data: {
    allFile: {
      edges: {
        node: {
          id: number
          name: string
          publicURL: string
        }
      }[]
    }
  }
}

const Price: React.FC<PricesProps> = ({ data }) => {
  return (
    <Layout>
      <div className="prices">
        {data.allFile.edges.map(price => (
          <img key={price.node.id} src={`${price.node.publicURL}`} alt="" className="price" />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "prices" } }) {
      edges {
        node {
          id
          name
          publicURL
          sourceInstanceName
        }
      }
    }
  }
`

export default Price
