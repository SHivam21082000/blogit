import React from 'react'
import '../css/headers.css'
import image from '../images/josh-hild-XgoBtmlAgvQ-unsplash.jpg'
const headers = () => {
    return (
        <div className="headers">
            <span className="titlesm">My first Blog</span>
            <span className="titlelg">Blog</span>
            <img className="blog-img" src={image}alt="" srcset="" />
        </div>
    )
}

export default headers
