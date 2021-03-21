import React from "react"
import "../assets/main.sass"

interface GalleryProps {
  album: {
    title: string
    title_ru: string
    images: {
      url: string
      id: number
      formats: {
        small: {
          url: string
        }
        medium: {
          url: string
        }
        large: {
          url: string
        }
      }
    }[]
  }
}

const Gallery: React.FC<GalleryProps> = ({ album }) => {
  return (
    <div className="gallery">
      {album.images.map(image => (
        <picture className="picture" key={image.id}>
          <source
            media="(max-width: 600px)"
            srcSet={`http://localhost:1337${image.formats.small.url}`}
          />
          <source
            media="(max-width: 799px)"
            srcSet={`http://localhost:1337${image.formats.medium.url}`}
          />
          <source
            media="(min-width: 800px)"
            srcSet={`http://localhost:1337${image.formats.large.url}`}
          />
          <img
            className="img"
            src={`http://localhost:1337${image.formats.large.url}`}
            alt="Chris standing up holding his daughter Elva"
          />
        </picture>
      ))}
    </div>
  )
}

export default Gallery
