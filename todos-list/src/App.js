import logo from './logo.svg';

import './App.css';
import Header from "./my_components/Header";
import Todos from "./my_components/Todos";
import Addtodo from './my_components/Addtodo';
//import Todo from "./my_components/Todo";
import Footer from "./my_components/Footer";
import React, { useEffect, useState } from 'react';

//searchbar value if not given here its true by default as in headerjs headerprops seachvbar default value i dtrue
function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
     initTodo=[];
  }
    else
    {
    initTodo=JSON.parse(localStorage.getItem("todos"));
    }
  
  const ondelete = (todo) =>{
console.log("i am on delete of todo ");   
  
setTodos(todos.filter((e)=>{
  return e!==todo;
}))

localStorage.setTodos("todos",JSON.springify(todos));
}
const addTodo= (title,desc) =>{
  console.log("I am adding this todo", title,desc);
let sno;
  if(todos.length==0){
    sno=0;
  }
  else{
   sno = todos[todos.length-1].sno + 1;
  }
  const myTodo={
    sno :sno,
    title:title,
    desc:desc
  }

  setTodos([...todos,myTodo]);
  console.log(myTodo);
  
 
   // localStorage.setTodos("todos",JSON.springify(todos));
  
}

//setTodos is a func which would update the todos everytime
  const [todos,setTodos]=useState( [initTodo]);

  // jab bhi todos change hoga use effect call hoga to local storge pe pe save kr dega 
 
   
  return (  
    <>
    
    <Header title="my todos list" searchbar ={false}/> 
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} ondelete={ondelete}/>
    <Footer/>
    </>
  ); 
}

export default App;
