import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

type AboutProps = {
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

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <Layout>
      <div className="about">
        <img src={`${data.allFile.edges[0].node.publicURL}`} alt="" className="about-photo" />
        <p className="about-text">
          Добрый день!
          <br /> Меня зовут Мария Семерикова и я детский и семейный фотограф с
          многолетним стажем. До рождения сына Славы я снимала в основном
          свадьбы, а теперь я прониклась детьми и семейными историями. Во время
          съемки я стану другом вам и вашим детям, вы не будете думать "а как
          мне встать", "на меня все смотрят", вы будете жить и наслаждаться этим
          моментом. В моих фотографиях живет сказка и доброта, фото полны эмоций
          и душевной теплоты.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "about" } }) {
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

export default About
