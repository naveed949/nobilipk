import React from 'react'
import img from '../images/products/bathroom.webp'
import img2 from '../images/products/kitchen.webp'
import img3 from '../images/products/shower.jpg'
import img4 from '../images/products/accessories.webp'

const Services = () => {
  return (
    <div id="products" className="py-12 bg-gray-100">
      <section data-aos="zoom-in-down">
        <div className="py-4 my-4">
          <h2 className="my-2 text-3xl font-bold text-center text-blue-900 uppercase">
            products
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mx-12 mt-4 text-xl font-semibold text-center text-blue-900 lg:text-2xl">
            Our catalog offers several collections that combine innovation and
            design.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
              <div className="m-2 text-sm text-justify">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="my-4 text-2xl font-semibold text-center">
                  Bathroom
                </h2>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.nobili.it/en/products/bathroom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
              <div className="m-2 text-sm text-justify">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="my-4 text-2xl font-semibold text-center">
                  Kitchen
                </h2>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.nobili.it/en/products/kitchen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
              <div className="m-2 text-sm text-justify">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="my-4 text-2xl font-semibold text-center ">
                  Wellness
                </h2>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.nobili.it/en/products/shower/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3 overflow-hidden text-gray-700 transition-all ease-in-out bg-white rounded-lg shadow-2xl duration-400 hover:bg-gray-500 hover:text-white group">
              <div className="m-2 text-sm text-justify">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="my-4 text-2xl font-semibold text-center ">
                  Accessories
                </h2>
                <div className="flex justify-center my-4">
                  <a
                    href="https://www.nobili.it/en/products/accessories/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
                <div className="max-w-6xl p-2 m-auto md:p-12 h-5/6">
                    <div className="flex flex-col-reverse justify-between py-8 lg:flex-row lg:text-left" data-aos="zoom-out">
                        <div className="flex flex-col justify-center lg:w-1/2 lg:mx-4">
                            <div className='mb-4 text-blue-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-blue-900">We <span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl font-semibold text-gray-600'>
                                    With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center lg:w-1/2 lg:mx-4">
                            <div className='mb-4 text-blue-900'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-blue-900">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl font-semibold text-gray-600'>We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </div>
  )
}

export default Services
