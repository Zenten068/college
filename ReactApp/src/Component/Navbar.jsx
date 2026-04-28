import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props ) {
  console.log(props.list)
  return (
    <div>
      <h2> This is a NavBar</h2>
      <ul>
        <li>{props.list}</li>
        <li className='color-blue'><Link to="/contact">Contact</Link></li>
        <li><Link to="/sample">Sample</Link></li>
      </ul>
    </div>
  )
}

export default Navbar