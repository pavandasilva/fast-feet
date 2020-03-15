import React from 'react';
import { Container, MenuItem } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  const menuItems = [
    { to: '/', text: 'ENCOMENDAS' },
    { to: '/', text: 'ENTREGADORES' },
    { to: '/', text: 'DESTINATÁRIOS' },
    { to: '/', text: 'PROBLEMAS' },
  ];

  return (
    <Container>
      <nav>
        <img src={logo} alt="FastFeet" />

        <ul>
          {menuItems.map(menuItem => (
            <li>
              <MenuItem to={menuItem.to}>{menuItem.text}</MenuItem>
            </li>
          ))}
        </ul>
      </nav>
      <aside>
        <span>Admin FastFeet</span>
        <span>sair do sitema</span>
      </aside>
    </Container>
  );
}
