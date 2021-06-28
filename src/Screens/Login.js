import './Login.css'

import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const logMe = e => {
    e.preventDefault()
    if (e.target.password.value === '' || e.target.mail.value === '') {
      console.log('need username or password')
    } else {
      axios
        .post('http://localhost:3300/auth/signin', {
          password: e.target.password.value,
          mail: e.target.mail.value
        })
        .then(res => {
          if (res.data === 'Failed') {
            // setIsFailed('failed')
            console.log(res)
          } else {
            //  setIsFailed('success')
            localStorage.setItem('token', res.headers['x-access-token'])
          }
          if (e.target.password.value === '' || e.target.mail.value === '') {
            console.log('need username or password')
          } else {
            axios
              .post('http://localhost:3300/login', {
                Password: e.target.password.value,
                Mail: e.target.mail.value
              })
              .then(res => {
                if (res.data === 'Failed') {
                  //setIsFailed('failed')
                  console.log(res)
                } else {
                  // setIsFailed('success')
                  localStorage.setItem('token', res.headers['x-access-token'])
                  console.log('token', localStorage.getItem('token'))
                }
              })
          }
        })
    }
  }
  return (
    <div className='Login'>
      <div className='LoginContainer'>
        <h1> Bienvenue sur FactureMe</h1>
        <form  onSubmit={logMe}>
          <fieldset className='LoginLabel'>
            <label htmlFor='mail'>Nom</label>
            <input
              name='mail'
              className='loginInput'
              type='mail'
              placeholder='votremail@exemple.com'
            ></input>
            <label htmlFor='password'>Mot de passe</label>
            <input
              name='password'
              type='password'
              className='loginInput'
            ></input>
            <Link to='/SignIn'>
              <button className='SignIn'>Je m&apos;inscris</button>
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
export default Login
