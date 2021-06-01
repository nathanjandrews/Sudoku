(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(8),i=n.n(r),u=n(6),a=n.n(u),l=n(9),d=n(2),s=n(7),f=n(0),b=function(e){var t=e.cellData,n=e.isStatic,o=e.onFocus,r=e.onChange,i=Object(c.useState)(t.value),u=Object(d.a)(i,2),a=u[0],l=u[1],s=n?"#000":"#315AAF";return Object(c.useEffect)((function(){l(t.value)}),[t.value]),Object(f.jsx)("input",{id:"c".concat(t.rowIndex).concat(t.colIndex),className:"cell",value:0===a?"":a,onChange:function(e){l(parseInt(e.target.value)||0),r(parseInt(e.target.value)||0,t.rowIndex,t.colIndex)},onFocus:function(){return o([t.rowIndex,t.colIndex,t.subgrid])},style:{color:s,backgroundColor:t.color,borderWidth:t.cellBorderWidths},readOnly:n,maxLength:1})},j=function(e){var t=e.boardObject,n=e.onChange,o=Object(c.useState)(t),r=Object(d.a)(o,2),i=r[0],u=r[1],a=Object(c.useState)([]),l=Object(d.a)(a,2),j=l[0],h=l[1],O=function(e){h(e)},v=function(e,t,n){var c=Object(s.a)(i);c[t][n].value=e,u(c)};return Object(c.useEffect)((function(){for(var e=Object(s.a)(t),n=Object(d.a)(j,3),c=n[0],o=n[1],r=n[2],i=0;i<9;i++)for(var a=0;a<9;a++){var l=e[i][a];if(c!==l.rowIndex||o!==l.colIndex){var f=c===l.rowIndex||o===l.colIndex||r===l.subgrid;e[i][a].color=f?"#E1E6EC":"#FEFEFE"}else e[i][a].color="#BDDBFE"}u(e)}),[t,j]),Object(f.jsx)("div",{id:"sudoku-board",onChange:function(){return n(i)},children:i.map((function(e){return e.map((function(e){return Object(f.jsx)(b,{cellData:e,isStatic:e.isStatic,onFocus:O,onChange:v},"".concat(e.rowIndex).concat(e.colIndex))}))}))})},h=function(e,t){return 3*Math.floor(e/3)+Math.floor(t/3)},O=function(e,t,n){var c=[0,0,0,0];return 3!==e&&6!==e||(c[0]=n),3!==t&&6!==t||(c[3]=n),c.reduce((function(e,t){return e+"".concat(t,"vmin ")}),"")},v={getSubgrid:h,getBorderStyling:O,buildBoardObject:function(e){for(var t=[],n=0;n<e.length;n++){for(var c=e[n],o=[],r=0;r<c.length;r++)o.push({rowIndex:n,colIndex:r,subgrid:h(n,r),value:e[n][r],isStatic:0!==e[n][r],cellBorderWidths:O(n,r,.75)});t.push(o)}return t}},x=function(e){return e.reduce((function(e,t){return function(e){for(var t=new Set,n=0;n<e.length;n++){if(t.has(e[n].value)||0===e[n].value)return!1;t.add(e[n].value)}return t.size===e.length}(t)&&e}),!0)},g={checkIfSolved:function(e){return x(e)&&function(e){return x(function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var c=e[t][n];e[t][n]=e[n][t],e[n][t]=c}return e}(e))}(e)&&function(e){for(var t=0;t<e.length;t+=3)for(var n=0;n<e.length;n+=3)for(var c=new Set,o=t;o<t+3;o++)for(var r=n;r<n+3;r++){if(c.has(e[o][r].value))return!1;c.add(e[o][r].value)}return!0}(e)}},m=function(e){var t=e.boardFromUrl,n=Object(c.useState)(!1),o=Object(d.a)(n,2),r=o[0],i=o[1],u=Object(c.useState)(v.buildBoardObject(t)),a=Object(d.a)(u,2),l=a[0],s=a[1];Object(c.useEffect)((function(){s(v.buildBoardObject(t))}),[t]);return Object(f.jsxs)("form",{id:"sudoku-instance-form",onSubmit:function(e){i(g.checkIfSolved(l)),e.preventDefault()},autoComplete:"off",children:[Object(f.jsxs)("div",{children:["This board ",r?"is":"is not"," solved"]}),Object(f.jsx)(j,{boardObject:l,onChange:function(e){s(e)},boardFromUrl:t}),Object(f.jsx)("input",{id:"submit-button",type:"submit",value:"How am I doing?"})]})},p=function(e){var t=e.difficulty,n=e.onSelection;return Object(f.jsx)("button",{className:"difficulty-button",onClick:function(){return n(t)},children:t})},S=function(e){var t=e.onSelection,n=e.visibility;return Object(f.jsx)("div",{id:"modal-box-container",style:{visibility:n?"visible":"hidden"},children:Object(f.jsxs)("div",{id:"select-difficulty-modal-box",children:[Object(f.jsx)("label",{id:"select-difficulty-label",children:"Select Difficulty"}),Object(f.jsxs)("div",{id:"difficulty-button-container",children:[Object(f.jsx)(p,{difficulty:"easy",onSelection:t}),Object(f.jsx)(p,{difficulty:"medium",onSelection:t}),Object(f.jsx)(p,{difficulty:"hard",onSelection:t}),Object(f.jsx)(p,{difficulty:"random",onSelection:t})]})]})})},y=function(){var e=Object(c.useState)(Object(f.jsx)("div",{children:"Game is Loading"})),t=Object(d.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)("https://sugoku.herokuapp.com/board?difficulty=easy"),i=Object(d.a)(r,2),u=i[0],s=i[1],b=Object(c.useState)(!0),j=Object(d.a)(b,2),h=j[0],O=j[1],v=Object(c.useState)(!1),x=Object(d.a)(v,2),g=x[0],p=x[1],y=function(){var e=Object(l.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){h&&y(u).then((function(e){o(Object(f.jsx)(m,{boardFromUrl:e.board})),O(!1)}))}),[u,h]);return Object(f.jsxs)("div",{id:"app",children:[Object(f.jsx)(S,{onSelection:function(e){s("https://sugoku.herokuapp.com/board?difficulty=".concat(e)),p(!1)},visibility:g}),Object(f.jsx)("h1",{id:"heading",children:"Sudoku"}),Object(f.jsx)("h2",{id:"sub-heading",children:"The classic combinatorial game of logic"}),Object(f.jsxs)("div",{id:"operation-buttons-container",children:[Object(f.jsx)("button",{id:"new-game-button",onClick:function(){O(!0)},children:"New Game"}),Object(f.jsx)("button",{id:"select-difficulty-button",onClick:function(){p(!0)},children:"Select Difficulty"})]}),n]})};n(16),n(17),n(18);i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.40689e87.chunk.js.map