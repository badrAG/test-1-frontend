import React from 'react'

const HorizontalDescription = () => {
    return (
        <div className="relative flex-col items-center space-y-6 md:space-y-0 flex md:flex-row justify-center space-x-28 py-16 w-full">
                <h1 className='font-body font-extrabold text-4xl text-gray-900 w-72 md:w-48 '>World's hottest destinations for vegans</h1>
            <div>
                <p className="text-gray-500 font-semibold text-base w-96">London is awash with vegan delights, and it’s no wonder given the city’s history as a bastion of animal rights. From supermarkets that sell a whole range of exciting vegan dishes and treats, to quirky and cool restaurants that are not just vegan-friendly,</p>
                <a className="pt-8 flex items-center space-x-3" href="/"><span className="text-gray-800 font-bold text-xs">READ MORE</span>
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
          </svg></a>
                
            </div>
            <div style={{zIndex:-1}} className="absolute -top-40 -left-44">
                <h1 className="font-bold text-xlg text-gray-100">es</h1>
            </div>
        
        </div>
    )
}

export default HorizontalDescription
