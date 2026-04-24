import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdShoppingCart  } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import Navigation from './Navigation';


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));



const Header = () => {
  return (
    <header className="bg-white">
      {/* First coloum */}

      <div className="py-2 border-t-[1px] border-gray-300 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[50%] col1">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season style limited time
              </p>
            </div>  

            <div className="col2">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    className="text-[13px] font-[500] transition link"
                    to="/about"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[13px] transition font-[500] link"
                    to="/about"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[13px] transition font-[500] link"
                    to="/about"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className="text-[13px] font-[500] link" to="/about">
                    FAQS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* second coloum */}

      <div className="header py-3 border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col1 py-3 w-[30%]">
            <Link to={"/"}>
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-6">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li>
                <Link
                  to="/login"
                  className="link text-[15px] font-[500] transition"
                >
                  Login
                </Link>{" "}
                |{" "}
                <Link
                  to="/registration"
                  className="link text-[15px] font-[500] transition"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation part */}
      <div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header
