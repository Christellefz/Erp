import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'

import Login from './Screens/Login'

const App=()=> {
  return (
    <div className="App">
      <Login />
      <Switch></Switch>
    </div>
  );
}

export default App;
