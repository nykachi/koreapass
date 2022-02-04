import classes from './../Kmusic/Kmusic.module.css';
import korea453 from '../../img/korea453.jpg';
import bts453 from '../../img/bts453.jpg';
import tm45311 from '../../img/tm45311.jpg';
import jar453 from '../../img/jar453.jpg';
import tm4533 from '../../img/tm4533.jpg';
import tm4537 from '../../img/tm4537.jpg';
import busan453 from '../../img/busan453.jpg';

import tm4531 from '../../img/tm4531.jpg';
import PageHeader from '../PageHeader/PageHeader';

const Home001 = () => {
  return (
    <>
      <div className={classes.Kmusic} id="home">
        <PageHeader title={'Most popular'} />
      </div>

      <div className={classes.infoAndupNext}>
        <section className={classes.info}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                <p className={classes.tt}>
                  K-Pop , Korea Music
                  <br />
                  한국 대중가요 뮤직비디오
                </p>
              </div>

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
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=%EA%B0%80%EC%9A%94%EC%B0%A8&qdt=0&ie=utf8&query=%EA%B0%80%EC%9A%94%EC%B0%A8%ED%8A%B8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tm4531} className={classes.tm4531} alt="" />
                </a>
                <p className={classes.tt}>
                  Korea Weekly Music Chart.
                  <br />
                  한국 가요 주간 순위 차트
                </p>
              </div>

              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%ED%95%9C%EC%8B%9D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={jar453} className={classes.jar453} alt="" />
                </a>
                <p className={classes.tt}>
                  K-Food
                  <br />
                  한국음식, 대중음식, 한식
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
                  href="https://www.youtube.com/results?search_query=%EC%84%9C%EC%9A%B8%EB%AA%85%EC%86%8C"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tm4537} className={classes.tm4537} alt="" />
                </a>
                <p className={classes.tt}>
                  Seoul Hot Place.
                  <br />
                  서울의 가볼만한 곳 , 핫 플레이스
                </p>
              </div>

              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EB%B6%80%EC%82%B0%EB%AA%85%EC%86%8C"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={busan453} className={classes.busan453} alt="" />
                </a>
                <p className={classes.tt}>
                  Busan Tour Hot Place.
                  <br />
                  부산의 명소 가볼만 한 곳
                </p>
              </div>
            </li>

            <li className={classes.item}>
              <div class={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EC%97%B0%EC%86%8D%EA%B7%B9%EB%8B%A4%EC%8B%9C%EB%B3%B4%EA%B8%B0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tm45311} className={classes.tm45311} alt="" />
                </a>
                <p className={classes.tt}>
                  K-Drama , K-Culture
                  <br />
                  한국 드라마 , 한국 문화
                </p>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=korea+tour+guide"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={tm4533} className={classes.tm4533} alt="" />
                </a>
                <p className={classes.tt}>
                  Korea Tour Guide.
                  <br />
                  한국여행 가이드 영상모음
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