import React, { useEffect } from 'react';

import { Container } from '../../styles/GlobalStyles'
import { Title, Paragrafo } from './styled'

import axios from '../../services/axios'

export default function Login() {

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