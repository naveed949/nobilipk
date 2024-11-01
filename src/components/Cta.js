import React from 'react'
import { Link } from 'react-router-dom'
const Cta = () => {
  return (
    <div className="flex items-center justify-center w-full text-white cta">
      <div className="flex items-center w-full px-12 py-16 mx-8 text-center h-96 lg:text-left lg:justify-between">
        <div className="flex flex-col w-full lg:flex-row lg:justify-around">
          <div className="mb-4">
            <p className="mb-4 text-2xl font-bold md:text-4xl">
              Are you ready for wonders ?
            </p>
            <p className="text-lg md:text-2xl">
              Get in touch and let us build something amazing{' '}
              <span className="font-black">for you!</span>
            </p>
          </div>

          <div className="w-full pt-6 lg:w-72 lg:mx-12">
            <Link
              to="/contact"
              className="flex items-center justify-center px-10 py-3 text-center text-white bg-transparent border rounded-lg hover:bg-blue-900 hover:border-blue-800 group"
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-1 duration-500 ease-in group-hover:translate-x-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
