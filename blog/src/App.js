/* eslint-disable */
// 터미널에서 문법 자잘한 교정방안 그만 보이게 해줌

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // ES6 destructuring 문법 파이썬 이랑 비슷한 방식이네
  // 각각 배열 안의 변수에 담아진다
  var [c,d] = [10, 100];

  // useState() : [state데이터, state 데이터 변경 함수] 이렇게 담아짐
  let [title, titleUpdate] = useState(['진월동 탕수육 맛집', '봄철 코트 추천', '풍암동 중화요리 맛집']);
  let [date, dateUpdate] = useState(['2월 26일', '2월 27일', '2월 28일']);
  let [s2, s2Update] = useState(0);
  let posts = '진월동 탕수육 맛집';

  function 제목바꾸기(){ // state 데이터 변경하기
    var newArray = [...title]; 
    // [...변수명]deep copy : 값공유X 서로 독립적인 값을 가지는 복사
    newArray[0] = '풍암동 탕수육 맛집';
    titleUpdate( newArray );
  }

  function 함수 (){
    return 100
  }
  let style1 = { color: 'skyblue', fontSize: '30px' } // 폰트도 변수담아서가능
  
  return ( // HTML이 아니라 JSX! // 자바스크립트임 class는 className으로 씀
    <div className="App">
      <div className="black-nav">
        {/* <div className={ posts }>개발 Blog</div> */}
        <div style={ style1 }>Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      {/* <img src={ logo } /> */}
      <div className='list'>
        <h3> { title[0] } <span onClick={ ()=>{ s2Update(s2+1) } } >❤</span> { s2 } </h3>
        <p> { date[0] } </p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[1] } </h3>
        <p> { date[1] } </p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[2] } </h3>
        <p> { date[2] } </p>
        <hr/>
      </div>
      
      {/* 함수명으로 태그 작성 */}
      <Modal />

    </div>
  );
}

function Modal() { // Component 만들기 함수를 만들고 JSX작성
  return (         // 함수명 대문자로 시작해야함!!!!
    <>
    <div>
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>      
    </div>
    </>
  );
}
// 반복출현하는 HTML 덩어리들을 Component로 만드는게 좋음
// 또는 자주 변경되는 HTML UI들 재랜더링이 자주있는 경우
// 다른 페이지를 만들때도


export default App;

// --------------------------------------------------------------------
// 데이터 바인딩
// 1. { 여기에 } : 중괄호 안에 변수, 함수 등 을 집어넣을 수 있음
// 2. 속성부여까지 가능! -> src, id, href 등등 { 변수명, 함수 등 }

// JSX에서 style 속성 집어넣을때
// 1. style은 무조건 {중괄호}
// 2. 근데 보통 className을 사용하겠지?

// 데이터 보관 방법 => useState => 자주 변경되는 중요한 데이터들에 사용
// 페이지 상단에 : import { useState } from 'react';
// useState(데이터)
// 1. state 데이터들은 갑자기 변경되면 HTML에도 알아서 변경사항이 반영됩니다 (자동 재렌더링이 됩니다)
// 2. 그러면 새로고침 없이도 HTML을 갈아치워 보여주는 웹앱같은 사이트를 만들 수 있음
//  - 그냥 변수로 담았을때는 새로고침이 필요했음
// state를 쓰는 이유 : 웹 앱처럼 동작하게 만들기 위해
