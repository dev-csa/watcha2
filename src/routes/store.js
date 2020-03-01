import {createStore} from "redux";

const WIN = "WIN";
const LOSE = "LOSE";
const DRAW = "DRAW";
const COMPUTER = "COMPUTER";
const RESET = "RESET";
const NUM = "NUM";

// 상태값 초기화 
const initialState = {
    score: 0,
    count: 0,
    win: 0,
    draw: 0,
    computers: '',
    num: 0
}


export const winGame = function(){
    return { type: WIN }
}
export const loseGame = function(){
    return { type: LOSE }
}
export const drawGame = function(){
    return { type: DRAW }
}
export const comGame = function(computers){
    return { type: COMPUTER, computers}
}
export const resetGame = function(){
    return { type: RESET}
}
export const numGame = function(num){
    return { type: NUM, num}
}

const reducer = (state=initialState, action) => {
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
        case NUM:
            return {...state, num: state.num};
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;