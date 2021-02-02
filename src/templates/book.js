import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';


export const query = graphql`
    query($slug: String!) {
        contentfulBook(slug: {eq: $slug}) {
            title
            author
            summary {
                summary
            }
        }
    }`

const Book = (props) => {
    const book = props.data.contentfulBook;
    const style = {
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "50px"
    }
    return (
        <Layout>
            <h2>{book.title}</h2>
            <span>{book.author.join(', ')}</span>
            <p style={style}>{book.summary.summary}</p>
        </Layout >
    )
}

export default Book;