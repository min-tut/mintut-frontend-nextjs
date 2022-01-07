import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
function ProfileMenu() {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <div className="flex items-center justify-center">
      <Menu>
        <Menu.Button>
          <Image
            className="block rounded-full"
            src={`${user.photo}`}
            width="45px"
            height="45px"
            alt="mintuts"
          />
        </Menu.Button>
        <Menu.Items className="relative">
          <Menu.Item>
            <div className=" shadow-md border border-t-0 right-0 top-5 absolute shadow-slate-300 w-40 bg-white flex flex-col justify-center items-center">
              <div className="px-8 py-4 hover:bg-gray-100  w-full text-center  ">
                <Link href={`/profile/${user.userid}`}>My Profile</Link>
              </div>
              <div className="px-8 py-4 hover:bg-gray-100 text-red-500 w-full  text-center  ">
                <button>Logout</button>
              </div>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
