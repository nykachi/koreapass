/*import PageHeader from '../PageHeader/PageHeader';*/
import classes from './MostList.module.css';

const listTitleStyle = {
  fontWeight: 900,
  color: '#9B1FE8',
  marginBottom: '0.5rem',
};

const kPop = (
  <ul>
    <li style={listTitleStyle}>K Pop</li>
    <li>K-Pop</li>
    <li>K-Trot</li>
    <li>K-Rap</li>

    <li>Fusion-Gugak</li>
    <li>Weekly Chart</li>
    <li>Gugak'K-Traditional-Music'</li>
  </ul>
);

const kFood = (
  <ul>
    <li style={listTitleStyle}>K Food</li>
    <li>K Food</li>
    <li>K Cook</li>
    <li>Paik's Cuisine</li>
    <li>10000 Recipes</li>
    <li>몽실이 Cook</li>
    <li>최요비 Cook</li>
  </ul>
);

const kFoodTVShow = (
  <ul>
    <li style={listTitleStyle}>FoodTVShow</li>
    <li>식객 백반기행</li>
    <li>팔도밥상</li>
    <li>맛있는 녀석들</li>
    <li>백종원 클라쓰</li>
  </ul>
);

const kCultureTVShow = (
  <ul>
    <li style={listTitleStyle}>Culture TV </li>
    <li>대한외국인</li>
    <li>한국은 처음?</li>
    <li>동네한바퀴</li>
    <li>한국기행</li>
    <li>2TV 생생정보</li>
    <li>다큐3일</li>
  </ul>
);

const hotPlace = (
  <ul>
    <li style={listTitleStyle}>K Hot Place</li>
    <li>Seoul</li>
    <li>Busan</li>
    <li>Jeju</li>
    <li>Giri Mt</li>
    <li>Halla Mt</li>
    <li>한옥 Village</li>
  </ul>
);

const kFunTvShow = (
  <ul>
    <li style={listTitleStyle}>K Fun TV</li>
    <li>런닝맨</li>
    <li>놀면뭐하니</li>
    <li>1박2일</li>
    <li>복면가왕</li>
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
  kPop,
  kFood,
  kFoodTVShow,
  kCultureTVShow,
  hotPlace,
  kFunTvShow,
];

const MostList = () => {
  return (
    <>
      <div className={classes.MostList}>
        <div className={classes.MostList} id="Mostlists">
          <h2>Most of The Lists</h2>
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

export default MostList;
