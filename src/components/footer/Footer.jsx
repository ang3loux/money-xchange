import React from 'react'
import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    name: 'LINKS',
    options: [
      { optionName: 'FAQ', route: '#' },
      { optionName: 'Help', route: '#' },
      { optionName: 'Support', route: '#' },
    ],
  },
  {
    name: 'LEGAL',
    options: [
      { optionName: 'Terms', route: '#' },
      { optionName: 'Privacy', route: '#' },
    ],
  },
  {
    name: 'SOCIAL',
    options: [
      { optionName: 'Facebook', route: '#' },
      { optionName: 'LinkedIn', route: '#' },
      { optionName: 'Twitter', route: '#' },
    ],
  },
  {
    name: 'COMPANY',
    options: [
      { optionName: 'Official Blog', route: '#' },
      { optionName: 'About Us', route: '#' },
      { optionName: 'Contact', route: '#' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-8 pt-10 pb-6">
        <div className="flex flex-wrap">
          {SECTIONS.map(({ name, options }) => (
            <div
              key={name}
              className="w-full md:w-1/4 text-center md:text-left"
            >
              <h5 className="uppercase mb-6 font-bold">{name}</h5>

              <ul className="mb-4">
                {options.map(({ optionName, route }) => (
                  <li key={optionName} className="mt-2">
                    <Link
                      to={route}
                      className="hover:underline text-gray-600 hover:text-orange-500"
                    >
                      {optionName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
