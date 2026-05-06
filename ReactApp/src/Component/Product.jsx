import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Product() {
    const [products, setProducts] = React.useState([])
    const [skip, setSkip] = React.useState(0)
    const [loading, setLoading]=useState(false)
    
    useEffect(()=>{
        const getData = async () => {
            try{
                setLoading(true)
                const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=id,title,price`)
                setProducts(response.data.products)
                console.log(response.data)
                setLoading(false)
            }catch(e){
                console.log(e)
            }
        }
        getData()
    }, [skip])

  return (

    <div>
        {loading?<h2>Loading...</h2>:""}

        {products.map((product) => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>Price: {product.price}</p> 
            </div>
        ))}  
        <button className='bg-red-600 m-5 p-2 text-black' onClick={()=>{
            if(skip > 0){
                setSkip(skip - 10)
            }
        }}>Prev</button>
        <button className='bg-green-600 m-5 p-2 text-black' onClick={()=>{
            if(skip<194){
                setSkip(skip+10)
            }
        }}
        >Next</button>
        
      
    </div>
  )
}
