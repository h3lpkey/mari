import React from "react"
import Img from "gatsby-image"

interface ModalProps {
  modalImg: string | null
  setModalImg: (img) => void
}

const Modal: React.FC<ModalProps> = ({ modalImg, setModalImg }) => {
  if (modalImg !== null) {
    return (
      <div className="modal">
        <div className="img-wrapper">
          <Img className="img" fluid={modalImg} />
        </div>
        <span
          className="close"
          onClick={() => {
            setModalImg(null)
          }}
        />
      </div>
    )
  }
  return <></>
}

export default Modal
