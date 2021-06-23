import './Login.css'

import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='Login'>
      <div className='LoginContainer'>
        <h1> Bienvenue sur FactureMe</h1>
        <label className='LoginLabel'>
          Nom
          <input type='text'></input>
        </label>
        <label className='LoginLabel'>
          Mot de passe
          <input type='text'></input>
        </label>
        <Link to='/SignIn'>
        <button className='SignIn'>Je m'inscris</button>
        </Link>
      </div>
    </div>
  )
}
export default Login
