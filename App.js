import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/header";
import { Todos } from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { Addtodo } from "./MyComponent/Addtodo";
import React, { useState } from 'react';


function App() {
  const ondelete =(todo)=>{
    // console.log('i am ondelte', todos)

    settodos(todos.filter((e)=>{
      return e!==todo
    }))
  }
  const [todos, settodos] = useState([
    {sno:"Todos 1",
    title:"go to the market",
    desc:"This is task 1"
  },
  {sno:"Todos 2",
    title:"go to the mall",
    desc:"This is task 2"
  },
  {sno:"Todos 3",
    title:"go to the home",
    desc:"This is task 3"
  }
  ]);
  return (
    <>
    <Header title="My_todolist"/>
    <Addtodo/>
    <Todos todos={todos} ondelete={ondelete}/>
    <Footer/>
    </>
  );
}

export default App;
