import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Dialog } from "@headlessui/react";
import SearchComponent from "./HeaderComponents/SearchComponent";

function Header() {
  const [toggle, setToggle] = useState(true);
  const [toggleSearch, setToggleSearch] = useState(true);
  const [toggleSearchBig, setToggleSearchBig] = useState(true);

  useEffect(() => {}, []);

  function displaySearch() {
    return setToggleSearch(!toggleSearch);
  }
  function showMenu() {
    return setToggle(!toggle);
  }
  function showSearchBoxBig() {
    return setToggleSearchBig(!toggleSearchBig);
  }
  return (
    <>
      <div className="border-b flex px-4 h-20 items-center">
        <div className="flex-auto flex px-5 items-center">
          <Image
            className="transition-transform animate-pulse ease-linear hover:animate-spin"
            src={"/mintut-logo.svg"}
            width="40px"
            height="40px"
            alt="mintuts"
          />
          <h1 className="font-montserrat font-medium  mx-2  text-3xl">
            <Link href={"/"}>Mintuts</Link>
          </h1>
        </div>
        <div className="hidden md:flex  flex-auto items-center font-MerryWeather justify-center">
          <div className="px-8 py-2 transition-transform hover:animate-pulse ">
            <Link href={"/"}>Home</Link>
          </div>
          <div className="px-8 transition-transform hover:animate-pulse py-4 ">
            <Link href={"/"}>Browse</Link>
          </div>
          <div
            onClick={showSearchBoxBig}
            className={`${
              !toggleSearchBig
                ? " transition-transform animate-pulse ease-linear"
                : "hover:animate-pulse"
            }  px-8 transition-transform cursor-pointer py-4`}
          >
            Search
          </div>
          <div className=" px-8 transition-transform hover:animate-pulse py-4 ">
            <Link href={"/about"}>About</Link>
          </div>
        </div>
        <div className="h-10 hidden md:flex w-20 font-medium items-center font-Roboto justify-center bg-teal-600 rounded-sm text-white transition-transform hover:animate-pulse">
          <a className="" href="http://localhost:5000/auth/login">
            Login
          </a>
        </div>
        <div className="md:hidden flex px-2 justify-center items-center">
          <svg
            onClick={displaySearch}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 m-2 ${
              !toggleSearch ? "transition-transform animate-pulse" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <Menu>
            <Menu.Button>
              <svg
                onClick={showMenu}
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 m-2 ${
                  !toggle ? "transition-transform animate-pulse" : ""
                }`}
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
      </div>

      <Dialog className="w-full" open={!toggleSearch} onClose={displaySearch}>
        <Dialog.Overlay />
        <div className="shadow-2xl inset-y-20 shadow-slate-400 absolute w-full h-52 bg-white flex flex-col justify-center items-center">
          <SearchComponent />
        </div>
      </Dialog>
      <Dialog
        className="w-full"
        open={!toggleSearchBig}
        onClose={showSearchBoxBig}
      >
        <Dialog.Overlay />
        <div
          className="absolute mx-auto min-h-max bg-white h-full max-h-52 md:inset-20
        my-8 min-w-max max-w-2xl w-full shadow-2xl shadow-slate-400"
        >
          <SearchComponent />
        </div>
      </Dialog>
    </>
  );
}

export default Header;
