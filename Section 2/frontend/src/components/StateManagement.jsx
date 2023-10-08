import React, { useState } from 'react'

const StateManagement = () => {

    let likes = 88;

    const [comment, setComment] = useState(0);
    
    const [share, setShare] = useState(0);

    const [width, setWidth] = useState(100);

    const [imageLink, setImageLink] = useState("");

    const addLike = () => {
        likes++;
        console.log(likes);
    }

    const addComment = () => {
        setComment(comment+1);
    }

    const addShare = () => {
        setShare(share+1);
    }

  return (
    <div>
        <div className="container">
            <h1>State Management</h1>
            <hr />

            <button className='btn btn-primary' onClick={addLike}>{likes} Add Like</button>
            <button className='btn btn-danger' onClick={addComment}>{comment} Add Comment</button>
            <button className='btn btn-success' onClick={addShare}>{share} Add Share</button>

            <img width={width} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Doctor_Strange_MCU_logo.webp/800px-Doctor_Strange_MCU_logo.webp.png" alt="" />
         
            <input 
            className='form-range'
            type="range"
            min={0}
            max={400}
            onChange={(e) => { setWidth(e.target.value) }} />

            <h3>Insert Image Link Here</h3>
            <input type="text" className='form-control' onChange={e => setImageLink(e.target.value)} />
            <img src={imageLink} width={width} alt="" />

        </div>
    </div>
  )
}

export default StateManagement