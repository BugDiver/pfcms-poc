import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import headerStyle from "./header.module.scss"
export const query = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`)
const Header = props => {
  const { title, description } = props.data.site.siteMetadata
  return (
    <header className={headerStyle.header}>
      <h1 className={"f1 " + headerStyle.h1}>
        <Link className={headerStyle.link} to="/">
          {title}
        </Link>
      </h1>
      <p>{description}</p>
    </header>
  )
}

export default Header
