import React from 'react'
import '../css/post.css'
import Onepost from './Onepost'
const post = ({posts}) => {
    return (
        <div className="post">
           {posts.map((p)=>(
               <Onepost post={p}/>
           ))}
        </div>
    )
}

export default post
