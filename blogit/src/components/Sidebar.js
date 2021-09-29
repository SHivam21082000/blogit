import React from 'react'
import '../css/sidebar.css'
import myimg from '../images/lisha-riabinina-TaCRTQHw7HQ-unsplash.jpg'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sideHeader">ABOUT ME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta sequi eos numquam? Magni vel doloremque ea enim! Nihil, distinctio.</p>
            <img className="sidebar-img" src={myimg} alt="" srcset="" />
            <h2 className="sideHeader">CATEGORIES</h2>
            <ul className="categories">
                <li className="categories-item">LIFESTYLE</li>
                <li className="categories-item">TRAVEL</li>
                <li className="categories-item">FOOD</li>
                <li className="categories-item">SPORTS</li>
                <li className="categories-item">CINEMA</li>
                <li className="categories-item">TECH</li>
            </ul>
            <h2 className="sideHeader">FOLLOW ME</h2>
            <div className="social-media">
                <i className="sidebar-icons fab fa-facebook-square"></i>
                <i className="sidebar-icons fab fa-twitter-square"></i>
                <i className="sidebar-icons fab fa-instagram-square"></i>
                <i className="sidebar-icons fab fa-pinterest-square"></i>
            </div>
        </div>
    )
}

export default Sidebar
