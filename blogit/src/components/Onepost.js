import React from 'react'
import postimage from '../images/billow926-VvXFSTrAip0-unsplash.jpg'
import '../css/Onepost.css'
const Onepost = ({post}) => {
    return (
        <div className="onepost">
            <img className="post-img" src={postimage} alt="" srcset="" />
            <div className="postinfo">
                <span className="onepost-categories">Tech and Sports</span>
                <span className="onepost-title">{post.title}</span>
                <hr />
                <span className="date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post-desc">{post.desc}
            </p>
        </div>
    )
}

export default Onepost
