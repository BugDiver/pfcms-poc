import React from 'react';
import headerStyle from './header.module.scss'

const Header = () => {
    return (
        <header>
            <h1 className={'f1 ' + headerStyle.h1} >Library</h1>
            <p>A simple Library with little info about books</p>
        </header>
    )
}

export default Header