(this["webpackJsonpreact-unit-converter"]=this["webpackJsonpreact-unit-converter"]||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"Weight":{"Kilogram":1,"Hectogram":10,"Decagram":100,"Gram":1000,"Decigram":10000,"Centigram":100000,"Milligram":1000000},"Length":{"Kilometer":1,"Hectometer":10,"Decameter":100,"Meter":1000,"Decimeter":10000,"Centimeter":100000,"Millimeter":1000000},"Time":{"Hour":1,"Minute":60,"Second":3600}}')},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(0),r=n.n(i),c=n(8),s=n.n(c),u=n(30),l=n(111),j=n(112);var o=function(e){var t=e.systemsName,n=e.panel;return Object(a.jsx)(l.a,{fullWidth:!0,variant:"outlined",size:"",style:{marginBottom:"10px "},value:n.activePanel,onChange:function(e){return n.setActivePanel(e.target.value)},children:t.map((function(e){return Object(a.jsxs)(j.a,{value:e,children:[e," Converter"]},e)}))})};var m=function(e){var t=e.activePanel,n=e.index,i=e.children;return Object(a.jsx)("div",{hidden:t!==n,children:i})},b=n(103),d=n(113);var v=function(e){var t=e.input,n=e.unitsNames;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.a,{item:!0,xs:!0,children:Object(a.jsx)(d.a,{label:"Value",variant:"outlined",fullWidth:!0,value:t.value,type:"number",onChange:function(e){var n=Number(e.target.value)||null;t.setValue(n)}})}),Object(a.jsx)(b.a,{item:!0,xs:4,children:Object(a.jsx)(l.a,{variant:"outlined",size:"small",fullWidth:!0,onChange:function(e){return t.setUnit(e.target.value)},value:t.unit,children:n.map((function(e){return Object(a.jsx)(j.a,{value:e,children:e})}))})})]})},h=n(104),x=n(102),O=n(105),g=n(106),p=n(107),f=n(108),y=n(109),P=n(49);var N=function(e,t,n){if(!t.value)return 0;var a=new P.Decimal(e[n]),i=e[t.unit],r=t.value;return Number(a.dividedBy(i).times(r)).toLocaleString()};var S=function(e){var t=e.units,n=e.input;return Object(a.jsx)(b.a,{item:!0,xs:!0,children:Object(a.jsx)(h.a,{component:x.a,children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(g.a,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(f.a,{children:"Unit"}),Object(a.jsx)(f.a,{align:"right",children:"Value"})]})}),Object(a.jsx)(y.a,{children:t.names.map((function(e){return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(f.a,{scope:"row",children:e}),Object(a.jsx)(f.a,{align:"right",children:N(t.ratio,n,e)})]})}))})]})})})};var C=function(e){var t=e.unitsRatio,n=r.a.useState(Object.keys(t)),i=Object(u.a)(n,1)[0],c=r.a.useState(10),s=Object(u.a)(c,2),l=s[0],j=s[1],o=r.a.useState(i[0]),m=Object(u.a)(o,2),d=m[0],h=m[1];return Object(a.jsxs)(b.a,{container:!0,spacing:1,children:[Object(a.jsx)(b.a,{container:!0,item:!0,spacing:1,children:Object(a.jsx)(v,{input:{value:l,setValue:j,unit:d,setUnit:h},unitsNames:i})}),Object(a.jsx)(b.a,{container:!0,item:!0,children:Object(a.jsx)(S,{units:{names:i,ratio:t},input:{value:l,unit:d}})})]})};var W=function(e){var t=e.systems,n=e.activePanel;return Object(a.jsx)(a.Fragment,{children:Object.keys(t).map((function(e){return Object(a.jsx)(m,{activePanel:n,index:e,children:Object(a.jsx)(C,{unitsRatio:t[e]})},e)}))})},k=(n(66),n(110)),D=n(42);function w(){var e=r.a.useState("Weight"),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(k.a,{maxWidth:"sm",children:[Object(a.jsx)(o,{systemsName:Object.keys(D),panel:{activePanel:n,setActivePanel:i}}),Object(a.jsx)(W,{systems:D,activePanel:n})]})})}s.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.5b0c1a47.chunk.js.map