import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-primary'>Todos List</h3>
      {props.todos.length===0?"no todos to complete":
      props.todos.map((todos)=>{
       return  <Todoitem todos={todos} key={todos.sno} ondelete={props.ondelete}/>
      })
    }
      
     
      </div>
  )
}
