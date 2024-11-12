import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import { useDocTitle } from '../components/CustomHook'

const Contact = () => {
  useDocTitle('JQTraders | Contact Us')

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="contact"
        className="flex items-center justify-center w-full py-12 mt-8 bg-white lg:py-24 "
      >
        <div
          className="container px-4 mx-auto my-8 lg:px-20"
          data-aos="zoom-in"
        >
          <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl">
            <div className="flex">
              <h1 className="text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Our Location
              </h1>
            </div>
            <div className="mt-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3326.1761481440562!2d73.14339727569391!3d33.52280557336095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMxJzIyLjEiTiA3M8KwMDgnNDUuNSJF!5e0!3m2!1sen!2s!4v1730425919409!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 1 }}
                allowFullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
          <div className="w-full px-8 py-6 ml-auto bg-blue-900 lg:-mt-96 lg:w-2/6 rounded-2xl">
            <div className="flex flex-col text-white">
              <div className="flex w-2/3 my-4 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="pt-2 pr-2 fas fa-map-marker-alt" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-400">
                    Gate # 2, main G.T. Rd, opposite DHA, Islamabad, Islamabad
                    Capital Territory, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex w-2/3 my-4 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="pt-2 pr-2 fas fa-phone-alt" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: (051) 6103991</p>
                  <p className="text-gray-400">Whatsapp:</p>
                  <p className="text-gray-400"> (+92) 328 2335577</p>
                  <div className="mt-5">
                    <h2 className="text-2xl">E-mail</h2>
                    <p className="text-gray-400">nobili.pk@outlook.com</p>
                  </div>
                </div>
              </div>
              <div className="flex w-2/3 my-4 lg:w-1/2">
                <a
                  href="https://www.facebook.com/profile.php?id=61560565391954"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center w-8 h-8 pt-1 mx-1 text-center text-blue-900 bg-white rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="font-black fill-current hover:animate-pulse"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
                {/* <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center w-8 h-8 pt-1 mx-1 text-center text-blue-900 bg-white rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="font-black fill-current hover:animate-pulse"
                  >
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
