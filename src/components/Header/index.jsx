import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search';


const Header = () => {
  return (
    <header>
      <div className="topsection py-2 border-t-[1px] border-gray-300 border-b-[1px]">
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
                  <Link className="text-[13px] font-[500] link" to="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="text-[13px] font-[500] link" to="/about">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-[13px] font-[500] link" to="/about">
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

      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 py-3 w-[30%]">
            <Link to={"/"}>
              <img src="/Logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[30%]"></div>
        </div>
      </div>
    </header>
  );
}

export default Header
