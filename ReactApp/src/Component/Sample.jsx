import React, { Component } from 'react'
import {usestate } from 'react'

//  CLASS COMPONENT
//  class Sample extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
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
        <button onClick={increment}>Add</button>
        <br></br>
        <button onClick={decrement}>Subtract</button>
        <br></br>
        <button onClick={multiply}>Multiply</button>
        <br></br>
        <button onClick={reset}>Reset</button>
      </div>

    )
  }
export default Sample
