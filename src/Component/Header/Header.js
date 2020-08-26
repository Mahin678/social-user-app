import React from 'react';
import "./Header.css"
const Header = () => {

    return (
        <div>
            <div className="navbar" >
                     <a className="logo" href="-">Logo</a>
                    <div  className="nav"  >
                    <a href="-">Home</a>
                    <a href="-">User</a>
                     <a href="-">About</a>
                    </div>
            </div>
        </div>
    );
};

export default Header;