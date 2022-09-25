import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={classes.footer}>
        <p>
          ** 안녕하세요. 웹사이트 만들고 있는 당사자 입니다.
          <br />
          첫째: 이 웹사이트는 외국인에게 좀더 한국을 알리기위해 만들고 있는
          곳입니다.
          <br />
          둘째: 치매 안 걸릴려고 퇴근 후 뇌운동 삼아 코딩 배우면서 연습장 처럼
          놀고 있는 제 놀이터 입니다.
          <br />
          셋째: 나름 , 알리고 싶어 유튜브에 방송화면 캡쳐해서 올리고 있는데,
          방송관계자 여러분 쪼메 봐주시길 바랍니다. 웹사이트를 보시면, 여러분
          회사 페이지로 좀더 쉽게 가도록 안내하고 있으니 나쁘게 보지 말아
          주세요.
          <br />
          미국에 30년 살다보니 뭐좀 애국 할 것이 없나 생각하다. 이짓을
          하고있습니다. 이해해 주세요. 감사합니다.
          <br />
          행복하세요. 여러분 ...
        </p>
      </div>
    </div>
  );
};

export default Footer;
