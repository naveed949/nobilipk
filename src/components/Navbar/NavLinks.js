import React from 'react'
import { HashLink } from 'react-router-hash-link'

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#home"
      >
        Home
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#products"
      >
        Products
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
      >
        About
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/contact"
      >
        Contact Us
      </HashLink>
    </>
  )
}

export default NavLinks
