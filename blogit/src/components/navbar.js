import React from 'react'
import '../css/navbar.css'
import {Link }from 'react-router-dom'
const navbar = () => {
    const user = true;
    return (
        <>
            <div className="topbar">
                <div className="topleft">
                <i className="icons fab fa-facebook-square"></i>
                <i className="icons fab fa-twitter-square"></i>
                <i className="icons fab fa-instagram-square"></i>
                <i className="icons fab fa-pinterest-square"></i>
                </div>
                <div className="topcenter">
                    <ul className="nav-list">
                        <li className="nav-items"><Link to='/' className="link">HOME</Link></li>
                        <li className="nav-items"><Link to='/' className="link">ABOUT</Link></li>
                        <li className="nav-items"><Link to='/' className="link">CONTACT</Link></li>
                        <li className="nav-items"><Link to='/write' className="link">WRITE</Link></li>
                        <li className="nav-items">
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="topright">
                    {
                        user ? (
                            <Link to = '/settings'>
                            <img className="profile-pic"src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
                            </Link>
                        ) : (
                            <ul className='nav-list'>
                                <li className="nav-items">
                                <Link to="/login" className="link">LOGIN</Link>
                                </li>
                                <li className="nav-items">
                                <Link to='/register' className="link">REGISTER</Link>
                                </li>
                            </ul>
                        )
                    }
                    <i className="search-bar fas fa-search"></i>
                </div>
            </div>
        </>
    )
}

export default navbar
