import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
function MenuComponent() {
  return (
    <div>
      <Menu>
        <Menu.Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 m-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Menu.Button>
        <Menu.Items className="">
          <Menu.Item>
            <div className="shadow-2xl top-20 inset-x-0 shadow-slate-400 absolute w-full bg-white flex flex-col justify-center items-center">
              <div className="px-8 py-4 hover:bg-gray-100 w-full  text-center  ">
                <Link href={"/"}>Home</Link>
              </div>
              <div className="px-8 w-full hover:bg-gray-100  text-center  ease-in  py-4 ">
                <Link href={"/"}>Browser</Link>
              </div>
              <div className=" px-8 hidden md:block w-full hover:bg-gray-100 text-center  py-4 ">
                <Link href={"/"}>Search</Link>
              </div>
              <div className=" px-8  w-full hover:bg-gray-100 text-center  py-4 ">
                <Link href={"/about"}>About</Link>
              </div>
              <a
                className="text-lg  text-center font-Roboto font-semibold px-8 py-4  text-teal-600 transition-transform hover:animate-pulse ease-in-out"
                href="http://localhost:5000/auth/login"
              >
                Login
              </a>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default MenuComponent;
