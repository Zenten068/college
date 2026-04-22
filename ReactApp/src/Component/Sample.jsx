import React, { Component } from 'react'
import {useState, useEffect, useRef } from 'react'
import '../CSS/Sample.css'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import axios from 'axios'

 // CLASS COMPONENT
//  class Sample extends Component {

//     //use to initialize state
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     // data load after jsx is rendered (then jsx is rendered again)
//     componentDidMount(){
//         console.log("Component mounted")
//     }

//     // tell if data should be updated or not 
//     shouldComponentUpdate(nextprops, nextstate){ 
//       if (nextstate.count > 5) {
//         return false
//       }
//       else{
//       console.log("component updated")
//       return true
//       // true --> component will update(0->1)
//       // false --> component will not update(0->0)
//       }
//     }

//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
//   // return jsx
//   render() {
//     return (
//       <div>
//         <h1>This is a sample component</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }
// export default Sample

function Sample() {
    const [count, setCount] = React.useState(0)
     const[name, setName]= useState("Aman")
    const [loading, setLoading]=useState(false)
    const inputref = useRef(null)

     useEffect(()=>{
    console.log("Component is mounted")
    return () => {
      console.log("Component unmount")
    }
  },[name])

 useEffect(()=>{
   const fetchData = async() => {
      try{
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/5")
        console.log(response.data)
        setLoading(false)
      }catch(e){
          console.log(e)
      }
    }
    fetchData()
  },[])



    //[variable , function to update the variable] = useState(initial value of the variable)
    const increment = () => {
        setCount(count + 1)
    }  
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    const multiply = () => {
        setCount(count * 2)
    }
    return (
      <div>
        <h1>This is a sample component</h1>
        <h2>{count}</h2>
        <h3>{name}</h3>
        {loading?<h2>Loading...</h2>:""}
        <input type='text' ref={inputref} placeholder='No name'/><br></br>
        <button onClick={()=> {inputref.current.value = "chal hat bkl"}}>Change Name</button><br></br>
        
        <Button danger
        // style= {{backgroundColor: 'red', color: 'black',textSizeAdjust: '120%', borderRadius: '5px', border: 'none', padding: '10px ', margin: '2px'}} 
        onClick={increment}>Add</Button>
        {/* <br></br> */}
        <Button 
        // style={{backgroundColor: 'blue',color: 'black',textSizeAdjust: '120%', borderRadius: '5px', border: 'none', padding: '10px ', margin: '2px'}} 
        onClick={decrement}>Subtract</Button>
        {/* <br></br> */}
        <Button 
        css = {func}
        // css={{backgroundColor: 'lightgreen', color: 'black',textSizeAdjust: '120%', borderRadius: '5px', border: 'none', padding: '10px ', margin: '2px' }} 
        onClick={multiply}>Multiply</Button>
        <br></br>
        <button 
        css = {halo}
        onClick={reset}>Reset</button>
      </div>
    )
  }
export default Sample

const Button = styled.button`
background-color: ${props => props.danger ? 'red' : 'lightblue'};
color: black;
text-size-adjust: 130%;
border-radius: 5px;
border: none;
padding: 10px;
margin: 2px;
`

const func = css`
background-color: lightgreen;
color: black; 
text-size-adjust: 120%;
border-radius: 5px; 
border: none;
padding: 10px;
margin: 2px;
`
const halo = css`
background-color: grey;
color: black; 
text-size-adjust: 120%;
border-radius: 5px; 
border: none;
padding: 10px;
margin: 2px;
`
