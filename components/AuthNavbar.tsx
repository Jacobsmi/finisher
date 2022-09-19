import { Menu } from "@headlessui/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const AuthNavbar = () => {
  return (
    <div className="flex justify-between mx-6 mt-6 md:mx-12">
      <div className="text-2xl font-bold md:text-3xl">Finisher</div>
      <div className="flex items-center md:hidden">
        <Menu>
          <Menu.Button>
            <AiOutlineUser className="w-6 h-6 border-2 border-black rounded-full" />
          </Menu.Button>
          <Menu.Items className="absolute top-12 right-6 mt-1 rounded-md border border-violet-100">
            <button className="px-6 font-medium" onClick={() => signOut()}>
              Sign Out
            </button>
          </Menu.Items>
        </Menu>
      </div>
      <div className="hidden md:flex items-center">
        <Link href="/">
          <a className="mr-6">Other Option</a>
        </Link>
        <Link href="/">
          <a className="mr-6">Other Option</a>
        </Link>
        <Link href="/">
          <a className="mr-6">Other Option</a>
        </Link>
        <button
          className="border border-black px-4 py-1 rounded-md"
          onClick={() => {
            console.log("Signing Out");
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default AuthNavbar;
