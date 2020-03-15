import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container, Card } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function SigIn() {
  return (
    <Container>
      <Card>
        <img src={logo} alt="FastFeet" />
        <Form>
          <span>SEU EMAIL</span>
          <Input type="email" name="email" placeholder="Seu Email" />
          <span>SUA SENHA</span>
          <Input type="password" name="password" placeholder="Sua Senha" />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Card>
    </Container>
  );
}
