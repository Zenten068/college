import React, {useContext} from 'react'
import { UserContext } from '../UserContext'

function User() {
    const name = useContext(UserContext);
  return (
    <div>
        <h1>Hello {name}</h1>
    </div>
  )
}
export default User