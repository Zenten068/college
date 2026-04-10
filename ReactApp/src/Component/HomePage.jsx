import React from 'react'
import '../CSS/HomePage.css'

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
             <button class="btn" onClick={handleLogin}>Logout</button>
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