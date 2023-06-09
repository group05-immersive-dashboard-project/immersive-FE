import React, { FC } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill, BsFillHouseDashFill, BsPeopleFill, BsFillPersonLinesFill } from "react-icons/bs";
interface SidebarProps {
  children?: React.ReactNode;
  title: string;
  name: string;
}

const MenuSidebar: FC<SidebarProps> = ({ children, title, name }) => {
  return (
    <section className="min-h-screen w-screen flex flex-row overflow-x-hidden  ">
      <div className="sticky top-0 flex flex-col w-1/6 bg-sky-100 shadow-xl  z-10 ">
        <div className="flex items-center justify-center p-5 pt-8">
          <img className="w-60 ml-2 " src={logo} alt="" />
          <BsFillArrowLeftCircleFill className="bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer border-sky-300 " />
        </div>
        <ul className="flex flex-col py-4">
          <div className="absolute bottom-0 left-0 w-11/12 md:w-270 border-b-4 border-blue-950 mt-20 " style={{ top: "12%", left: "1%", height: "0px" }}></div>
          <li>
            <Link to={"/dashboard"} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-orange-500 mt-8">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <h3>
                  <BsFillHouseDashFill />
                </h3>
              </span>
              <span className="text-sm font-bold">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/mentee"} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-orange-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <h3>
                  <BsPeopleFill />
                </h3>
              </span>
              <span className="text-sm font-medium">Mentee</span>
            </Link>
          </li>
          <li>
            <Link to={"/user"} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-orange-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <h3>
                  <BsPeopleFill />
                </h3>
              </span>
              <span className="text-sm font-medium">User</span>
            </Link>
          </li>
          <li>
            <Link to={"/class"} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-blue-500 hover:text-orange-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <h3>
                  <BsFillPersonLinesFill />
                </h3>
              </span>
              <span className="text-sm font-medium">Class</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className=" h-screen w-5/6">
        <div className="sticky top-3 font-4xl flex items-center space-x-4 pl-4 h-20 bg-white shadow-md">
          <div>
            <p className="text-black text-xl">{title}</p>
          </div>
          <div className="flex flex-grow justify-end items-center ">
            <p className="mr-4">
              Hello, <span className="font-medium">{name}</span>
            </p>
          </div>
        </div>
        <div className="m-5">{children}</div>
      </div>
    </section>
  );
};

export default MenuSidebar;
