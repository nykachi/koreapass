import classes from './NavBar.module.css';

const NavLinks = (props) => {
  return (
    <>
      <nav className={classes.NavBar}>
        <div className={classes.logo}>
          <a href="/">Koreapass</a>
        </div>

        <ul className={classes.menu}>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#Mostlists">K-MostList</a>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#ktv">K-TV</a>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#kent">K-Ent,</a>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#kmusic">K-Music</a>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#kFood">K-Food</a>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#kCulture">K-Culture</a>
          </li>
          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#hotplace">Hot-place</a>
          </li>

          <li onClick={() => props.isMobile && props.closeMobileMenu()}>
            <a href="/#kGuide">K-Others</a>
          </li>
        </ul>

        <div className={classes.icon}>
          <a href="/">한국통</a>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
