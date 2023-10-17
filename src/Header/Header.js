import React from 'react';
import './Header.css';
function Header() {
    return (
        <>
        <div class="header">
            <a><img src="https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png" class="imgTitle"/></a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
        </>
    )
}

export default Header;