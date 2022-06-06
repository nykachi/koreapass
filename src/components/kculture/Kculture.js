import classes from './Kculture.module.css';
import PageHeader from '../PageHeader/PageHeader';

import sangsang from '../../img/sangsang.png';
import koreatour from '../../img/koreatour.png';
import kimyoung from '../../img/kimyoung.png';
import docu3days from '../../img/docu3days.png';

const Kculture = () => {
  return (
    <>
      <div className={classes.Kmusic} id="kCulture">
        <PageHeader title={'K-Culture'} />
      </div>

      <div className={classes.infoAndupNext}>
        <section className={classes.info}>
          <ul>
            <li className={classes.item}>
              <div className={classes.img}>
                <a
                  href="https://www.youtube.com/c/KBS%EC%83%9D%EC%83%9D%EC%A0%95%EB%B3%B4/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sangsang} className={classes.sangsang} alt="" />
                </a>
                <span className={classes.title}>
                  This Week K-Cultule New and Fun ... By KBS2TV.
                </span>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.google.com/search?q=%ED%95%9C%EA%B5%AD%EA%B8%B0%ED%96%89&rlz=1C5CHFA_enUS984US984&oq=%ED%95%9C%EA%B5%AD%EA%B8%B0%ED%96%89&aqs=chrome..69i57j46i512j0i512l2j46i512j0i512l5.4059j0j15&sourceid=chrome&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={koreatour} className={classes.koreatour} alt="" />
                </a>
                <span className={classes.title}>
                  This Week Beautiful and Cool Korean Country .
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
                  href="https://www.google.com/search?q=%EA%B9%80%EC%98%81%EC%B2%A0%EC%9D%98+%EB%8F%99%EB%84%A4%ED%95%9C%EB%B0%94%ED%80%B4&rlz=1C5CHFA_enUS984US984&sxsrf=ALiCzsZQv9akMomqzXFdyQ7Y53Q6Ungvjg%3A1654528846257&ei=ThueYtGUD7TMwbkP-em5yAE&ved=0ahUKEwjR85qhkJn4AhU0ZjABHfl0DhkQ4dUDCA8&oq=%EA%B9%80%EC%98%81%EC%B2%A0%EC%9D%98+%EB%8F%99%EB%84%A4%ED%95%9C%EB%B0%94%ED%80%B4&gs_lcp=Cgdnd3Mtd2l6EAxKBAhBGABKBAhGGABQAFgAYABoAHABeACAAQCIAQCSAQCYAQA&sclient=gws-wiz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kimyoung} className={classes.kimyoung} alt="" />
                </a>
                <span className={classes.title}>
                  A walk arround the Neighborhood koreatown
                </span>
              </div>
              <div className={classes.img}>
                <a
                  href="https://www.google.com/search?q=%EB%8B%A4%ED%81%90%EB%A9%98%ED%84%B0%EB%A6%AC+3%EC%9D%BC&rlz=1C5CHFA_enUS984US984&sxsrf=ALiCzsbwk_t4XZW5maFQR8XaNVjbVUAAaA%3A1654528940416&ei=rBueYt75GOrNwbkP3bqGsAM&gs_ssp=eJwBJQDa_woLL2cvMTIxNG1neXcwAUoU64uk7YGQ66mY7YSw66asIDPsnbwBDREw&oq=%EB%8B%A4%ED%81%90%EB%A9%98%ED%84%B0%EB%A6%AC&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCC4QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIECAAQQzoLCC4QgAQQxwEQ0QM6CwguEIAEEMcBEK8BOgoIABCABBCHAhAUOggILhCABBDUAjoHCAAQgAQQCkoECEEYAEoECEYYAFAAWIRfYO9saARwAHgBgAGAAYgB3giSAQQxMy4xmAEAoAEBwAEB&sclient=gws-wiz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={docu3days} className={classes.docu3days} alt="" />
                </a>
                <span className={classes.title}>
                  Special Documentary 3 Days in koreatown.
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Kculture;
