import React from 'react'
import { Link } from 'react-router-dom'

const LIST = [
  {
    route: '/',
    icon:
      'https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png',
    name: 'Home',
    alt: 'Home icon',
  },
  {
    route: '/',
    icon:
      'https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png',
    name: 'Link 2',
    alt: 'Link 2 icon',
  },
  {
    route: '/',
    icon:
      'https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png',
    name: 'Link 3',
    alt: 'Link 3 icon',
  },
  {
    route: '/',
    icon:
      'https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png',
    name: 'Link 4',
    alt: 'Link 4 icon',
  },
]

const NavBar = () => {
  return (
    <nav className="w-full py-4 sm:py-6 border-b-2 sm:border-0 border-gray-200 sm:shadow-md">
      <img
        className="h-12 sm:h-16 w-12 sm:w-16 mx-auto rounded-full object-contain"
        src="https://github.com/othneildrew/Best-README-Template/raw/master/images/logo.png"
        alt="Company logo"
      />

      <ul className="flex flex-col sm:flex-row sm:justify-center mt-4 list-none">
        {LIST.map(({ route, icon, name, alt }) => (
          <li
            className="flex justify-center items-center mt-2 sm:mx-4 md:mx-6"
            key={name}
          >
            <img className="h-4 w-4" src={icon} alt={alt} />
            <Link className="pl-2 font-thin hover:font-semibold" to={route}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
