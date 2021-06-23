import './Login.css'

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
        <button className='SignIn'>Je m'inscris</button>
      </div>
    </div>
  )
}
export default Login
