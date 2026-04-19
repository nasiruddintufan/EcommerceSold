import React from 'react'

const Search = () => {
  return (
    <div className='searchbox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] px-4 relative'>
      <input type="text" placeholder='Search for products...' className='w-full h-[50px] focus:outline-none bg-inherit text-[15px]' />
    </div>
  )
}

export default Search
