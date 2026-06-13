import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { RiArrowDropUpLine } from "react-icons/ri";


import "../Navigation/style.css"
  
const Catagory = (props) => {
  const[submenuindex,setsubmenuindex]=useState(null);
  const[innersubmenuindex,setinnersubmenuindex]=useState(null);

  
  
  const toggleDrawer =(newopen)=> () => {
    props.setisopencatagory(newopen)
  };

  const opensubmenu = (index) => {
    if (submenuindex===index){

      setsubmenuindex(null);
    }
    else{
      setsubmenuindex(index);
    }
  };

  const openinnersubmenu = (index) => {
    if (innersubmenuindex===index){
      setinnersubmenuindex(null);
    }
    else{
      setinnersubmenuindex(index);
    }
  };

   const DrawerList = (
     <Box sx={{ width: 250 }} role="presentation">
       <h3 className="p-3 text-[16px] font-[500] flex justify-between items-center">
         Shop by Catagories{" "}
         <IoCloseOutline
           onClick={toggleDrawer(false)}
           className="cursor-pointer"
         />
       </h3>

       <div className="scroll">
         <ul className="w-full">
           <li className="flex flex-col items-center relative">
             <Button className="w-full !justify-start !px-3 !text-black">
               Fashion
             </Button>
             {submenuindex === 0 ? (
               <RiArrowDropUpLine
                 className="absolute top-[7px] right-[15px] text-3xl cursor-pointer"
                 onClick={() => opensubmenu(0)}
               />
             ) : (
               <RiArrowDropDownLine
                 className="absolute top-[7px] right-[15px] text-3xl cursor-pointer"
                 onClick={() => opensubmenu(0)}
               />
             )}

             {submenuindex === 0 && (
               <ul className="submenu  w-full pl-3">
                 <li className="relative">
                   <Button className="w-full !justify-start !px-3 !text-black">
                     <Link
                       to="/"
                       className="w-full !text-left !justify-start !px-3 transition"
                     >
                       Men
                     </Link>
                   </Button>
                   {innersubmenuindex === 0 ? (
                     <RiArrowDropUpLine
                       className="absolute top-[7px] right-[15px] text-2xl cursor-pointer"
                       onClick={() => openinnersubmenu(0)}
                     />
                   ) : (
                     <RiArrowDropDownLine
                       className="absolute top-[7px] right-[15px] text-2xl cursor-pointer"
                       onClick={() => openinnersubmenu(0)}
                     />
                   )}

                   {innersubmenuindex === 0 && (
                     <ul className="submenu2  w-full pl-3">
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Shirt
                         </Link>
                       </li>
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Pant
                         </Link>
                       </li>
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Punjabi
                         </Link>
                       </li>
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Joggers
                         </Link>
                       </li>
                     </ul>
                   )}
                 </li>
               </ul>
             )}
           </li>

           <li className="flex flex-col items-center relative">
             <Button className="w-full !justify-start !px-3 !text-black">
               outwear
             </Button>
             {submenuindex === 1 ? (
               <RiArrowDropUpLine
                 className="absolute top-[7px] right-[15px] text-3xl cursor-pointer"
                 onClick={() => opensubmenu(1)}
               />
             ) : (
               <RiArrowDropDownLine
                 className="absolute top-[7px] right-[15px] text-3xl cursor-pointer"
                 onClick={() => opensubmenu(1)}
               />
             )}

             {submenuindex === 1 && (
               <ul className="submenu  w-full pl-3">
                 <li className="relative">
                   <Button className="w-full !justify-start !px-3 !text-black">
                     <Link
                       to="/"
                       className="w-full !text-left !justify-start !px-3 transition"
                     >
                       Men
                     </Link>
                   </Button>
                   {innersubmenuindex === 1 ? (
                     <RiArrowDropUpLine
                       className="absolute top-[7px] right-[15px] text-3xl cursor-pointer"
                       onClick={() => openinnersubmenu(1)}
                     />
                   ) : (
                     <RiArrowDropDownLine
                       className="absolute top-[7px] right-[15px] text-3xl cursor-pointer"
                       onClick={() => openinnersubmenu(1)}
                     />
                   )}

                   {innersubmenuindex === 1 && (
                     <ul className="submenu2 w-full pl-3">
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Shirt
                         </Link>
                       </li>
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Pant
                         </Link>
                       </li>
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Punjabi
                         </Link>
                       </li>
                       <li className="relative">
                         <Link
                           to="/"
                           className="link w-full !text-left !justify-start !px-6 transition text-[14px] mb-1"
                         >
                           Joggers
                         </Link>
                       </li>
                     </ul>
                   )}
                 </li>
               </ul>
             )}
           </li>
         </ul>
       </div>
     </Box>
   );

  return (
    <>
      <div>
        <Drawer open={props.isopencatagory} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}

export default Catagory
