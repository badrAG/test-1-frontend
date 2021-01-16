import React from "react";

const VerticalDescription = ({ title, description, link,width }) => {
  return (
    <div className={`relative flex-col justify-center space-y-11 ${width}`}>
      <h1 className={`font-body font-normal text-4xl text-gray-800 ${width}`}>
        {title}
      </h1>
      <div>
        <p className="text-gray-500 font-Poppins font-base text-sm ">
          {description}
        </p>
        {link && <a className="pt-8 flex items-center space-x-3" href={link}>
          <span className="text-gray-800 font-bold text-xs">READ MORE</span>
          <svg
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
        </a>}
      </div>
    </div>
  );
};

export default VerticalDescription;
