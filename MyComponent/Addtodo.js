// import userEvent from '@testing-library/user-event';
// import React from 'react'
import React, { useState } from 'react';

export const Addtodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
    e.preventDefault()
    if(!title || !desc){
      alert('title or description cannot be blank')
    }
  }
  return (
    <div className='container my-3'>
        <form onSubmit={submit}>
  <div class="form-group">
    <h4>Add a Todo</h4>
    <label for="title">Todo Title</label>
    <input type="text" class="form-control" value={title} id="title" onChange={(e)=>{setTitle(e.target.value)}} aria-describedby="emailHelp" />
    
  </div>
  <div class="form-group">
    <label for="description">Todo Dec.</label>
    <input type="text" value={desc} class="form-control" id="description" onChange={(e)=>{setDesc(e.target.value)}} />
  </div>
  
  <button type="submit" class="btn btn-sm btn-success my-2">Add Todo</button>
</form>
    </div>
  )
}
