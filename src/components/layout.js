import React from "react";
import Footer from '../components/footer'
import Header from '../components/header'

const Layout  = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout