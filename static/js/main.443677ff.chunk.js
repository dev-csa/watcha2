(this.webpackJsonpwatcha_test2=this.webpackJsonpwatcha_test2||[]).push([[0],{23:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),u=n(21),s=n(6),l=n(13),p=n(8),i=n(12),m={score:0,count:0,win:0,draw:0,computers:"",num:0},E=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WIN":return Object(p.a)({},e,{score:e.score+1,count:e.count+1,win:e.win+1});case"LOSE":return Object(p.a)({},e,{score:e.score-1,count:e.count+1});case"DRAW":return Object(p.a)({},e,{score:e.score,count:e.count+1,draw:e.draw+1});case"COMPUTER":return Object(p.a)({},e,{computers:t.computers});case"RESET":return m;case"NUM":return Object(p.a)({},e,{num:e.num});default:return e}}));var d=Object(l.b)((function(e){return{result:e}}),(function(e){return{dispatch:e}}))((function(e){var t=e.result,n=e.dispatch,r="",c=function(){},o=["ss","rr","pp"],u=function(){n({type:"RESET"})};function s(e){e.preventDefault();var r=e.target.id,a=function(){var e=Math.floor(3*Math.random());return o[e]}();r===a?n({type:"DRAW"}):(r+a==="sspp"&&n({type:"WIN"}),r+a==="rrss"&&n({type:"WIN"}),r+a==="pprr"&&n({type:"WIN"}),r+a==="ssrr"&&n({type:"LOSE"}),r+a==="rrpp"&&n({type:"LOSE"}),r+a==="ppss"&&n({type:"LOSE"})),"rr"===a?a="\ubc14\uc704":"ss"===a?a="\uac00\uc704":"pp"===a&&(a="\ubcf4"),n(function(e){return{type:"COMPUTER",computers:e}}(a)),console.log(t),parseInt(t.num)===t.count||(parseInt(t.num),t.count)}return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",null,a.a.createElement("h1",null,"\uac00\uc704\ubc14\uc704\ubcf4 React redux"),a.a.createElement("div",null,a.a.createElement("input",{className:"inputGame",placeholder:"\ud310 \uc218 \uc785\ub825 (\ubbf8\uc785\ub825 \uc2dc 5\ud310)",onChange:function(e){r=e.target.value,console.log(r)}}),a.a.createElement("button",{className:"btnStart",onClick:function(e){u(),r=e.target.previousSibling.value,n({type:"NUM",num:r}),""==r&&(r=5)}}," \uac8c\uc784 \uc2dc\uc791 "),"  "),a.a.createElement("div",{className:"timer"}," "),a.a.createElement("div",{className:"computer"},"Computer: ",t.computers," "),a.a.createElement("button",{onClick:s,id:"ss"},"\uac00\uc704"),a.a.createElement("button",{onClick:s,id:"rr"},"\ubc14\uc704"),a.a.createElement("button",{onClick:s,id:"pp"},"\ubcf4"),a.a.createElement("div",{className:"myscore"},t.win,"\uc2b9 ",t.draw,"\ubb34 \ub85c \ud604\uc7ac \uc810\uc218\ub294: ",t.score," "),a.a.createElement("button",{className:"btnEnd",onClick:c}," \uac8c\uc784 \uc885\ub8cc ")))}));var b=function(){return a.a.createElement(u.a,null,a.a.createElement(s.a,{path:"/",exact:!0,component:d}))};o.a.render(a.a.createElement(l.a,{store:E}," ",a.a.createElement(b,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.443677ff.chunk.js.map