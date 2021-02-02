import React from 'react';
import { Link } from 'gatsby';

const Books = ({ books }) => {
    const style = {
        maxHeight: "192px",
        maxWidth: "144px"
    };
    return (
        <div>
            {
                books.map((edge) => {
                    const book = edge.node;
                    return (
                        <Link to={`/book/${book.slug}`}>
                            <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                                <img style={style} alt={book.title} src={`https://${book.cover.file.url}`} />
                                <h3>{book.title}</h3>
                                <p>{book.author.join(', ')}</p>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default Books;