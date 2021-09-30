import React from 'react'
import Headers from '../../components/headers'
import Post from '../../components/post'
import PostCreate from '../../components/PostCreate'
import Sidebar from '../../components/Sidebar'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="home">
                <PostCreate />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
