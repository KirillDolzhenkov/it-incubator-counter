(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,function(e,t,n){e.exports={SettingsBody:"Settings_SettingsBody__19Ijx",displayArea:"Settings_displayArea__3m0Z6",SettingsArea:"Settings_SettingsArea__1vkBh",descriptionArea:"Settings_descriptionArea__UZojm",SBtnArea:"Settings_SBtnArea__3_qvh",SetInput:"Settings_SetInput__2TX9Q",error:"Settings_error__19JTb"}},function(e,t,n){e.exports={baseValue:"Display_baseValue__qrCBt",redValue:"Display_redValue__1UvP6",information:"Display_information__eDdm6"}},,function(e,t,n){e.exports={CounterBody:"Counter_CounterBody__2Ok5h",BtnArea:"Counter_BtnArea__3Tg7J"}},,function(e,t,n){e.exports={enableActionBtn:"ActionBtn_enableActionBtn__3cju0",disableActionBtn:"ActionBtn_disableActionBtn__3By3D"}},function(e,t,n){e.exports={SetBtn:"SetBtn_SetBtn__cabLy",disable:"SetBtn_disable__1QykG"}},,function(e,t,n){e.exports={app:"App_app__3QxsX"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(9),s=n.n(i),r=(n(15),n(4)),o=n(10),u=n.n(o),d=n(5),l=n.n(d),j=n(3),b=n.n(j),_=n(0),x=function(e){var t=e.count===e.maxValue?"".concat(b.a.baseValue," ").concat(b.a.redValue):"".concat(b.a.baseValue),n=e.editMode?'please enter the values and press "Set" btn':e.count,a=e.editMode?"".concat(b.a.baseValue," ").concat(b.a.information):t;return Object(_.jsx)("div",{children:Object(_.jsx)("input",{value:n,className:a})})},p=n(7),O=n.n(p),S=function(e){var t=e.count===e.value||e.editMode?O.a.disableActionBtn:O.a.enableActionBtn;return Object(_.jsx)("div",{children:Object(_.jsx)("button",{className:t,disabled:e.count===e.value||e.editMode,onClick:function(){e.actionFn()},children:e.title})})},v=function(e){return Object(_.jsxs)("div",{className:l.a.CounterBody,children:[Object(_.jsx)("div",{className:l.a.Display,children:Object(_.jsx)(x,{maxValue:e.maxValue,count:e.count,editMode:e.editMode})}),Object(_.jsxs)("div",{className:l.a.BtnArea,children:[Object(_.jsx)(S,{title:"Inc",actionFn:function(){e.addValue()},count:e.count,value:e.maxValue,editMode:e.editMode}),Object(_.jsx)(S,{title:"Reset",actionFn:function(){e.resetValue()},count:e.count,value:e.startValue,editMode:e.editMode})]})]})},m=n(2),f=n.n(m),h=n(8),V=n.n(h),B=function(e){var t=e.error?V.a.disable:V.a.SetBtn;return Object(_.jsx)("div",{children:Object(_.jsx)("button",{className:t,disabled:e.error,onClick:function(){e.testFn()},children:"Set"})})},g=function(e){var t=e.error?"".concat(f.a.SetInput," ").concat(f.a.error):"".concat(f.a.SetInput);return Object(_.jsxs)("div",{className:f.a.SettingsBody,children:[Object(_.jsxs)("div",{className:f.a.displayArea,children:[Object(_.jsxs)("div",{className:f.a.descriptionArea,children:[Object(_.jsx)("div",{children:"max value:"}),Object(_.jsx)("div",{children:"start value:"})]}),Object(_.jsxs)("div",{className:f.a.SettingsArea,children:[Object(_.jsx)("input",{type:"number",className:t,value:e.maxValue,onChange:function(t){e.addMaxValue(parseInt(t.currentTarget.value)),e.changeEditMode(!0)}}),Object(_.jsx)("input",{type:"number",className:t,value:e.startValue,onChange:function(t){e.addStartValue(parseInt(t.currentTarget.value)),e.changeEditMode(!0)}})]})]}),Object(_.jsx)("div",{className:f.a.SBtnArea,children:Object(_.jsx)(B,{testFn:function(){e.addStartValue(e.startValue),e.addMaxValue(e.maxValue),e.changeEditMode(!1)},error:e.error})})]})},A=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(0),s=Object(r.a)(i,2),o=s[0],d=s[1],l=Object(a.useState)(0),j=Object(r.a)(l,2),b=j[0],x=j[1],p=Object(a.useState)(!1),O=Object(r.a)(p,2),S=O[0],m=O[1],f=Object(a.useState)(!1),h=Object(r.a)(f,2),V=h[0],B=h[1];return Object(_.jsxs)("div",{className:u.a.app,children:[Object(_.jsx)(g,{addStartValue:function(e){B(e>=n||e<0),d(e),x(o)},addMaxValue:function(e){B(e<=o||e<0),c(e)},startValue:o,maxValue:n,changeEditMode:function(e){m(e)},error:V}),Object(_.jsx)(v,{count:b,addValue:function(){x(b+1)},resetValue:function(){x(o)},maxValue:n,startValue:o,editMode:S})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(A,{})}),document.getElementById("root")),y()}],[[17,1,2]]]);
//# sourceMappingURL=main.03d22efc.chunk.js.map