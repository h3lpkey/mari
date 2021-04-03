import React, { useState } from "react"
import Modal from "./modal"
import Img from "gatsby-image"

interface GalleryProps {
  album: {
    id: number
    name: string
    childImageSharp: {
      fluid: {
        aspectRatio: number
      }
    }
  }[]
}

const Gallery: React.FC<GalleryProps> = ({ album }) => {
  const [modalImg, setModalImg] = useState(null)
  return (
    <>
      <div className="gallery">
        {album.map(image => (
          <div
            className={`picture ${
              image.childImageSharp.fluid.aspectRatio > 1 ? "landscape" : ""
            }`}
            key={image.id}
            onClick={() => {
              if (!modalImg) {
                setModalImg(image.childImageSharp.fluid)
              }
            }}
          >
            <Img fluid={image.childImageSharp.fluid} />
          </div>
        ))}
      </div>
      <Modal modalImg={modalImg} setModalImg={setModalImg} />
    </>
  )
}

export default Gallery
