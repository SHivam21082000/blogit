import React from 'react'
import '../css/write.css'
import image from '../images/hans-isaacson-RwzKt9PIAUY-unsplash.jpg'
const Write = () => {
    return (
        <div class="write">
            <form className="writeform">
                <img src={image} className="writeImage" />
                <div className="writeformgroup">
                    <label htmlFor="FileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="FileInput" />
                    <input type="text" placeholder="Enter your title" className='writeInput' autoFocus={true} />
                </div>
                <div className="writeformgroup">
                    <textarea placeholder="tell your story" className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>PUBLISH </button>
            </form>
        </div>
    )
}

export default Write
