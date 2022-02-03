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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#kmusic">K-Music</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#youtube">YouTube</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
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
