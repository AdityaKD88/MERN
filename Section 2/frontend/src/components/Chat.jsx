import React, { useState } from 'react'

const Chat = () => {

  const [sendMessage, setSendMessage] = useState([]);

  const sendNewMessage = (e) => {
    if(e.code === 'Enter'){
      console.log(e.target.value);

      const msgText = e.target.value;
      setSendMessage([...sendMessage, msgText]);
      e.target.value = '';
    }
  }

  return (
    <div style={{backgroundColor: '#ccc', minHeight:'100vh'}}>
      <div className="container">
        <h1 className="text-center">Chat</h1>
        <hr />

        <div className="card w-75 mx-auto">
          <div className="card-body d-flex flex-column justify-content-end" style={{height:'60vh', overflow:'auto'}}>
            {sendMessage.map((msg) => (
              <div className='border p-3 d-flex justify-content-end alert alert-primary' key={msg}>
                <h3>{msg}</h3>
              </div>
            ))}
          </div>

          <div className="card-header">
            <input type="text"
            className='form-control'
            placeholder='Message'
            onKeyDown={sendNewMessage}/>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Chat