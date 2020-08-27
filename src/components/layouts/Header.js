import React from 'react';
import { modelsData } from '../../mock/data';
import Logo from '../../images/tesla.png';
import { Link } from 'react-scroll';

const menu = modelsData.map(menuItem =>
    <li><Link
      to={menuItem.id}
      smooth={true}
      duration={600}
      spy={true}
      activeClass='active'
    >{menuItem.menu}</Link>
    </li>
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
