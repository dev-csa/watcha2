import React, {Component} from 'react';
import {createStore} from 'redux';

const btnScissor = document.getElementById("ss");
const btnRock = document.getElementById("rr");
const btnPaper = document.getElementById("pp");
// const btn = document.querySelectorAll("button");
const ul = document.querySelector("ul");
const myScore = document.querySelector(".myscore");
const computerScreen = document.querySelector(".computer");
const timer = document.querySelector(".timer");
const btnStart = document.querySelector(".btnStart");
const btnEnd = document.querySelector(".btnEnd");
const inputGame = document.querySelector(".inputGame");
btnScissor.disabled = true;
btnRock.disabled = true;
btnPaper.disabled = true;

const WIN = "WIN";
const LOSE = "LOSE";
const DRAW = "DRAW";
const COMPUTER = "COMPUTER";
const RESET = "RESET";

// 상태값 초기화 
const initialState = {
    score: 0,
    count: 0,
    win: 0,
    draw: 0,
    computers: '',
}

const winGame = function(){
    return { type: WIN }
}
const loseGame = function(){
    return { type: LOSE }
}
const drawGame = function(){
    return { type: DRAW }
}
const comGame = function(computers){
    return { type: COMPUTER, computers}
}

let nGame = '';
const gameStart = function(){
    scoreReset()
    nGame = inputGame.value;
    if(nGame == ''){
        nGame = 5;
    }
    btnScissor.disabled = false;
    btnRock.disabled = false;
    btnPaper.disabled = false;
    timer.textContent = nGame + "판 승부 시작!"
}

const gameEnd = function(){
    const result = store.getState();
    myScore.textContent = "게임 종료! "+ result.count +"판 중 " + result.win+ "승(" + result.draw + "무)을 거둬 획득한 점수: " + result.score;
    btnScissor.disabled = true;
    btnRock.disabled = true;
    btnPaper.disabled = true;
    timer.textContent = "판 수를 입력하고 게임을 다시 시작하세요!";
}


export const reducer = (state=initialState, action) => {
    // console.log(action);
    switch(action.type){
        case WIN:
            return {...state, score: state.score + 1, count: state.count + 1, win: state.win + 1};
        case LOSE:
            return {...state, score: state.score - 1, count: state.count + 1};
        case DRAW:
            return {...state, score: state.score, count: state.count + 1, draw: state.draw + 1};
        case COMPUTER:
            return {...state, computers: action.computers};
        case RESET:
            return state = initialState;
        default:
            return state;
    }
}
const store = createStore(reducer);


// setInterval(store.dispatch({type:LOSE}), 5000);

const arrayRSP = ['ss', 'rr', 'pp']; //ss:가위 rr:바위 pp:보
const computerRSP = function(){
    const random = Math.floor(Math.random()*3);
    const com = arrayRSP[random];
    return com;
}

const scoreReset = function(){
    store.dispatch({type: RESET});
}
const showResult = function(){
    const result = store.getState();
    let whatcom = result.computers;
    if(whatcom === "ss"){
        whatcom = "가위";
    }else if(whatcom === "rr"){
        whatcom = "바위";
    }else if(whatcom === "pp"){
        whatcom = "보";
    }
    if(parseInt(nGame) === result.count){
        gameEnd()
    
    }else if(parseInt(nGame) < result.count){
        alert(nGame + '판 종료되었습니다. 판 수를 다시 입력하고 게임을 시작하세요!')
        gameEnd()

    }else{
        myScore.textContent = "총 "+ result.count +"게임 중 현재 점수: " + result.score;
        computerScreen.textContent = "컴퓨터: " + whatcom
    }
}

store.subscribe(showResult);

const onSubmit = function(e){
    e.preventDefault();
    const result = store.getState();
    const mine = e.target.id;
    const computers = computerRSP();
    store.dispatch(comGame(computers));
    if(mine === computers){
        store.dispatch(drawGame());
    }else{
        if(mine+computers === "sspp"){
            store.dispatch(winGame());
        }if(mine+computers === "rrss"){
            store.dispatch(winGame());
        }if(mine+computers === "pprr"){
            store.dispatch(winGame());
        }if(mine+computers === "ssrr"){
            store.dispatch(loseGame());
        }if(mine+computers === "rrpp"){
            store.dispatch(loseGame());
        }if(mine+computers === "ppss"){
            store.dispatch(loseGame());
        }
    }
    showResult();
}

btnScissor.addEventListener("click", onSubmit);
btnRock.addEventListener("click", onSubmit);
btnPaper.addEventListener("click", onSubmit);
btnStart.addEventListener("click", gameStart);
btnEnd.addEventListener("click", gameEnd);