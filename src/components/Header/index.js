import React from 'react';

import Logo from '../../assets/logo.png';
import { HeaderContainer } from './styles';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <header>
          <img src={Logo} alt="Breaking bad" />
        </header>
      </HeaderContainer>
    </>
  );
}
