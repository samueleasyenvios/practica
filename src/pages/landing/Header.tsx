import React from 'react';

// components
import NavBar from './NavBar';
import Tagline from './Tagline';

const Header = () => {
    return (
        <header className="sticky" id="navbar-sticky">
            {/* tagline */}
            <Tagline />

            {/* navbar */}
            <NavBar />
        </header>
    );
};

export default Header;
