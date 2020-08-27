import React, { useState, useEffect } from 'react';
import { modelsData } from '../../mock/data';
import Burger from '../elements/Burger';
import MobileMenu from '../elements/MobileMenu';
import Logo from '../../images/tesla.png';
import { Link } from 'react-scroll';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div className="tesla-header">
      <div className="tesla-header__logo">
        <img src={Logo} alt="tesla-logo" />
      </div>
      <nav className="tesla-header__models">
        <ul className="tesla-header__models-list">
        {modelsData.map((menuItem) => (
          <li>
            <Link
            to={menuItem.id}
            smooth={true}
            duration={600}
            spy={true}
            activeClass='active'>
              {menuItem.menu}
            </Link>
        </li>
        ))}
        </ul>
      </nav>
      <Burger open={open} setOpen={setOpen} />
    </div>
     <MobileMenu open={open} setOpen={setOpen} />
   </div>
  )
}

export default Header
