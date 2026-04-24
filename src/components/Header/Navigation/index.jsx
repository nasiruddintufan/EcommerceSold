import { Button } from '@mui/material'
import React, { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoRocketOutline } from "react-icons/io5";
import Catagory from './Catagory';







const Navigation = () => {


  const[isopencatagory,setisopencatagory] = useState(false);

  const opencatagory=()=>{
    setisopencatagory(true);
  }

  return (
    <>
      <nav className="py-2 border-b-1 border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Button className="!text-black gap-2" onClick={opencatagory}>
              <RiMenu2Line className="text-xl" />
              Shop by Catagories
              <IoMdArrowDropdown className="text-2xl" />
            </Button>
          </div>
          <div className="col2 w-[60%] pl-5">
            <ul className="flex items-center ">
              <li>
                <Link to="/" className="text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Bags
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Footware
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/" className=" text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-black hover:!text-[#FC8A06] !rounded-full">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 w-[20%] ">
            <p className="text-[13px] font-[500] flex justify-end items-center gap-1">
              <IoRocketOutline className="text-[20px]" />
              Free international Delivary
            </p>
          </div>
        </div>
      </nav>
      {/* CAtagory panel component*/}

      <Catagory
        
        isopencatagory={isopencatagory}
        setisopencatagory={setisopencatagory}
      />
    </>
  );
}

export default Navigation
