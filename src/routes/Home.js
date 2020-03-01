import React from "react";
import {connect} from "react-redux";
import { winGame } from "./store";
import { loseGame } from "./store";
import { drawGame } from "./store";
import { comGame } from "./store";
import { resetGame } from "./store";
import { numGame }  from "./store";



function Home({result, dispatch}){
    let nGame = '';
    const gameStart = function(e){
        scoreReset()
        nGame = e.target.previousSibling.value
        dispatch(numGame(nGame))
        if(nGame == ''){
            nGame = 5;
        }
        // btnScissor.disabled = false;
        // btnRock.disabled = false;
        // btnPaper.disabled = false;
        // timer.textContent = nGame + "판 승부 시작!"
    }
    
    const gameEnd = function(){
        // const result = store.getState();
        // myScore.textContent = "게임 종료! "+ result.count +"판 중 " + result.win+ "승(" + result.draw + "무)을 거둬 획득한 점수: " + result.score;
        // btnScissor.disabled = true;
        // btnRock.disabled = true;
        // btnPaper.disabled = true;
        // timer.textContent = "판 수를 입력하고 게임을 다시 시작하세요!";
    }
    const arrayRSP = ['ss', 'rr', 'pp']; //ss:가위 rr:바위 pp:보
    const computerRSP = function(){
        const random = Math.floor(Math.random()*3);
        const com = arrayRSP[random];
        return com;
    }
    const scoreReset = function(){
        dispatch(resetGame());
    }
    const showResult = function(){
        console.log(result);
        if(parseInt(result.num) === result.count){
            gameEnd()
        
        }else if(parseInt(result.num) < result.count){
            // alert(nGame + '판 종료되었습니다. 판 수를 다시 입력하고 게임을 시작하세요!')
            gameEnd()
    
        }else{
            // myScore.textContent = "총 "+ result.count +"게임 중 현재 점수: " + result.score;
            // computerScreen.textContent = "컴퓨터: " + whatcom
        }
    }
    function onChange(e){
        nGame = e.target.value;
        console.log(nGame);
    }
    function onSubmit(e){
        e.preventDefault();
        // console.log(result);
        // const result = store.getState();
        const mine = e.target.id;
        let computers = computerRSP();
        
        if(mine === computers){
            dispatch(drawGame());
        }else{
            if(mine+computers === "sspp"){
                dispatch(winGame());
            }if(mine+computers === "rrss"){
                dispatch(winGame());
            }if(mine+computers === "pprr"){
                dispatch(winGame());
            }if(mine+computers === "ssrr"){
                dispatch(loseGame());
            }if(mine+computers === "rrpp"){
                dispatch(loseGame());
            }if(mine+computers === "ppss"){
                dispatch(loseGame());
            }
        }
        if(computers === "rr"){
            computers = "바위";
        }else if(computers === "ss"){
            computers = "가위";
        }else if(computers === "pp"){
            computers = "보";
        }
        dispatch(comGame(computers));
        showResult();
    }

    return (
        <>
        <form>
            <h1>가위바위보 React redux</h1>
            <div><input className="inputGame" placeholder="판 수 입력 (미입력 시 5판)" onChange={onChange}/> 
            <button className="btnStart" onClick={gameStart}> 게임 시작 </button>  </div>
            <div className="timer" > </div>
            <div className="computer" > 
            Computer: {result.computers} </div>
            <button onClick={onSubmit} id="ss">가위</button>
            <button onClick={onSubmit} id="rr">바위</button>
            <button onClick={onSubmit} id="pp">보</button>
            <div className="myscore">{result.win}승 {result.draw}무 로 현재 점수는: {result.score} </div>
            <button className="btnEnd" onClick={gameEnd} > 게임 종료 </button> 
        </form>
        </>
    )
}

function mapStateToProps(state){
    return {result : state};
}

function mapDispatchToProps(dispatch){
    return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
