import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import bookStyles from "./book.module.scss"
export const query = graphql`
  query($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      title
      author
      cover {
        file {
          url
        }
      }
      summary {
        summary
      }
    }
  }
`

const Book = props => {
  const book = props.data.contentfulBook

  return (
    <Layout>
      <div className={bookStyles.container}>
        <div className={bookStyles.cover}>
          <img src={book.cover.file.url} alt={book.title} />
        </div>
        <div className={bookStyles.content}>
          <div className={bookStyles.heading}>
            <h2>{book.title}</h2>
            <span>{book.author.join(", ")}</span>
          </div>
          <div className={bookStyles.description}>
            <p>{book.summary.summary}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Book
