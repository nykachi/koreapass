import classes from './NavBar.module.css';
import NavLinks from './NavLinks';
import { CgMenuRound } from 'react-icons/cg';
import { useState } from 'react';
import { CgCloseO } from 'react-icons/cg';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className={classes.Hamburger}
      size="2rem"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className={classes.Hamburger}
      size="2rem"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}

      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
