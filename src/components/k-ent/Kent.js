import classes from './../Kmusic/Kmusic.module.css';

import daehan from '../../img/daehan.png';
import firsttimekorea from '../../img/firsttimekorea.png';
import runningman from '../../img/runningman.png';
import onenighttwoday from '../../img/onenighttwoday.png';
import nolmyun from '../../img/nolmyun.png';
import maskedsong from '../../img/maskedsong.png';
import youheyeul from '../../img/youheyeul.png';
import sbsingeegayo from '../../img/sbsingeegayo.png';

import PageHeader from '../PageHeader/PageHeader';

const Kent = () => {
  return (
    <>
      <div className={classes.Kmusic} id="kent">
        <PageHeader title={'k-Entertainment'} />
      </div>

      <div className={classes.infoAndupNext}>
        <section className={classes.info}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EB%8C%80%ED%95%9C%EC%99%B8%EA%B5%AD%EC%9D%B8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={daehan} className={classes.daehan} alt="" />
                </a>
                <p className={classes.tt}>
                  South Korean Foreigners
                  <br />
                  대한외국인
                </p>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EC%96%B4%EC%84%9C%EC%99%80+%ED%95%9C%EA%B5%AD%EC%9D%80+%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={firsttimekorea}
                    className={classes.firsttimekorea}
                    alt=""
                  />
                </a>
                <p className={classes.tt}>
                  YO~! WELCOME TO KOREA!
                  <br />
                  어서와~ 한국은 처음이지 ...
                </p>
              </div>
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EB%9F%B0%EB%8B%9D%EB%A7%A8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={runningman} className={classes.runningman} alt="" />
                </a>
                <p className={classes.tt}>
                  Running Man.
                  <br />
                  런닝맨
                </p>
              </div>

              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=1%EB%B0%952%EC%9D%BC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={onenighttwoday}
                    className={classes.onenighttwoday}
                    alt=""
                  />
                </a>
                <p className={classes.tt}>
                  2 Days and 1 Night.
                  <br />
                  전국투어 1박2일.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className={classes.upNext}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EB%86%80%EB%A9%B4%EB%AD%90%ED%95%98%EB%8B%88"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={nolmyun} className={classes.nolmyun} alt="" />
                </a>
                <p className={classes.tt}>
                  How Do You Play?
                  <br />
                  놀면 뭐하니 ?
                </p>
              </div>

              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EB%B3%B5%EB%A9%B4%EA%B0%80%EC%99%95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={maskedsong} className={classes.maskedsong} alt="" />
                </a>
                <p className={classes.tt}>
                  The King of Mask Singer.
                  <br />
                  미스터리 음악쑈, 복면가왕
                </p>
              </div>
            </li>

            <li className={classes.item}>
              <div class={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EC%9C%A0%ED%9D%AC%EC%97%B4%EC%9D%98+%EC%8A%A4%EC%BC%80%EC%B9%98%EB%B6%81"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youheyeul} className={classes.youheyeul} alt="" />
                </a>
                <p className={classes.tt}>
                  Yu Huiyeol's Sketchbook.
                  <br />
                  음악쇼, 유희열의 스케치북.
                </p>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=sbs%EC%9D%B8%EA%B8%B0%EA%B0%80%EC%9A%94"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={sbsingeegayo}
                    className={classes.sbsingeegayo}
                    alt=""
                  />
                </a>
                <p className={classes.tt}>
                  SBS Inkigayo.
                  <br />
                  SBS 인기가요.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Kent;
