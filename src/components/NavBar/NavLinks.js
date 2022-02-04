import classes from './NavBar.module.css';

const NavLinks = () => {
  return (
    <>
      <nav className={classes.NavBar}>
        <div className={classes.logo}>
          <a href="/">Koreapass</a>
        </div>

        <ul className={classes.menu}>
          <li>
            <a href="/#Mostlists">K-MostList</a>
          </li>
          <li>
            <a href="/#kmusic">K-Music</a>
          </li>

          <li>
            <a href="/#kFood">K-Food</a>
          </li>
          <li>
            <a href="/#kCulture">Culture</a>
          </li>
          <li>
            <a href="/#hotplace">Hot-place</a>
          </li>
          <li>
            <a href="/#kTV">K-TV</a>
          </li>
          <li>
            <a href="/#kGuide">K-guide</a>
          </li>
          <li>
            <a href="/#sports">K-sports</a>
          </li>
          <li>
            <a href="/#ksocial">K-social</a>
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
