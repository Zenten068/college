import React from 'react'
import '../CSS/HomePage.css'
import User from './user'

function Home(){
    const [loggedin, setLoggedin] = React.useState(true)
    
    const handleLogin = () => {
        if (loggedin == true) {
        setLoggedin(false)
    }
    else{
        setLoggedin(true)
    }
}
    // CONDITIONAL RENDERING
        if (loggedin==false) {
            return(
                <>
             <button className="btn" onClick={handleLogin}>Logout</button>
             <User/>
             </>
            )
        }
        else{
            return(
            <button className="btn2" onClick={handleLogin}>Login</button>
            )
        }
        // loggedin ? <button class="btn" onClick={handleLogout}>Logout</button> : <button class="btn2" onClick={handleLogin}>Login</button>

}

export default Home