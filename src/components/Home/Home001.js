import classes from './../Kmusic/Kmusic.module.css';

import bts453 from '../../img/bts453.jpg';
import tm45311 from '../../img/tm45311.jpg';

import fourthingsplay from '../../img/fourthingsplay.png';
import chang from '../../img/chang.png';
import tkd from '../../img/tkd.png';
import gugakorche from '../../img/gugakorche.png';
import icnairport from '../../img/icnairport.png';
import simkorea from '../../img/simkorea.png';

import PageHeader from '../PageHeader/PageHeader';

const Home001 = () => {
  return (
    <>
      <div className={classes.Kmusic} id="home">
        <PageHeader title={'Some others'} />
      </div>

      <div className={classes.infoAndupNext}>
        <section className={classes.info}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=bts"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={bts453} className={classes.bts453} alt="" />
                </a>
                <p className={classes.tt}>
                  BTS Music Video
                  <br />
                  한인그룹 BTS 뮤직비디오
                </p>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EC%82%AC%EB%AC%BC%EB%86%80%EC%9D%B4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={fourthingsplay}
                    className={classes.fourthingsplay}
                    alt=""
                  />
                </a>
                <p className={classes.tt}>
                  Samulnori, K Traditional
                  <br />
                  Percussion Quartet
                </p>
              </div>
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EA%B5%AD%EC%95%85%2B%22%EC%B0%BD%22"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={chang} className={classes.chang} alt="" />
                </a>
                <p className={classes.tt}>
                  Gukak, Korean classical.
                  <br />
                  chang, K Traditional Song
                </p>
              </div>

              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EA%B5%AD%EB%A6%BD%EA%B5%AD%EC%95%85%EA%B4%80%ED%98%84%EC%95%85%EB%8B%A8%2B%22%EA%B5%AD%EC%95%85%EA%B4%80%ED%98%84%EC%95%85%EB%8B%A8%22"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={gugakorche} className={classes.gugakorche} alt="" />
                </a>
                <p className={classes.tt}>
                  The National Gugak Orchestra.
                  <br />
                  국림국악관현악단. 국악
                </p>
              </div>
            </li>
          </ul>
        </section>
        /* Next */
        <section className={classes.upNext}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%ED%83%9C%EA%B6%8C%EB%8F%84"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tkd} className={classes.tkd} alt="" />
                </a>
                <p className={classes.tt}>
                  Tae Kwon Do.
                  <br />
                  태권도 , K Martial arts
                </p>
              </div>

              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=korea+tour+guide"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tm45311} className={classes.tm45311} alt="" />
                </a>
                <p className={classes.tt}>
                  Korea Tour Guide
                  <br />
                  한국여행 가이드, 안내
                </p>
              </div>
            </li>

            <li className={classes.item}>
              <div class={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=how+to+get+from+incheon+airport+to+seoul+"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={icnairport} className={classes.icnairport} alt="" />
                </a>
                <p className={classes.tt}>
                  How to ... Inchen to Seoul
                  <br />
                  Airport to Seoul.
                </p>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=sim+cart+in+inchen+airport"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={simkorea} className={classes.simkorea} alt="" />
                </a>
                <p className={classes.tt}>
                  How to get SIM Card.
                  <br />
                  Get SIM Card in Airport
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home001;
