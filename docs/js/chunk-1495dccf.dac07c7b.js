(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1495dccf"],{"0aa9":function(e,t,n){"use strict";n("b826")},"2d78":function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),r={class:"container draw-lottery-content"},c={class:"draw-lottery-box"},i=["onClick"];function a(e,t,n,a,l,d){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",c,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.lotteryList,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["draw-lottery-item",t.index===e.currentIndex?"active":""]),key:t.id,onClick:function(n){return e.startDraw(t.type)}},Object(o["toDisplayString"])(t.name),11,i)})),128))])])}var l=n("b85c"),d=(n("4e82"),Object(o["defineComponent"])({name:"DrawLottery",setup:function(){var e=Object(o["ref"])(null),t=Object(o["ref"])([{id:1,name:"A",local:1,type:"prize",index:1},{id:2,name:"B",local:1,type:"prize",index:2},{id:3,name:"C",local:1,type:"prize",index:3},{id:4,name:"H",local:1,type:"prize",index:8},{id:5,name:"start",local:1,type:"button",index:10},{id:6,name:"D",local:1,type:"prize",index:4},{id:7,name:"G",local:1,type:"prize",index:7},{id:8,name:"F",local:1,type:"prize",index:6},{id:9,name:"E",local:1,type:"prize",index:5}]);function n(n){var o=JSON.parse(JSON.stringify(t.value));if(o=o.sort((function(e,t){return e.index-t.index})),console.log(o),console.log("start",n),"button"===n){var r,c=Object(l["a"])(o);try{var i=function(){var t=r.value;if("button"===t.type)return"continue";console.log(t.index),setTimeout((function(){e.value=t.index,console.log(e.value)}),100*t.index)};for(c.s();!(r=c.n()).done;)i()}catch(a){c.e(a)}finally{c.f()}}}return{currentIndex:e,lotteryList:t,startDraw:n}}}));n("0aa9");d.render=a,d.__scopeId="data-v-9d0bc1ce";t["default"]=d},"4e82":function(e,t,n){"use strict";var o=n("23e7"),r=n("1c0b"),c=n("7b0b"),i=n("d039"),a=n("a640"),l=[],d=l.sort,s=i((function(){l.sort(void 0)})),u=i((function(){l.sort(null)})),p=a("sort"),b=s||!u||!p;o({target:"Array",proto:!0,forced:b},{sort:function(e){return void 0===e?d.call(c(this)):d.call(c(this),r(e))}})},b826:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1495dccf.dac07c7b.js.map