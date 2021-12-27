import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
function ProfileMenu() {
  return (
    <div>
      <Menu>
        <Menu.Button>
          <Image
            className="block"
            src={"/mintut-logo.svg"}
            width="40px"
            height="40px"
            alt="mintuts"
          />
        </Menu.Button>
        <Menu.Items className="relative">
          <Menu.Item>
            <div className="shadow-2xl border border-t-0 right-0 top-2 absolute shadow-slate-400 w-40 bg-white flex flex-col justify-center items-center">
              <div className="px-8 py-4 hover:bg-gray-100  w-full text-center  ">
                <Link href={"/profile/:userid"}>My Profile</Link>
              </div>
              <div className="px-8 py-4 hover:bg-gray-100 text-red-500 w-full  text-center  ">
                <Link href={"/"}>Logout</Link>
              </div>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
