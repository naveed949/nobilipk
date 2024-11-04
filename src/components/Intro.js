import React from 'react'
import img from '../images/cover.jpg'
// import p1 from '../images/clients/1.jpg'
import p2 from '../images/clients/2.jpg'
import p3 from '../images/clients/3.jpg'
import p4 from '../images/clients/4.jpg'
import p5 from '../images/clients/5.jpg'
import p6 from '../images/clients/6.jpg'
// import p7 from '../images/clients/7.jpg'
import p8 from '../images/clients/8.jpg'
// import p9 from '../images/clients/9.jpg'
import p10 from '../images/clients/10.jpg'
// import p11 from '../images/clients/11.jpg'
// import p12 from '../images/clients/12.jpg'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
      <div className="p-2 m-auto max-w-8xl md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse justify-between py-8 lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div className="flex flex-col justify-center h-full lg:w-1/2 lg:mx-4">
            <img
              alt="card img"
              className="float-right h-full rounded-t"
              src={img}
            />
          </div>
          <div
            className="flex-col w-full px-8 my-4 text-center lg:text-left lg:my-0 lg:justify-end lg:w-1/2"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl font-bold text-blue-900">
              Nobili is an Italian company specializing in the production of
              bathroom faucets and kitchen mixers
            </h3>
            <div>
              <p className="my-3 text-xl font-semibold text-gray-600">
                We're counted today among the excellences of made in Italy, the
                company began its parabola of success in the 1950s, starting
                with the initiative of Carlo Nobili, a valve and faucet dealer
                based in Borgomanero, in the province of Novara.
              </p>
            </div>

            <Link
              to="/nobilipk/contact"
              className="inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 group"
            >
              Contact us
              <svg
                className="w-4 h-4 ml-1 translate-x-2 group-hover:"
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
        <div className="flex justify-center h-full py-4 space-x-4 overflow-x-auto">
          <img
            src={p2}
            alt="Accessories"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p3}
            alt="Kitchen"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p4}
            alt="Bathroom"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p5}
            alt="Shower"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p6}
            alt="Accessories"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p10}
            alt="Kitchen"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p8}
            alt="Bathroom"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          {/* <img
            src={p9}
            alt="Shower"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p10}
            alt="Bathroom"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          />
          <img
            src={p11}
            alt="Shower"
            className="object-cover transition-transform duration-300 transform w-36 h-36 hover:scale-150"
          /> */}
        </div>
      </div>
    </>
  )
}

export default Intro
