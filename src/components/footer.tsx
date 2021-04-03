import React from "react"
import instagramIcon from "../assets/icons/instagram.svg"
import vkIcon from "../assets/icons/vk.svg"

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-buttons">
          <a href="https://vk.com/foto_marisemerikova" className="link">
            <img src={vkIcon} alt="vk" />
          </a>
          <a
            href="https://www.instagram.com/foto_marisemerikova/"
            className="link"
          >
            <img src={instagramIcon} alt="instagram" />
          </a>
        </div>
        <div className="copyraties">2018 Мария Семерикова</div>
      </div>
    </footer>
  )
}

export default Footer
