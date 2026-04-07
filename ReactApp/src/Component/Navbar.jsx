import React from 'react'

function Navbar(props ) {
  console.log(props.list)
  return (
    <div>
      <h2> This is a NavBar</h2>
      <ul>
        <li>{props.list}</li>
      </ul>
    </div>
  )
}

export default Navbar