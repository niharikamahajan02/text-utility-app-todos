
//import React from 'react'

import React, { useState } from 'react'


const Addtodo = (props) => {
 
 const [title,setTitle]= useState("");
 const [desc,setDesc]= useState("");

 const submit=(e)=>{
   e.preventDefault();
   if (!title || !desc){
    alert("titles desc cannot be blank");
   }

   props.addTodo(title,desc);


}

  return (
    <div className="comtainer my-5 mx-5">
        <h3 className="text-center my-3">
            Add a todo
        </h3>
      <form onSubmit={submit}>
  <div className="mb-3 ">
    <label htmlFor="Title">Todo Title</label>
    <input type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Title"/>
  </div>

  <div className="mb-3">
    <label htmlFor="desc">Todo description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" placeholder="Description"/>
  </div>

  

  <button type="submit" className="btn btn-sm  btn-success ">ADD</button>
</form>
    </div>
  )
}

export default Addtodo
