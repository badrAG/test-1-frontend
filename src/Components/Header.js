import React, { useState } from "react";

export const Header = () => {
  const [change, setChange] = useState(false);

  const handelClick = () => {
    setChange(!change);
  };

  return (
    <div className="fixed bg-white z-50 h-22 top-0 left-0 right-0">
      <div className="relative flex justify-between items-center px-32 py-4">
        <div>
          <p className="font-head font-bold text-gray-500 text-2xl">
            Travel Blog
          </p>
        </div>
        <div className="hidden md:block items-center space-x-12">
          <span className="text-xs font-semibold text-gray-500 border-b-2 border-gray-300">
            HOME
          </span>
          <span className="text-xs font-semibold text-gray-300">
            BEST PLACES
          </span>
          <span className="text-xs font-semibold text-gray-300">
            DESTINATIONS
          </span>
          <span className="text-xs font-semibold text-gray-300">
            TRAVEL TIPS
          </span>
          <span className="text-xs font-semibold text-gray-300">
            TRAVEL RESOURCES
          </span>
        </div>
        <div className="block md:hidden w-6">
          <button onClick={() => handelClick()} className='cursor-pointer'>
           { change ?
            <svg
             className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            :
            <svg
             className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>}
          </button>
        </div>
          <div className={change ? "absolute w-5/12 px-12 py-14 right-0 bg-white -bottom-80 shadow-md  flex flex-col justify-center items-center space-y-9" :"hidden"}>
          <span className="text-xs font-semibold text-gray-500 border-b-2 border-gray-300">
            HOME
          </span>
          <span className="text-xs font-semibold text-gray-300">
            BEST PLACES
          </span>
          <span className="text-xs font-semibold text-gray-300">
            DESTINATIONS
          </span>
          <span className="text-xs font-semibold text-gray-300">
            TRAVEL TIPS
          </span>
          <span className="text-xs font-semibold text-gray-300">
            TRAVEL RESOURCES
          </span>
        </div>
      </div>
    </div>
  );
};
