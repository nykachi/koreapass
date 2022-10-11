/* import PageHeader from '../PageHeader/PageHeader'; */
import classes from './MostList001.module.css';

const listTitleStyle = {
  fontWeight: 900,
  color: '#10e8ab',
  marginBottom: '0.5rem',
};

const kPop = (
  <ul>
    <li style={listTitleStyle}>K Pop</li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=k-pop"
        target="_blank"
        rel="noopener noreferrer"
      >
        K-Pop
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%8A%B8%EB%A1%AF"
        target="_blank"
        rel="noopener noreferrer"
      >
        K-Trot
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%08%EB%9E%A9"
        target="_blank"
        rel="noopener noreferrer"
      >
        K-Rap
      </a>
    </li>

    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%93%A8%EC%A0%84%EA%B5%AD%EC%95%85"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fusion-Gugak
      </a>
    </li>
    <li>
      <a
        href="https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=1&acr=1&acq=%EA%B0%80%EC%9A%94%EC%B0%A8&qdt=0&ie=utf8&query=%EA%B0%80%EC%9A%94%EC%B0%A8%ED%8A%B8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Weekly Chart
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EA%B5%AD%EB%A6%BD%EA%B5%AD%EC%95%85%EA%B4%80%ED%98%84%EC%95%85%EB%8B%A8%2B%22%EC%A0%84%ED%86%B5%EA%B5%AD%EC%95%85%22"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gugak KTraditional
      </a>
    </li>
  </ul>
);

const kFood = (
  <ul>
    <li style={listTitleStyle}>K Food</li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=korean+food%2B%22%ED%95%9C%EC%8B%9D%22"
        target="_blank"
        rel="noopener noreferrer"
      >
        K Food
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%95%9C%EC%8B%9D%EC%9A%94%EB%A6%AC%2B%22korean+cooking%22"
        target="_blank"
        rel="noopener noreferrer"
      >
        K Cook
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/c/paikscuisine"
        target="_blank"
        rel="noopener noreferrer"
      >
        Paik's Cuisine
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/c/10000recipeTV"
        target="_blank"
        rel="noopener noreferrer"
      >
        10000,Recipes
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/channel/UC4G-G8hJrDaGHe68kYrf2ow"
        target="_blank"
        rel="noopener noreferrer"
      >
        몽실이 Cook
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/channel/UC2dDb6up1sIc-5geTvNtgHA"
        target="_blank"
        rel="noopener noreferrer"
      >
        최요비 Cook
      </a>
    </li>
  </ul>
);

const kFoodTVShow = (
  <ul>
    <li style={listTitleStyle}>FoodTVShow</li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EC%8B%9D%EA%B0%9D+%ED%97%88%EC%98%81%EB%A7%8C%EC%9D%98+%EB%B0%B1%EB%B0%98%EA%B8%B0%ED%96%89"
        target="_blank"
        rel="noopener noreferrer"
      >
        식객 백반기행
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%8C%94%EB%8F%84%EB%B0%A5%EC%83%81"
        target="_blank"
        rel="noopener noreferrer"
      >
        팔도밥상
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/c/%EB%A7%9B%EC%9E%88%EB%8A%94%EB%85%80%EC%84%9D%EB%93%A4TastyGuys"
        target="_blank"
        rel="noopener noreferrer"
      >
        맛있는 녀석들
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%B0%B1%EC%A2%85%EC%9B%90+%ED%81%B4%EB%9D%BC%EC%93%B0"
        target="_blank"
        rel="noopener noreferrer"
      >
        백종원 클라쓰
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%95%9C%EA%B5%AD%EC%9D%B8%EC%9D%98+%EC%88%A0%EC%83%81"
        target="_blank"
        rel="noopener noreferrer"
      >
        한국인의 술상
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/playlist?app=desktop&list=PLF2aEimYZTYevCmsWbW8wwmpw96UkRy-Z"
        target="_blank"
        rel="noopener noreferrer"
      >
        토요일은 밥이 좋아
      </a>
    </li>
  </ul>
);

const kCultureTVShow = (
  <ul>
    <li style={listTitleStyle}>Culture TV </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%8C%80%ED%95%9C%EC%99%B8%EA%B5%AD%EC%9D%B8"
        target="_blank"
        rel="noopener noreferrer"
      >
        대한외국인
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EC%96%B4%EC%84%9C%EC%99%80+%ED%95%9C%EA%B5%AD%EC%9D%80+%EC%B2%98%EC%9D%8C%EC%9D%B4%EC%A7%80"
        target="_blank"
        rel="noopener noreferrer"
      >
        한국은 처음?
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EA%B9%80%EC%98%81%EC%B2%A0%EC%9D%98+%EB%8F%99%EB%84%A4%ED%95%9C%EB%B0%94%ED%80%B4"
        target="_blank"
        rel="noopener noreferrer"
      >
        동네한바퀴
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%95%9C%EA%B5%AD%EA%B8%B0%ED%96%89"
        target="_blank"
        rel="noopener noreferrer"
      >
        한국기행
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/watch?v=FQh5YvHvB40&list=PLjRTrwr-UnvvA8fac2rSW-3SdspAeykpZ&ab_channel=KBSLIFE"
        target="_blank"
        rel="noopener noreferrer"
      >
        2TV 생생정보
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%8B%A4%ED%81%90%EB%A9%98%ED%84%B0%EB%A6%AC+3%EC%9D%BC"
        target="_blank"
        rel="noopener noreferrer"
      >
        다큐3일
      </a>
    </li>
  </ul>
);

const hotPlace = (
  <ul>
    <li style={listTitleStyle}>K Hot Place</li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EC%84%9C%EC%9A%B8%EB%AA%85%EC%86%8C%2B%22%EC%84%9C%EC%9A%B8%EC%97%AC%ED%96%89%22"
        target="_blank"
        rel="noopener noreferrer"
      >
        Seoul
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%B6%80%EC%82%B0%EB%AA%85%EC%86%8C%2B%22%EB%B6%80%EC%82%B0%EC%97%AC%ED%96%89%22"
        target="_blank"
        rel="noopener noreferrer"
      >
        Busan
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EC%A0%9C%EC%A3%BC%EC%97%AC%ED%96%89"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jeju Island
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EC%A7%80%EB%A6%AC%EC%82%B0%2B%22%EC%A7%80%EB%A6%AC%EC%82%B0%EB%93%B1%EC%82%B0%22"
        target="_blank"
        rel="noopener noreferrer"
      >
        Giri Mountain
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%95%9C%EB%9D%BC%EC%82%B0+%EB%93%B1%EC%82%B0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Halla Mt.,
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%ED%95%9C%EC%98%A5%EB%A7%88%EC%9D%84"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hanok Village
      </a>
    </li>
  </ul>
);

const kFunTvShow = (
  <ul>
    <li style={listTitleStyle}>K Fun TV</li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%9F%B0%EB%8B%9D%EB%A7%A8"
        target="_blank"
        rel="noopener noreferrer"
      >
        런닝맨
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%08%EB%86%80%EB%A9%B4%EB%AD%90%ED%95%98%EB%8B%88"
        target="_blank"
        rel="noopener noreferrer"
      >
        놀면뭐하니
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=1%EB%B0%952%EC%9D%BC"
        target="_blank"
        rel="noopener noreferrer"
      >
        1박2일
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%B3%B5%EB%A9%B4%EA%B0%80%EC%99%95"
        target="_blank"
        rel="noopener noreferrer"
      >
        복면가왕
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/results?search_query=%EB%82%98%EB%8F%84%EA%B0%80%EC%88%98%EB%8B%A4"
        target="_blank"
        rel="noopener noreferrer"
      >
        나도 가수다
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
