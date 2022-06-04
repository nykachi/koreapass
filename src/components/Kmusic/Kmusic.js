import classes from './Kmusic.module.css';
import PageHeader from '../PageHeader/PageHeader';

import mnetkpop from '../../img/mnetkpop.png';
import mbckpop from '../../img/mbckpop.png';
import sbskpop from '../../img/sbskpop.png';
import kbskpop from '../../img/kbskpop.png';
import starkpop from '../../img/starkpop.png';
import planetkpop from '../../img/planetkpop.png';
import ivekpop from '../../img/ivekpop.png';
import kvillekpop from '../../img/kvillekpop.png';

const Kmusic = () => {
  return (
    <>
      <div className={classes.Kmusic} id="kmusic">
        <PageHeader title={'K-Pop'} />
      </div>

      <div className={classes.infoAndupNext}>
        <section className={classes.info}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/Mnet/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mnetkpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in Mnet.
                </span>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/user/MBCkpop/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mbckpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in MBC.
                </span>
              </div>
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/SBSKPOPPLAY/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sbskpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in SBS.
                </span>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/user/KBSKpop/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kbskpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in KBS.
                </span>
              </div>
            </li>
          </ul>
        </section>

        <section className={classes.upNext}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/starshipTV/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={starkpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in Starship.
                </span>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/kpopplanethere/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={planetkpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in Planet.
                </span>
              </div>
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/IVEstarship/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ivekpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in IVE.
                </span>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/TheSongMaster/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kvillekpop} className={classes.mnetkpop} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Pop Chart in Kville.
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Kmusic;
