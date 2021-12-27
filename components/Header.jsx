import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Dialog } from "@headlessui/react";
import SearchComponent from "./HeaderComponents/SearchComponent";
import MenuComponent from "./HeaderComponents/MenuComponent";
import ProfileMenu from "./HeaderComponents/ProfileMenu";

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
          <div className=" px-8 transition-transform hover:animate-pulse py-4 ">
            <Link href={"/about"}>About</Link>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div>
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
          </div>
          <button
            as="link"
            href="/upload"
            className="flex w-24 transition-transform hover:animate-pulse justify-around items-center font-Roboto border m-2  px-2 py-2 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="red"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="none"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <Link href="/upload">Upload</Link>
          </button>
        </div>
        <div className="h-10 hidden md:flex w-20 font-medium items-center font-Roboto justify-center bg-pink-600 rounded-sm text-white transition-transform hover:animate-pulse">
          <a className="" href="http://localhost:5000/auth/login">
            Login
          </a>
        </div>
        <ProfileMenu />

        <div className="md:hidden flex px-2 justify-center items-center">
          <MenuComponent />
        </div>
      </div>

      <Dialog
        className="w-full flex justify-center items-center"
        open={!toggleSearch}
        onClose={displaySearch}
      >
        <Dialog.Overlay />
        <div className="shadow-2xl md:max-w-xl  md:inset-y-40 inset-y-20 shadow-slate-400 absolute w-full h-52 bg-white flex flex-col justify-center items-center">
          <SearchComponent />
        </div>
      </Dialog>
    </>
  );
}

export default Header;
