import React from 'react'
import { useState, useEffect } from 'react'
import Headers from '../../components/headers'
import Post from '../../components/post'
import Sidebar from '../../components/Sidebar'
import axios from "axios"
import './Home.css'
const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get('/post')
            setPosts(res.data)
        } 
        fetchPosts()
    }, [])
    return (
        <>
            <Headers />
            <div className="home">
                <Post posts={posts}/>
                <Sidebar />
            </div>
        </>
    )
}

export default Home
