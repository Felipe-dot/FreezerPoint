import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import editor from '../../assets/editor.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { Header } from '../registerBook/styles'

import { Link } from 'react-router-dom'

function Profile() {
  const [data, setData] = useState([])
  const reference = useRef(null)

  useEffect(async () => {
    console.log('teste')
    const response = await api.get('/searchID')
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/Home">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm ref={reference}>
          <div>
            <h1 className="title">Perfil</h1>
            <h2>Nome</h2>
            <div className="containerName">
              <p className="nome" href="">
                {data.name}
              </p>
              <div className="icon">
                <Link to="/update">
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2>Email</h2>
            <div className="containerEmail">
              <p className="email" href="">
                {data.email}
              </p>
              <div className="icon">
                <a href="">
                  <Link to="/updateEmail">
                    <img src={editor} alt="" />
                  </Link>
                </a>
              </div>
            </div>
            <h2 id="tituloSenha">Senha</h2>
            <div className="containerSenha">
              <p className="senha" href="">
                {' '}
                ********
              </p>
              <div className="icon">
                <a href="">
                  <Link to="/updatePassword">
                    <img src={editor} alt="" />
                  </Link>
                </a>
              </div>
            </div>
            <h2 id="tituloTelefone">Telefone</h2>
            <div className="containerTelefone">
              <p className="telefone" href="">
                {data.phone}
              </p>
              <div className="icon">
                <a href="">
                  <Link to="/updatePhone">
                    <img src={editor} alt="" />
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default Profile
