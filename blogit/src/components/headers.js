import React from 'react'
import '../css/headers.css'
import image from '../images/josh-hild-XgoBtmlAgvQ-unsplash.jpg'
const headers = () => {
    return (
        <div className="headers">
            <div className="titlesm">My first Blog</div>
            <div className="titlelg">Blog</div>
            <img className="blog-img" src={image}alt="" srcset="" />
        </div>
    )
}

export default headers
