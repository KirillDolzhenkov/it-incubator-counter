(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),u=n(4),s=n.n(u),l=(n(9),n(2)),r=(n(10),n(11),n(12),n(0)),i=function(e){var t=e.count===e.maxValue?"redValue":"baseValue";return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:Object(r.jsx)("input",{value:e.count,className:t})})})},j=(n(14),function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{className:"IncBtn",disabled:e.count===e.maxValue,onClick:function(){e.addValue()},children:"Inc"})})})}),d=(n(15),function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{children:Object(r.jsx)("button",{className:"ResetBtn",disabled:0===e.count,onClick:function(){e.resetValue()},children:"Reset"})})})}),o=function(e){return Object(r.jsxs)("div",{className:"CounterBody",children:[Object(r.jsx)("div",{className:"Display",children:Object(r.jsx)(i,{maxValue:e.maxValue,count:e.count})}),Object(r.jsxs)("div",{className:"BtnArea",children:[Object(r.jsx)(j,{addValue:e.addValue,count:e.count,maxValue:e.maxValue}),Object(r.jsx)(d,{resetValue:e.resetValue,count:e.count})]})]})},b=(n(16),n(17),function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"SetBtn",onClick:function(){e.addStartValue(e.startValue)},children:"Set"})})}),x=function(e){return Object(r.jsxs)("div",{className:"SettingsBody",children:[Object(r.jsxs)("div",{className:"SettingsArea",children:[Object(r.jsxs)("h2",{children:[Object(r.jsx)("span",{children:"max value: "}),Object(r.jsx)("input",{type:"number",className:"SetInput",value:e.maxValue,onChange:function(t){e.addMaxValue(parseInt(t.currentTarget.value))}})]}),Object(r.jsxs)("h2",{children:[Object(r.jsx)("span",{children:"start value: "}),Object(r.jsx)("span",{children:Object(r.jsx)("input",{type:"number",className:"SetInput",value:e.startValue,onChange:function(t){e.addStartValue(parseInt(t.currentTarget.value))}})})]})]}),Object(r.jsx)("div",{className:"SBtnArea",children:Object(r.jsx)(b,{addStartValue:e.addStartValue,addMaxValue:e.addMaxValue,startValue:e.startValue,maxValue:e.maxValue})})]})};var O=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(0),s=Object(l.a)(u,2),i=s[0],j=s[1],d=Object(a.useState)(0),b=Object(l.a)(d,2),O=b[0],V=b[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{addStartValue:function(e){j(e),V(i)},addMaxValue:function(e){c(e)},startValue:i,maxValue:n}),Object(r.jsx)(o,{count:O,addValue:function(){V(O+1)},resetValue:function(){V(i)},maxValue:n})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,u=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),u(e),s(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),V()}],[[18,1,2]]]);
//# sourceMappingURL=main.247013cd.chunk.js.map