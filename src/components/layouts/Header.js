import React from 'react';
import { modelsData } from '../../mock/data';
import Logo from '../../images/tesla.png';

const menu = modelsData.map(menuItem =>
    <li>{menuItem.menu}</li>
);

function Header() {
  return (
    <div className="tesla-header">
      <div className="tesla-header__logo">
        <img src={Logo} alt="tesla-logo" />
      </div>
      <nav className="tesla-header__models">
        <ul className="tesla-header__models-list">
          {menu}
        </ul>
      </nav>
    </div>
  )
}

export default Header
