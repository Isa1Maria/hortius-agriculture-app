import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Navbar() {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMbileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
<div className="navbar-container">
<Link to="/" className="navbar-logo">
    HORTÍOS
</Link>
<div className="menu-icon" onClick={handleClick}>
<i className={click ? "fas fa-times" : "fas fa-bars"} />
</div>
<ul className={click ? "nav-menu active" : "nav-menu"}>
    <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMbileMenu}>
            Home
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/about" className="nav-links" onClick={closeMbileMenu}>
            About
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/contacts" className="nav-links" onClick={closeMbileMenu}>
            Contacts
        </Link>
    </li>
    <li className="nav-item">
        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMbileMenu}>
            Sign Up 
        </Link>
    </li>
    </ul>

</div>
            </nav>
        </>
    )
}

export default Navbar
