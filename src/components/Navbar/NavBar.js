import React, { useState, useEffect } from 'react'
import NavLinks from '../Navbar/NavLinks'
import { HashLink } from 'react-router-hash-link'
import NobiliLogo from '../../images/nobili-logo.svg'

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY)
  const [isOpen, setisOpen] = React.useState(false)
  function handleClick() {
    setisOpen(!isOpen)
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        !top && 'bg-white shadow-lg'
      }`}
    >
      <div className="flex flex-row items-center justify-between py-2">
        <div className="flex flex-row items-center justify-center font-semibold text-center md:px-8 md:mx-8">
          <HashLink smooth to="/#home">
            <img src={NobiliLogo} alt="Nobili" className="w-40 h-20" />
          </HashLink>
        </div>
        <div className="flex flex-col items-center group">
          <button
            className="p-2 text-blue-900 rounded-lg lg:hidden"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden p-5 space-x-6 lg:inline-block">
            <NavLinks />
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
              isOpen ? 'block' : 'hidden'
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
