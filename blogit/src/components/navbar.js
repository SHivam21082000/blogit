import React from 'react'
import '../css/navbar.css'
const navbar = () => {
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
                        <li className="nav-items">HOME</li>
                        <li className="nav-items">ABOUT</li>
                        <li className="nav-items">CONTACT</li>
                        <li className="nav-items">READ</li>
                        <li className="nav-items">LOGOUT</li>
                    </ul>
                </div>
                <div className="topright">
                    <img className="profile-pic"src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
                    <i className="search-bar fas fa-search"></i>
                </div>
            </div>
        </>
    )
}

export default navbar
