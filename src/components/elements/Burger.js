import React from 'react';
import { bool, func } from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Burger({open, setOpen}) {
  return (
    <div>
      {open ? 
        <CloseIcon className="tesla-header__icon" open={open} onClick={() => setOpen(!open)}/> : 
        <MenuIcon className="tesla-header__icon" open={open} onClick={() => setOpen(!open)}/>}
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Burger
