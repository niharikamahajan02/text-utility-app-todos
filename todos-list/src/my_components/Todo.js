import React from 'react'

const Todo = ({todoit,ondelete}) => {
  return (
    <div>
      <h4>{todoit.title}</h4> 
      <p>{todoit.desc}</p>
      <button className="btn btn-danger" onClick={()=>{ondelete(todoit)}}>delete</button>
    </div>
  ) 
}

export default Todo
