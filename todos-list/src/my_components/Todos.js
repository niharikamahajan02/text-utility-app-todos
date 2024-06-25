import React from 'react'
import Todo from "../my_components/Todo";

// props ke andar dono cheezo ko le liya i.e todos , ondelete
 const Todos = (props) => {

  let mystyle={
     minheight : "70vh",
     margin:"auto"
  }
  return ( 
    <div className="container" style={mystyle}> 
      <h3 className="text-center">To dos list </h3>

      { props.todos.length===0? "NO TODOS TO DIPLAY" :
      
       
        props.todos.map((todoitm)=>
        { 
           return(
            <>

           
            <Todo todoit={todoitm} key={todoitm.sno} ondelete={props.ondelete}/><hr/>
            </>
            )
      }
       )
       }
      
    </div>
  ) 
}

export default Todos
