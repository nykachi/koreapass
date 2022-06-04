import classes from './Kfood.module.css';
import PageHeader from '../PageHeader/PageHeader';
import backclass from '../../img/backclass.png';
import koreabab from '../../img/koreabab.png';
import tasteguy from '../../img/tasteguy.png';
import sikgak from '../../img/sikgak.png';

const Kmusic001 = () => {
  return (
    <>
      <div className={classes.Kmusic} id="kmusic">
        <PageHeader title={'K-Food'} />
      </div>

      <div className={classes.infoAndupNext}>
        <section className={classes.info}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EB%B0%B1%EC%A2%85%EC%9B%90+%ED%81%B4%EB%9D%BC%EC%93%B0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={backclass} className={classes.backclass} alt="" />
                </a>
              </div>
              <div className={classes.info}>
                <span className={classes.title}>
                  This Week K-Pop Chart in Mnet.
                </span>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%ED%95%9C%EA%B5%AD%EC%9D%B8%EC%9D%98+%EB%B0%A5%EC%83%81"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={koreabab} className={classes.koreabab} alt="" />
                </a>
              </div>
              <div className={classes.info}>
                <span className={classes.title}>
                  This Week K-Pop Chart in Mnet.
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
                  href="https://www.youtube.com/results?search_query=%EB%A7%9B%EC%9E%88%EB%8A%94+%EB%85%80%EC%84%9D%EB%93%A4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tasteguy} className={classes.tasteguy} alt="" />
                </a>
              </div>
              <div className={classes.info}>
                <span className={classes.title}>
                  This Week K-Pop Chart in Mnet.
                </span>
              </div>
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=%EC%8B%9D%EA%B0%9D+%ED%97%88%EC%98%81%EB%A7%8C%EC%9D%98+%EB%B0%B1%EB%B0%98%EA%B8%B0%ED%96%89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sikgak} className={classes.sikgak} alt="" />
                </a>
              </div>
              <div className={classes.info}>
                <span className={classes.title}>
                  This Week K-Pop Chart in Mnet.
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Kmusic001;
