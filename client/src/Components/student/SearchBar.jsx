import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

function SearchBar({data}) {
  const [input,setInput]=useState(data?data:'')
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault()
    navigate('/course-list/'+input)
  }
  return (
      <form onSubmit={handleSearch}
        className='max-w-xl w-full flex items-center border border-gray-500/20 rounded bg-white h-12 md:h-14'>
        <img src={assets.search_icon} alt="search icom" className='md:w-auto px-3 w-10'/>
        <input onChange={(e)=>setInput(e.target.value)}
        className='outline-none w-full h-full text-gray-500'
        type="text" 
        placeholder='Search for courses'/>
        <button type='submit'
        className='bg-blue-600 text-white md:px-10 px-7 py-2 rounded cursor-pointer'
        >Search</button>
      </form>
  )
}

export default SearchBar