import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarDialog from "./NavbarDialog";
import { signIn } from "next-auth/react";
const UnauthNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  return (
    <nav className="mx-6 mt-6 flex justify-between items-center md:mx-12">
      <NavbarDialog isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      <div className="text-2xl font-bold md:text-3xl">Finisher</div>
      <div className="flex items-center md:hidden">
        <AiOutlineMenu
          className="w-6 h-6"
          onClick={() => setIsDrawerOpen(true)}
        />
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
          onClick={() => signIn()}
        >
          Login
        </button>
      </div>
    </nav>
  );
};
export default UnauthNavbar;
