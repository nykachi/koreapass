/* import PageHeader from '../PageHeader/PageHeader'; */
import classes from './Ktv.module.css';

const listTitleStyle = {
  fontWeight: 900,
  color: '#10e8ab',
  marginBottom: '0.5rem',
};

const kTvOne = (
  <ul>
    <li style={listTitleStyle}>K TV List 1</li>
    <li>
      <a
        href=" https://ktownstory.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ktownstory TV
      </a>
    </li>
    <li>
      <a
        href="https://dongyoungsang.club/"
        target="_blank"
        rel="noopener noreferrer"
      >
        동영상클럽
      </a>
    </li>

    {/* <li>
      <a href="https://yepdrama.com/" target="_blank" rel="noopener noreferrer">
        Asian Drama Movies
      </a>
    </li> */}
    <li>
      <a
        href="https://www.techworm.net/2018/12/best-websites-download-korean-dramas-free.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        18 Best K-TV Links
      </a>
    </li>
  </ul>
);

const kTvTwo = (
  <ul>
    <li style={listTitleStyle}>K TV List 2</li>

    <li>
      <a
        href="https://a28.koreanz.xyz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Koreanz
      </a>
    </li>
    <li>
      <a
        href="https://www.kiwidisk.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kiwi Disk
      </a>
    </li>
    <li>
      <a
        href="https://www.somsatangv.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Somsatang TV
      </a>
    </li>
  </ul>
);

/*
const kSports = (
  <ul>
    <li>TaeKwonDo</li>
    <li>씨름 'ssireum'</li>
    <li>BullFighting</li>
  </ul>
); */

const theMostList = [kTvOne, kTvTwo];

const Ktv = () => {
  return (
    <>
      <div className={classes.MostList}>
        <div className={classes.MostList} id="ktv">
          <h2>K-TV Watch Free or Paid</h2>
        </div>
        <div className={classes.Container}>
          {theMostList.map((MostList) => {
            return <div className={classes.List}>{MostList}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Ktv;
