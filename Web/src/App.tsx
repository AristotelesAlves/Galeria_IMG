import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import { Home } from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={'/cadastro'} component={Cadastro}/>
        <Route path={'/login'} component={Login}/> */}
        <Route path={'/'} component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
