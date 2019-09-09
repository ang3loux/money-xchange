import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import icons from '../../assets/icons'

const LIST = [
  {
    route: '/',
    icon: icons.home,
    name: 'Home',
    alt: 'Home icon',
  },
  {
    route: '/',
    icon: icons.blog,
    name: 'Blog',
    alt: 'Blog icon',
  },
  {
    route: '/',
    icon: icons.resources,
    name: 'Resources',
    alt: 'Resources icon',
  },
  {
    route: '/',
    icon: icons.services,
    name: 'Services',
    alt: 'Services icon',
  },
]

const NavBar = () => {
  return (
    <nav className="w-full py-4 sm:py-6 border-b-2 sm:border-0 border-gray-200 sm:shadow-md bg-blue-600">
      <img
        className="h-24 sm:h-32 w-24 sm:w-32 mx-auto rounded-full object-contain"
        src={images.logo}
        alt="Company logo"
      />

      <ul className="flex flex-col sm:flex-row sm:justify-center mt-4 list-none">
        {LIST.map(({ route, icon, name, alt }) => (
          <li
            className="flex justify-center items-center mt-2 sm:mx-4 md:mx-6"
            key={name}
          >
            <img className="h-4 w-4" src={icon} alt={alt} />
            <Link
              className="pl-2 font-thin text-white hover:text-gray-400"
              to={route}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
