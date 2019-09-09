import React from 'react'
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'
import './styles/tailwind.css'

import Home from './routes/home'

const hist = createBrowserHistory()

const App = () => (
  <main className="h-screen w-screen flex flex-col">
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </main>
)

export default App
