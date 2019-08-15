import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile, Button } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Joao Gabriel</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>

          <Button>Sair</Button>
        </aside>
      </Content>
    </Container>
  );
}
