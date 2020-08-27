import React from 'react';
import { modelsData } from '../../mock/data';
import { Link } from 'react-scroll';
import { bool } from 'prop-types';

function MobileMenu({open, setOpen}) {
  return (
    <nav open={open} className={`tesla-header__mobile ${open && "tesla-header__mobile--open"}`}>
     <ul className="tesla-header__mobile-list">
     {modelsData.map((menuItem) => (
       <li>
         <Link
          to={menuItem.id}
          smooth={true}
          duration={600}
          spy={true}
          activeClass='active'
          onClick={() => setOpen(!open)}>
            {menuItem.menu}
          </Link>
        </li>
        ))}
     </ul>
   </nav>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu
