import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "tachyons"
import Books from "../components/Books/books"
import Layout from "../components/layout"
import "./index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook(sort: { order: DESC, fields: createdAt }) {
        edges {
          node {
            title
            author
            slug
            cover {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Books books={data.allContentfulBook.edges} />
    </Layout>
  )
}

export default IndexPage
