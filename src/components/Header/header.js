import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import headerStyle from './header.module.scss';


const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return (
        <header>
            <h1 className={'f1 ' + headerStyle.h1} >
                <Link className={headerStyle.link} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <p>{data.site.siteMetadata.description}</p>
        </header>
    )
}

export default Header