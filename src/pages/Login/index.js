import React, { useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles'
import { Title, Paragrafo } from './styled'

import axios from '../../services/axios'

export default function Login() {

  useEffect(()=> {
    async function getData(){
      const response = await axios.get('/alunos')
      const { data } = response;
        console.log(data)
    }

    getData()
  }, [])
  return (
    <>
    <Container>
      <Title>Login</Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button>Enviar</button>
    </Container>
    </>
  )
}