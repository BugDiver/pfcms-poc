import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "tachyons"
import Books from "../components/books"
import Layout from "../components/layout"
import Scroll from "../components/scroll"
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
      <Scroll>
        <Books books={data.allContentfulBook.edges} />
      </Scroll>
    </Layout>
  )
}

export default IndexPage
