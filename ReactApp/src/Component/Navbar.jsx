import React from 'react'
import { Link,  NavLink, useNavigate  } from 'react-router-dom'
import User from './user'

function Navbar(props ) {
  console.log(props.list)
  const navigate = useNavigate()

  const handleRoute=()=>{
    console.log("REdirecting to the homepage")
    navigate("/sample")
  }

  return (
    <div>
      <h2> This is a NavBar</h2>
      <ul>
        <li className='text-white'>{props.list}</li>
        <li className='hover:text-blue-600'><Link to="/contact">Contact</Link></li>
        <li className='hover:text-blue-600'><Link to="/sample">Sample</Link></li>
        <li className='hover:text-blue-600'><Link to="/profile">Profile</Link></li>
        <li className='hover:text-blue-600'><Link to="/Search">Search</Link></li>
        <li className='hover:text-blue-600'><Link to="/Product">Product</Link></li>
      </ul>

    </div>
  )
}

export default Navbar