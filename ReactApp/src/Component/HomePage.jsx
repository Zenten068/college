import React from 'react'

function Home(){
    const loggedin = true
    return(
        loggedin ? <button>Logout</button> : <button>Login</button>
    )
    // if (loggedin) {
    //     return (
            
    //         <h1>Home Page</h1>
    //     )
    // }
    // else{
    //     return(
    //         <h1>Please log in to view the home page.</h1>
    //     )
    // }
}

export default Home