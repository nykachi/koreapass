/* import PageHeader from '../PageHeader/PageHeader'; */
import classes from './HotPlace.module.css';

const listTitleStyle = {
  fontWeight: 900,
  color: '#ee16ad',
  marginBottom: '0.5rem',
};

const Seoul = (
  <ul>
    <li style={listTitleStyle}>Seoul</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8%EB%AA%85%EC%86%8C%EC%B6%94%EC%B2%9C/@37.5557003,126.9685812,13.11z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8+%EC%87%BC%ED%95%91/@37.5255321,126.9444731,12.49z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%84%9C%EC%9A%B8%EB%A7%9B%EC%A7%91%EB%A6%AC%EC%8A%A4%ED%8A%B8/@37.5264558,126.9444727,12z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const Busan = (
  <ul>
    <li style={listTitleStyle}>Busan</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EB%B6%80%EC%82%B0%EB%AA%85%EC%86%8C/@35.1208298,129.046916,12z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EB%B6%80%EC%82%B0%EC%87%BC%ED%95%91/@35.1210704,129.0469159,12z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EB%B6%80%EC%82%B0%EB%A7%9B%EC%A7%91/@35.1213109,129.0469158,12z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const Jeju = (
  <ul>
    <li style={listTitleStyle}>Jeju</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%9C%EC%A3%BC%EB%AA%85%EC%86%8C/@33.3802079,126.3620329,10z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%9C%EC%A3%BC%EC%87%BC%ED%95%91/@33.3796854,126.402379,10.65z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%9C%EC%A3%BC%EB%A7%9B%EC%A7%91%EC%B6%94%EC%B2%9C/@33.4138979,126.4467829,11.41z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const GyeongGi = (
  <ul>
    <li style={listTitleStyle}>GyeongGi</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3/@37.5257653,126.8784548,10z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%EC%87%BC%ED%95%91/@37.5253379,126.8784563,10z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%EB%A7%9B%EC%A7%91/@37.5261927,126.8784532,10z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const GangWon = (
  <ul>
    <li style={listTitleStyle}>GangWon</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B0%95%EC%9B%90%EB%8F%84%EB%AA%85%EC%86%8C/@37.6890322,127.9469813,9z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B0%95%EC%9B%90%EB%8F%84%EC%87%BC%ED%95%91/@37.688554,127.9469752,9z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B0%95%EC%9B%90%EB%8F%84%EB%A7%9B%EC%A7%91/@37.6880759,127.946969,9z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const ChungBuk = (
  <ul>
    <li style={listTitleStyle}>ChungBuk</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%B6%A9%EB%B6%81%EB%AA%85%EC%86%8C/@36.7836695,127.5935941,9.73z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%B6%A9%EB%B6%81%EC%87%BC%ED%95%91/@36.6434634,127.4067888,12.17z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%B6%A9%EB%B6%81%EB%A7%9B%EC%A7%91/@36.6224503,127.3966511,11.38z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const ChungNam = (
  <ul>
    <li style={listTitleStyle}>ChungNam</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%B6%A9%EB%82%A8%EB%AA%85%EC%86%8C/@36.6549712,126.8362694,10z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%B6%A9%EB%82%A8%EC%87%BC%ED%95%91/@36.6554168,126.8362679,10z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%B6%A9%EB%82%A8%EB%A7%9B%EC%A7%91/@36.3175438,126.6569944,10.7z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const JeonBuk = (
  <ul>
    <li style={listTitleStyle}>JeonBuk</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%84%EB%9D%BC%EB%B6%81%EB%8F%84%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3/@35.7644238,126.7213584,10z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%84%EB%9D%BC%EB%B6%81%EB%8F%84%EC%87%BC%ED%95%91/@35.7661623,126.6523403,10.39z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%84%EB%9D%BC%EB%B6%81%EB%8F%84%EB%A7%9B%EC%A7%91/@35.8524905,126.8059531,11.17z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const JeonNam = (
  <ul>
    <li style={listTitleStyle}>JeonNam</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%84%EB%82%A8%EB%AA%85%EC%86%8C/@35.024791,126.7444899,9z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%84%EB%82%A8%EC%87%BC%ED%95%91/@35.0244643,126.7444835,9z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%A0%84%EB%9D%BC%EB%82%A8%EB%8F%84%EB%A7%9B%EC%A7%91/@34.8712639,126.7915087,9.57z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const GyeongBuk = (
  <ul>
    <li style={listTitleStyle}>GyeongBuk</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EB%B6%81%EB%AA%85%EC%86%8C/@36.3467244,128.4205234,9z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EC%83%81%EB%B6%81%EB%8F%84%EC%87%BC%ED%95%91%EB%AA%85%EC%86%8C/@35.8096182,129.3013268,12.32z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EB%B6%81%EB%A7%9B%EC%A7%91/@35.822262,129.2364385,12z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const GyeongNam = (
  <ul>
    <li style={listTitleStyle}>GyeongNam</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EB%82%A8%EB%AA%85%EC%86%8C/@35.2692157,128.3174684,10z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EB%82%A8%EC%87%BC%ED%95%91%EB%AA%85%EC%86%8C/@35.1621559,128.6533011,10.98z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shopping
      </a>
    </li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%EB%A7%9B%EC%A7%91/@35.2208472,128.5117445,11.62z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
      </a>
    </li>
  </ul>
);

const IslandTour = (
  <ul>
    <li style={listTitleStyle}>IslandTour</li>
    <li>
      <a
        href="https://www.google.com/maps/search/%EC%84%AC%EB%AA%85%EC%86%8C/@36.0708377,126.2491121,8.27z?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        HotPlace
      </a>
    </li>

    <li>
      <a
        href="https://www.google.com/maps/search/%EC%84%AC%EB%A7%9B%EC%A7%91/@34.9736356,125.9458552,8z/data=!3m1!4b1?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Restaurant
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

const theMostList = [
  Seoul,
  Busan,
  Jeju,
  GyeongGi,
  GangWon,
  ChungBuk,
  ChungNam,
  JeonBuk,
  JeonNam,
  GyeongBuk,
  GyeongNam,
  IslandTour,
];

const HotPlace = () => {
  return (
    <>
      <div className={classes.MostList}>
        <div className={classes.MostList} id="Mostlists">
          <h2>HotPlace in Korea</h2>
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

export default HotPlace;
