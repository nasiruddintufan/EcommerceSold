import React from 'react'
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="searchbox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] px-4 relative">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-[50px] focus:outline-none bg-inherit text-[15px]"
      />
      <Button className='!absolute top-[6px] right-[5px] z-50 !w-[40px] !min-w-[40px] !h-[40px] !rounded-full !text-[#6a6767]'>
        <IoSearch className='text-[#3f3d3d] text-xl'/>
      </Button>
    </div>
  );
}

export default Search
