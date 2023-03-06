import React from 'react'

export const Todoitem = ({todos,ondelete}) => {
  return (
    <div className="container">
        <h4>
        {todos.sno}
        </h4>
        <h5>
            {todos.title}
        </h5>
        <button className="btn btn-danger btn-sm" onClick={()=>{ondelete(todos)}}>Delete</button>
    </div>
    )
}
