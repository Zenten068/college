import React, { useEffect, useState } from 'react'

function Search() {
    const [search, setSearch] = useState("")

    useEffect(() => {
        const getData=()=>{
            console.log("data has been fetched")
            console.log(search)
        }
        const interval=setTimeout(() => {
            getData()
        },500)
        return () => {
            clearTimeout(interval)
        }
    },[search])
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='Search' value={search} onChange={handleSearch} />
    </div>
  )
}

export default Search