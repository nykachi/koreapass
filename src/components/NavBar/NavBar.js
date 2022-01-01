
import classes from './NavBar.module.css'

const NavBar = () => {
    return ( 
        <nav classNalme={classes.NavBar}> 
            <div className={classes.logo}>
                <a href="">Koreapass</a>
            </div>
                <ul className={classes.menu}>    
                    <li>
                        <a href="/">Home</a></li>
                    <li>
                        <a href="/#about">About Me</a></li>
                    <li>
                        <a href="/skills">Skills</a></li>
                    <li>
                        <a href="/youtube">YouTube</a></li>
                    <li>
                        <a href="/contact">Contact</a></li>
                </ul>
            <div className={classes.icon}>
                <a href="">한국통</a>
            </div>
        </nav>
      );
}
 
export default NavBar; 
