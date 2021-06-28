import './App.css'

import { Route, Switch } from 'react-router-dom'

import Login from './Screens/Login'
import SignIn from './Screens/SignIn'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/SignIn' component={SignIn} />
      </Switch>
    </div>
  )
}

export default App
