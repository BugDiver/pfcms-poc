import React from "react"
import { Link } from "gatsby"
import BookStyles from "./books.module.scss"
const Books = ({ books }) => {
  return (
    <div className={BookStyles.bookCardList}>
      {books.map(edge => {
        const book = edge.node
        return (
          <Link to={`/book/${book.slug}`}>
            <div className={BookStyles.bookCard}>
              <img alt={book.title} src={`https://${book.cover.file.url}`} />
              <div className={BookStyles.bookCardDescription}>
                <h3>{book.title}</h3>
                <p>{book.author.join(", ")}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Books
