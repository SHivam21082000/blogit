import React from 'react'
import Headers from '../../components/headers'
import Post from '../../components/post'
import PostCreate from '../../components/PostCreate'
import Sidebar from '../../components/Sidebar'
import Write from '../../components/Write'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="home">
                <Write/>
                <Sidebar />
            </div>
        </>
    )
}

export default Home
