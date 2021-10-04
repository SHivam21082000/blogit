import React from 'react'
import PostCreate from './PostCreate'
import Sidebar from './Sidebar'
import '../css/single.css'

const Single = () => {
    return (
        <div className='single'>
            <PostCreate/>
            <Sidebar/>
        </div>
    )
}

export default Single
