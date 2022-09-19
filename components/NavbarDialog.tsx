import { Dialog } from "@headlessui/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface NavbarDialogProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const NavbarDialog = ({ isOpen, setIsOpen }: NavbarDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex">
        <Dialog.Panel className="absolute top-0 right-0 min-h-screen w-3/4 bg-white flex flex-col p-6">
          <div className="flex justify-end">
            <AiOutlineCloseCircle
              className="h-6 w-6"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <Link href="/">
            <a className="outline-none mt-6">Contact Us</a>
          </Link>
          <button
            className="border border-black outline-none mt-6 rounded-md py-1"
            onClick={() => signIn()}
          >
            Login
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
export default NavbarDialog;
