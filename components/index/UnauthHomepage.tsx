import { signIn } from "next-auth/react";
import UnauthNavbar from "../UnauthNavbar";

const UnauthHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UnauthNavbar />
      <div className="grow flex items-center">
        <div className="flex flex-col mx-6 md:w-1/2 md:mx-12">
          <div className="text-5xl font-bold">Work</div>
          <div className="text-5xl font-bold text-violet-600 mt-2">Smarter</div>
          <div className="w-5/6 mt-8 leading-8 text-lg">
            Use smart insights to help you better manage your time and get
            things done faster and more efficiently.
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => signIn()}
              className="bg-violet-600 h-12 rounded-md text-white font-medium text-xl w-11/12"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center grow">
          <div className="h-96 w-60 bg-gray-600 text-white">
            Product Screenshot
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnauthHomepage;
