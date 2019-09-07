import React from 'react'
import { Route, Switch } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import Dashboard from '../modules/home/dashboard/Dashboard'

import NavBar from '../components/nav-bar/NavBar'

const rootRoutes = [
  {
    path: '',
    name: 'Dashboard',
    layout: '/',
    component: Dashboard,
  },
]

const switchRoutes = (
  <Switch>
    {rootRoutes.map(({ layout, path, component, name }) => (
      <Route path={`${layout}${path}`} component={component} key={name} exact />
    ))}
  </Switch>
)

export default function Root() {
  const {
    location: { pathname, search },
  } = useReactRouter()

  React.useEffect(() => {
    try {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [pathname, search])

  return (
    <>
      <NavBar />
      {switchRoutes}
    </>
  )
}
