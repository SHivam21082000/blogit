import React from 'react'
import postimage from '../images/billow926-VvXFSTrAip0-unsplash.jpg'
import '../css/Onepost.css'
const Onepost = () => {
    return (
        <div className="onepost">
            <img className="post-img" src={postimage} alt="" srcset="" />
            <div className="postinfo">
                <span className="onepost-categories">Tech and Sports</span>
                <span className="onepost-title">Lorem ipsum dolor sit amet consectetur.</span>
                <hr />
                <span className="date">1 hour ago</span>
            </div>
            <p className="post-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi omnis corporis aperiam dolor sunt quas nam quisquam veniam neque non, sapiente, expedita rem eaque deleniti nostrum eius nisi aspernatur cumque minima exercitationem nemo provident? Quo esse nesciunt veniam, facilis saepe officia libero alias exercitationem officiis reiciendis optio, nobis doloribus nulla?
            </p>
        </div>
    )
}

export default Onepost
