import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import editor from '../../assets/editor.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function BookProfile() {
  const [data, setData] = useState([])
  const referencia = useRef(null)
  // const history = useHistory()
  const { id } = useParams()

  // console.log(history)
  console.log(id)

  useEffect(async () => {
    const response = await api.get(`/buscaID/${id}`)
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
        <ContentForm ref={referencia}>
          <div>
            <h1 className="title">Perfil</h1>
            <h2>Nome</h2>
            <div className="containerName">
              <p className="nome" href="">
                {data.nome}
              </p>
              <div className="icon">
                <Link to="/update">
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2>Autor</h2>
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
            <h2 id="tituloSenha">Sinopse</h2>
            <div className="containerSenha">
              <p className="senha" href="">
                {' '}
                ********
              </p>
              <div className="icon">
                <a href="">
                  <Link to="/updateSenha">
                    <img src={editor} alt="" />
                  </Link>
                </a>
              </div>
            </div>
            {/* Fim container
             */}
            <h2 id="tituloSenha">Categoria</h2>
            <h2 id="tituloSenha">Gênero</h2>
            <h2 id="tituloSenha">Edição</h2>
          </div>
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default BookProfile
