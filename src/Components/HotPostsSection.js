import React, { useState } from "react";
import { data } from "../PostsData";
export const HotPostsSection = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-auto w-full mt-14 mb-7">
      <div className="relative h-xl w-4/5 bg-gray-200">
        <img
          src={data.images[index]}
          className="object-cover w-full h-full"
          alt="imag"
        />
        )
        <div className="absolute h-56 w-96 bg-gray-800 top-1/4 px-8 py-10 -right-28">
          <p className="font-Poppins font-light text-sm text-gray-400">
            {data.paragraph}
          </p>
          <p className="font-semibold font-body text-4xl pt-6 text-white">
           {data.title}
          </p>
          <p className="flex flex-row items-center text-gray-200 text-xs py-4 cursor-pointer">
            READ MORE
            <svg
              className="text-gray-200 ml-2"
              height="33"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="relative flex-col md:flex-row flex items-center md:space-x-4 justify-end">
        <div className="flex items-center pt-6 md:pt-0 space-x-4 order-last md:order-first md:pr-20">
          <svg
            className="cursor-pointer"
            onClick={()=>{data.images.length-1 === index? setIndex(0) :setIndex(index+1)}}
            width="18"
            height="33"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <svg
            className="cursor-pointer"
            onClick={()=>{index === 0? setIndex(data.images.length-1) :setIndex(index-1)}}
            height="33"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        <div className="flex flex-row space-x-6">
        {data.images.map(
          (item, i) =>
            i !== index && (
              <div key={i} className="-mt-10">
              <img
                src={item}
                alt="img"
                className="h-28 w-48 "
              />
              </div>
            )
        )}
        </div>
      </div>
    </div>
  );
};
