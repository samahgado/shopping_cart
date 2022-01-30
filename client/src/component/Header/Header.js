import React from 'react';
import "./Header.scss"
import { words } from './../../words';



function Header () {
    return (
    <header>
        {words.headerTitle}
    </header>
    )
}
export default Header