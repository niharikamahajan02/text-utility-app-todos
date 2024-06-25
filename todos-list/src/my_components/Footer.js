import React from 'react'
//by importing css file
// import './footer.css'

// below objectn for styling
export const Footer= ()=>{
  let footerstyle={
    position: "relative",
    top: "10vh",
    width: "100%"

   

  
}

  return (

    <footer className="bg-dark text-light" style={footerstyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}

export default Footer
