import classes from './Kmusic.module.css';
import PageHeader from '../PageHeader/PageHeader';
import korea453 from '../../img/korea453.jpg';

const Kmusic = () => {
  return (
    <>
      <div className={classes.Kmusic} id="kmusic">
        <PageHeader title={'K-Music'} />
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
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
            </li>

            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
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
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
            </li>

            <li className={classes.item}>
              <div class={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/results?search_query=k-pop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={korea453} className={classes.korea453} alt="" />
                </a>
                대한민국 대한민국 대한민국 대한민국 대한민국 대한민국 대한민국
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Kmusic;
