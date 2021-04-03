import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
interface PropsHeader {
  links: {
    id: string
    title: string
    title_ru: string
  }[]
}

const Header: React.FC<PropsHeader> = ({ links }) => {
  return (
    <header>
      <div className="header">
        <div className="title">
          <a className="title-main" href="/">
            MARISEMERIKOVA
          </a>
          <h4 className="title-submain">ЕКАТЕРИНБУРГ</h4>
        </div>
        <div className="menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="tabs">
          {links.map(link => (
            <div className="tab" key={link.id}>
              <Link to={`/${link.title.toLocaleLowerCase()}`}>{link.title_ru}</Link>
            </div>
          ))}
          <div className="tab">
            <Link to="/price">Услуги и цены</Link>
          </div>
          <div className="tab">
            <Link to="/about">Обо мне</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function MyHeader() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allStrapiAlbum {
            nodes {
              title
              title_ru
              id
            }
          }
        }
      `}
      render={data => <Header links={data.allStrapiAlbum.nodes} />}
    />
  )
}
