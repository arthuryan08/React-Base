import React from 'react';
import { Container } from '../../styles/GlobalStyles'
import { Title, Paragrafo } from './styled'

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