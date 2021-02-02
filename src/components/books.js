import React from "react"
import { Link } from "gatsby"
import "./books.modules.scss"
const Books = ({ books }) => {
  return (
    <div className={"books-card-list"}>
      {books.map(edge => {
        const book = edge.node
        return (
          <Link to={`/book/${book.slug}`}>
            <div className={`bookCard`}>
              <img alt={book.title} src={`https://${book.cover.file.url}`} />
              <div className={"book-card-description"}>
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
