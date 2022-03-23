import React from 'react';
import "./Header.scss"
import { words } from './../../words';



function Header () {
    return (
    <header>
        <img src='/images/logo1.jpg'/>
        {words.headerTitle}
    </header>
    )
}
export default Header