import './SignIn.css'

import axios from 'axios'
import { useState } from 'react'

const SignIn = () => {
  const [logo, setLogo] = useState('')
  const [denomination, setDenomination] = useState('')
  const [adress, setAdress] = useState('')
  const [postCode, setPostCode] = useState('')
  const [town, setTown] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [mail, setMail] = useState('')
  const [status, setStatus] = useState('')
  const [capital, setCapital] = useState('')
  const [siret, setSiret] = useState('')
  const [codeAPE, setCodeAPE] = useState('')
  const [vatNum, setVatNum] = useState('')
  const [password, setPassword] = useState('')
  const allPost = {
    Logo: logo,
    Denomination: denomination,
    Adress: adress,
    Postale_Code: postCode,
    Town: town,
    Phone: phone,
    Website: website,
    Mail: mail,
    Status: status,
    Capital: capital,
    Siret: siret,
    CodeAPE: codeAPE,
    Vat: vatNum,
    Password: password
  }

  const handleChange = e => {
    e.target.name === 'logo'
      ? setLogo(e.target.value)
      : e.target.name === 'denomination'
      ? setDenomination(e.target.value)
      : e.target.name === 'adress'
      ? setAdress(e.target.value)
      : e.target.name === 'postCode'
      ? setPostCode(e.target.value)
      : e.target.name === 'town'
      ? setTown(e.target.value)
      : e.target.name === 'phone'
      ? setPhone(e.target.value)
      : e.target.name === 'website'
      ? setWebsite(e.target.value)
      : e.target.name === 'mail'
      ? setMail(e.target.value)
      : e.target.name === 'status'
      ? setStatus(e.target.value)
      : e.target.name === 'capital'
      ? setCapital(e.target.value)
      : e.target.name === 'siret'
      ? setSiret(e.target.value)
      : e.target.name === 'codeAPE'
      ? setCodeAPE(e.target.value)
      : e.target.name === 'password'
      ? setPassword(e.target.value)
      : setVatNum(e.target.value)
  }
  const sendForm = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/account', allPost)
      .then(res => {
        console.log(`${res.data}`)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <form className='registerForm'>
        <fieldset>
          <label className='labelform'>Logo</label>
          <input
            type='blob'
            placeholder='URL de votre logo ici'
            className='inputForm'
            name='logo'
            value={logo}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Désignation</label>
          <input
            type='text'
            required
            placeholder='Nom de votre entreprise'
            className='inputForm'
            name='denomination'
            value={denomination}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Adresse</label>
          <input
            type='text'
            required
            placeholder='adresse'
            className='inputForm'
            name='adress'
            value={adress}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Code Postal</label>
          <input
            type='text'
            required
            placeholder='code postal'
            className='inputForm'
            name='postCode'
            value={postCode}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Town</label>
          <input
            type='text'
            required
            placeholder='Ville'
            className='inputForm'
            name='town'
            value={town}
            onChange={handleChange}
          ></input>
          <label className='labelform'>N° de téléphone</label>
          <input
            type='text'
            required
            placeholder='01 23 45 67 89'
            className='inputForm'
            name='phone'
            value={phone}
            onChange={handleChange}
          ></input>
          <label className='labelform'>E-Mail</label>
          <input
            type='email'
            required
            placeholder='mail@hebergeur.com'
            className='inputForm'
            name='mail'
            value={mail}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Site Web</label>
          <input
            type='url'
            placeholder='http://monsiteweb.fr'
            className='inputForm'
            name='website'
            value={website}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Status juridique</label>
          <input
            type='text'
            placeholder='EURL, SAS, SARL...'
            className='inputForm'
            name='status'
            value={status}
            onChange={handleChange}
          ></input>
          <label className='labelform'>SIRET</label>
          <input
            type='text'
            placeholder='votre N° de SIRET'
            className='inputForm'
            name='siret'
            value={siret}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Capital</label>
          <input
            type='text'
            placeholder='Montant de votre capital'
            className='inputForm'
            name='capital'
            value={capital}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Code APE</label>
          <input
            type='text'
            placeholder='N° de code APE'
            className='inputForm'
            name='codeAPE'
            value={codeAPE}
            onChange={handleChange}
          ></input>
          <label className='labelform'>N° de TVA intracommunautaire</label>
          <input
            type='text'
            placeholder=''
            className='inputForm'
            name='vatNum'
            value={vatNum}
            onChange={handleChange}
          ></input>
          <label className='labelform'>Mot de passe</label>
          <input
            type='password'
            required
            placeholder=''
            className='inputForm'
            name='password'
            value={password}
            onChange={handleChange}
          ></input>
          <div className='btnSend' type='submit' onClick={sendForm}>
            <span>Valider</span>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
export default SignIn
