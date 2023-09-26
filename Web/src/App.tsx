import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path={'/cadastro'} component={Cadastro}/>
        <Route path={'/login'} component={Login}/> */}
        <Route path={'/home'} component={Home}/>
        <Route path={'/perfil'} component={Profile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
