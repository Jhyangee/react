/* eslint-disable*/
import React, { useState } from 'react'; //react에 있는 내장함수ㄹ 하나 쓰ㅆㅡ니.
import logo from './logo.svg';
import './App.css';

function App() {
  // 변수에 값 담기 
  let posts = "react class"
  // 이자리에는 array [a,b]
  let [a,b] = useState(' 남자 코트 추천'); 
  // a=기존 데이터 , b= 변경할 데이터 
  let [c,d] = useState(' 남자 코트 추천1'); 
  let [e,f] = useState(' 남자 코트 추천2'); 
  // sate 여러개 담을 수 있고 object도 담을 수 있다 
  let [title,chgtitle] = useState( ['react_class1','react_class2','react_class3']); 
  // state 변경 함수 사용하기 
  let[good, chggood] = useState(0); // 숫자 넣을 수 있음 0으로 good 초기값 설정

  //함수 만들기 
  function changeTitle(){
     chgtitle(['title1,title2,title3']);  //sate를 완전히 대체해주는 함수 , arrya넣을 수 있음 
  }
  function changeTitle1(){
    //var newArray = title[0] =1234; 불가능 
    //var newArray = title; array object 자료형을 array에 그대로 복사하면 안됨, 값공유임 , referencedatatype
    var newArray = [...title] ; 
    //deepcopy로 수정 필요
    //deepcopy : 값 공유하지 않고 서로 독립적인 값을 가지고 복사한다.
    // ... : 중괄호 대괄호를 지운다 
    // 리액트 대원칙 : immutable data 
    newArray[0] = 'title1';
    chgtitle(newArray);
 }
 
  return (
    <div className="App">
      <div className = "black-nav">
        <div> 개발 blog</div>
      </div>
      <div classNmae = "list">
        <h3> {posts} </h3>  
        <p> 2021.11.26</p>
        <hr/>
      </div>
      <div classNmae = "list">
        <h3> {a} </h3>  
        <p> 20201.11.27</p>
        <hr/>
      </div>
      <div classNmae = "list">
        <h3> {title} </h3>  
        <p> 2021.11.28</p>
        <hr/>
      </div>
      <div classNmae = "list">
        <h3> {title[0]} <span onClick={ ()=>{ console.log(1) } }>😘</span>0</h3> 
        <p> 2021.11.29</p>
        <hr/>
      </div>
      <div classNmae = "list">
        <h3> {title[1]} <span onClick={ ()=>{chggood(good+1)} }>😘</span>{good}</h3>  
        <p> 2021.11.30</p>
        <hr/>
      </div>
      <div classNmae = "list">
        <h3> {title[2]} <span>☹️</span> </h3> 
        <p> 2021.12.01</p>
        <hr/>
      </div>
      
      <button onClick={changeTitle}> button1 </button>
      <button onClick={changeTitle1}> button2 </button>
      
      <div classNmae = "modal">
        <h2>Title1</h2>
        <p>date</p>
        <p>상세내용</p>
      </div>
      
      <Modal1></Modal1>
      <Modal1 />
      <Modal2 />
      </div>
  );
  //return 태그 안에는 하나의 html 태그가 열고 닫고 끝나야한다
  // 그러므로 여러개의 div가 형성될 수 없다 
  /*   return{
       <div></div>
       <div></div>
       <div></div>
     }
  */
}

//Modal 이라는 Componet 만들기 
//1. 함수를 만들고 이름을 짓고 
//2. 원하는 html을 넣고 
//3. 원하는 곳에서 <함수명 /> 
function Modal1(){ // 이름짓기
  return( //원하는 html 담기 
  <div classNmae = "modal">
    <h2>Title2</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}
function Modal2(){ // 이름짓기
    return( //원하는 html 담기 
    //flagment라는 문법
    <>
      <h2>Title3</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </>
    )  
}
export default App;
