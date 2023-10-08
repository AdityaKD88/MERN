import React from 'react'

const Todo = () => {
  return (
    <div>
        <div className="container">
            <h1 className='text-center'>Todo Application</h1>
            <hr />
            
            <div className="card">
                <div className="card-header">
                    <input type="text"
                    className='form-control'
                    placeholder='Enter task Here'
                    onKeyDown={(e) => {console.log(e.key);}} />
                </div>
                <div className="card-body"></div>
            </div>
        </div>
    </div>
  )
}

export default Todo