(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(356)},119:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var i=n(23),o=n.n(i),c=n(0),a=n.n(c),u=n(42),s=n(15),r=n(109),l=n(361),d=n(33),f=n(14),m=n(362),p=n(359),h=n(67),b=n(7),v=Object(b.keyBy)([{id:"component-type",title:"type of component",options:[{value:"class",title:"class"},{value:"function",title:"function"},{value:"styled-component",title:"styled-component"}],tags:[]},{id:"local-state",title:"local state",options:[{value:"none",title:"none"},{value:"class",title:"class"},{value:"usestate-hook",title:"useState hook"},{value:"usereducer-hook",title:"useReducer hook"}],tags:[]},{id:"usereducer-hook-init",title:"useReducer hook initialization",options:[{value:"none",title:"none"},{value:"second-argument",title:"initial state as second argument"},{value:"lazy",title:"lazy initialization"}],tags:[]},{id:"function-definition",title:"function definition type",options:[{value:"none",title:"none"},{value:"statement",title:"statement"},{value:"expression",title:"expression"},{value:"arrow-function",title:"arrow function"}],tags:[]},{id:"class-callback-binding",title:"class callback binding",options:[{value:"none",title:"none"},{value:"manual",title:"manual binding"},{value:"class-fields-syntax",title:"class fields syntax"},{value:"arrow-function",title:"arrow function in render"}],tags:[]}],function(e){return e.id}),y=n(110),k=[{id:"1",description:"components with local state are functions or classes",if:{questionId:"local-state",matches:function(e){return"none"!==e}},then:{questionId:"component-type",mustMatch:function(e){return"function"===e||"class"===e}}},{id:"2",description:"components with local state via classes are classes",if:{questionId:"local-state",matches:function(e){return"class"===e}},then:{questionId:"component-type",mustMatch:function(e){return"class"===e}}},{id:"3",description:"components with local state via hooks are functions",if:{questionId:"local-state",matches:function(e){return"usestate-hook"===e||"usereducer-hook"===e}},then:{questionId:"component-type",mustMatch:function(e){return"function"===e}}},{id:"4",description:"components with function definitions are functions",if:{questionId:"function-definition",matches:function(e){return"none"!==e}},then:{questionId:"component-type",mustMatch:function(e){return"function"===e}}},{id:"5",description:"function components have function definitions",if:{questionId:"component-type",matches:function(e){return"function"===e}},then:{questionId:"function-definition",mustMatch:function(e){return"none"!==e}}},{id:"6",description:"components with useReducer initialization have useReducer state",if:{questionId:"usereducer-hook-init",matches:function(e){return"none"!==e}},then:{questionId:"local-state",mustMatch:function(e){return"usereducer-hook"===e}}},{id:"7",description:"components with useReducer local state have useReducer initialization",if:{questionId:"local-state",matches:function(e){return"usereducer-hook"===e}},then:{questionId:"usereducer-hook-init",mustMatch:function(e){return"none"!==e}}},{id:"8",description:"components with class callback binding are classes",if:{questionId:"class-callback-binding",matches:function(e){return"none"!==e}},then:{questionId:"component-type",mustMatch:function(e){return"class"===e}}},{id:"9",description:"class components have callback binding",if:{questionId:"component-type",matches:function(e){return"class"===e}},then:{questionId:"class-callback-binding",mustMatch:function(e){return"none"!==e}}}],O=k.map(function(e){return{id:"i_"+e.id,description:"...",if:{questionId:e.then.questionId,matches:function(t){return!e.then.mustMatch(t)}},then:{questionId:e.if.questionId,mustMatch:function(t){return!e.if.matches(t)}}}}),j=Object(b.keyBy)([].concat(k,Object(y.a)(O)),function(e){return e.id}),g=(n(119),function(e,t){return e.options.filter(function(n){return Object(b.values)(t).every(function(t){return t.then.questionId!==e.id||t.then.mustMatch(n.value)})})}),I=function(e,t){return Object(b.difference)(e.options,g(e,t))},q=function(e,t){var n=Object(b.filter)(t,function(t){return w(t.if.questionId,e)&&t.if.matches(e[t.if.questionId])});return Object(b.keyBy)(n,function(e){return e.id})},w=function(e,t){return Object(b.keys)(t).includes(e)},E=n(360),M=function(e){var t=e.providedAnswers,n=e.inferredAnswers;return a.a.createElement(E.a,{language:"javascript"},"\n// provided answers\n".concat(JSON.stringify(t,null,2),"\n\n// inferred answers\n").concat(JSON.stringify(n,null,2),"\n\n// todo: generate code from answers\n").trim())},B=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],i=t[1],o=function e(t,n,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=Object(s.a)({},n,o),a=q(c,i),u=Object(b.keyBy)(Object(b.filter)(t,function(e){return!w(e.id,c)}),function(e){return e.id}),r=Object(b.mapValues)(u,function(e){return g(e,a).map(function(e){return e.value})}),l=Object(b.keyBy)(Object(b.filter)(i,function(e){return e.if.questionId in r&&r[e.if.questionId].every(function(t){return e.if.matches(t)})}),function(e){return e.id}),d=Object(b.filter)(u,function(e){return 1===g(e,Object(s.a)({},a,l)).length}),f=Object(b.mapValues)(Object(b.keyBy)(d,function(e){return e.id}),function(e){return g(e,Object(s.a)({},a,l))[0].value});return Object(b.keys)(Object(s.a)({},c,f)).length===Object(b.keys)(c).length?o:e(t,n,i,Object(s.a)({},o,f))}(v,n,j);return a.a.createElement(l.a,null,a.a.createElement(l.a.Content,{style:{background:"#fff"}},a.a.createElement(d.a,{gutter:24},a.a.createElement(f.a,{span:14},Object(b.values)(v).map(function(e){return a.a.createElement(m.a,{title:e.title,bordered:!1,key:e.id,style:{opacity:e.id in o?.75:1}},e.id in o?a.a.createElement("div",{style:{height:32}},v[e.id].options.find(function(t){return t.value===o[e.id]}).title):a.a.createElement(p.a.Group,{buttonStyle:"solid",value:Object(s.a)({},o,n)[e.id],onChange:function(t){i(Object(s.a)({},n,Object(u.a)({},e.id,t.target.value)))}},e.options.map(function(t){return a.a.createElement(p.a.Button,{key:t.value,value:t.value,disabled:I(e,q(Object(s.a)({},n,o),j)).some(function(e){return e.value===t.value})},t.title)})),w(e.id,n)&&a.a.createElement("a",{style:{paddingLeft:8},onClick:function(){i(Object(b.omit)(n,e.id))}},"clear"))})),a.a.createElement(f.a,{span:10},a.a.createElement(h.a,{defaultActiveKey:"1"},a.a.createElement(h.a.TabPane,{tab:"code",key:"1"},a.a.createElement(M,{providedAnswers:n,inferredAnswers:o})))))))};o.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.aa3dc403.chunk.js.map