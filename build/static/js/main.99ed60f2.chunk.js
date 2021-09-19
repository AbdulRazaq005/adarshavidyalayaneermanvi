(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(28),r=c.n(n),i=(c(37),c(3)),l=c(5),j=c.n(l),d=c(6),o=c(1);function b(e){var t=e.setLoginStatus,c=e.loginStatus,s=e.setUser;return Object(o.jsxs)("nav",{id:"nav",className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(o.jsxs)(d.b,{className:"navbar-brand ms-3 flex-row align-items-center",to:"/",children:[Object(o.jsx)("img",{src:"./images/Logo.png",className:"ms-3",style:{height:"4rem",backgroundColor:"azure"}}),Object(o.jsxs)("div",{className:"flex-col ms-3",children:[Object(o.jsx)("h3",{className:"my-0",children:"Adarsh Vidyalaya"}),Object(o.jsx)("span",{id:"neermanvi",children:"Neermanvi"})]})]}),Object(o.jsx)("button",{className:"navbar-toggler navbar-toggler-right me-3",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navmenu",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navmenu",children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-md-0 ms-auto me-4 content-center",children:[Object(o.jsx)("li",{className:"nav-item ms-1",children:c?Object(o.jsx)("a",{className:"nav-link btn btn-sm btn-light text-dark px-2 pt-2 pb-0",onClick:function(){j.a.get("/api/logout").then((function(e){s({name:"Guest User",id:"profile",role:"Visitor"}),t(!1)})).catch((function(e){alert("Logout Unsuccessful!")}))},style:{cursor:"pointer"},children:Object(o.jsx)("h6",{children:"Logout"})}):Object(o.jsx)(d.b,{className:"nav-link btn btn-sm btn-light text-dark px-2 pt-2 pb-0",to:"/login",children:Object(o.jsx)("h6",{children:"Login"})})}),Object(o.jsx)("li",{className:"nav-item ms-1",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/register",children:"Register"})}),Object(o.jsx)("li",{className:"nav-item ms-1",children:Object(o.jsx)(d.b,{className:"nav-link",to:"/students",children:"Students"})})]})})]})}var h=c(30),m=c(14),u=c(31);function x(){return Object(o.jsxs)("div",{id:"catagories",children:[Object(o.jsx)(d.b,{className:"btn catagory-item",to:"/",children:Object(o.jsxs)("div",{className:"content-center flex-col",children:[Object(o.jsx)(m.a,{size:40,className:"myReact-icons"}),Object(o.jsx)("samp",{children:"HomePage"})]})}),Object(o.jsx)(d.b,{className:"btn catagory-item",to:"/courses",children:Object(o.jsxs)("div",{className:"content-center flex-col",children:[Object(o.jsx)(h.a,{size:40,className:"myReact-icons"}),Object(o.jsx)("samp",{children:"Courses"})]})}),Object(o.jsx)(d.b,{className:"btn catagory-item",to:"/results",children:Object(o.jsxs)("div",{className:"content-center flex-col",children:[Object(o.jsx)(m.b,{size:40,className:"myReact-icons"}),Object(o.jsx)("samp",{children:"Results"})]})}),Object(o.jsx)(d.b,{className:"btn catagory-item",to:"/feedback",children:Object(o.jsxs)("div",{className:"content-center flex-col",children:[Object(o.jsx)(u.a,{size:40,className:"myReact-icons"}),Object(o.jsx)("samp",{children:"Feedback"})]})})]})}var O=c(4);function p(){var e="panel active",t="panel",c=function(){return l((r+1)%5)},a=Object(s.useState)(0),n=Object(i.a)(a,2),r=n[0],l=n[1],j=Object(s.useState)(),d=Object(i.a)(j,2),b=d[0],h=d[1];Object(s.useEffect)((function(){return h(setInterval(c,2e3)),function(){clearInterval(b),h()}}),[r]);var m=function(e){clearInterval(b),l(e)};return Object(o.jsxs)("div",{id:"carousel",children:[Object(o.jsx)("div",{className:0==r?e:t,style:{backgroundImage:"url(./images/1.png)"},onClick:function(){m(0)}}),Object(o.jsx)("div",{className:1==r?e:t,style:{backgroundImage:"url(./images/2.png)"},onClick:function(){m(1)}}),Object(o.jsx)("div",{className:2==r?e:t,style:{backgroundImage:"url(./images/3.png)"},onClick:function(){m(2)}}),Object(o.jsx)("div",{className:3==r?e:t,style:{backgroundImage:"url(./images/4.png)"},onClick:function(){m(3)}}),Object(o.jsx)("div",{className:4==r?e:t,style:{backgroundImage:"url(./images/5.png)"},onClick:function(){m(4)}})]})}function f(e){var t=e.user,c="./images/".concat(t.id,".jpeg");function s(e){return e.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}return Object(o.jsxs)("div",{id:"profile",children:[Object(o.jsxs)("div",{className:"card-profile pt-2 pb-2",children:[Object(o.jsx)("img",{src:c,alt:"profilr",className:"card-image "}),Object(o.jsx)("h5",{className:"card-title card-btns pb-0",children:s(t.name)}),Object(o.jsx)("p",{className:"card-text btn-sm card-btns py-0",children:s(t.role)})]}),Object(o.jsxs)("div",{className:"card-navs",children:[Object(o.jsx)(d.b,{className:"btn-dark",to:"./profile",children:Object(o.jsx)("div",{className:"btn card-btns btn-dark",children:"Profile"})}),Object(o.jsx)(d.b,{className:"btn-dark",to:"./students",children:Object(o.jsx)("div",{className:"btn card-btns btn-dark",children:"Students"})}),Object(o.jsx)(d.b,{className:"btn-dark",to:"./feedback",children:Object(o.jsx)("div",{className:"btn card-btns btn-dark",children:"Feedback"})})]})]})}function g(e){var t=e.user,c=e.students,a=(e.loginStatus,Object(s.useState)(null)),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(s.useEffect)((function(){if(c){var e=c.filter((function(e){var t=new Date(e.dob),c=new Date;if(t.getDate()===c.getDate()&&t.getMonth()===c.getMonth())return!0}));l(e)}}),[c]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"main-content",children:[Object(o.jsxs)("div",{className:"flex-row content-center w-100 mt-3",children:[Object(o.jsx)(p,{}),Object(o.jsx)(f,{user:t})]}),r?r.map((function(e){return Object(o.jsxs)("div",{className:"col-11 col-sm-8 col-md-8 col-lg-6 col-xl-6 mx-auto my-5 p-4 ",style:{backgroundImage:"url('./images/shine1.gif')"},children:[Object(o.jsx)("div",{className:"birthday-card",children:Object(o.jsx)("img",{src:"./images/".concat(e.id,".jpeg"),alt:"Birthday image",className:"bday-image"})}),Object(o.jsx)("div",{className:"alert alert-primary text-center",children:Object(o.jsxs)("h5",{className:"px-4",children:["Happy Birthday"," ",Object(o.jsx)("b",{className:"text-dark",children:"".concat((t=e.name,t.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")))}),", May your Birthday be sprinkled with Fun and Laughter."]})})]});var t})):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("h2",{className:"mt-4 text-center",children:"SSLC Preformance Enhancement Web-Application"}),Object(o.jsxs)("div",{className:"homepage-content container p-3 ",children:[Object(o.jsx)("h5",{className:"ms-4",id:"about",children:"About"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"mb-2",children:"This App is designed to Boost the Performance by Monitoring student performance in Sequence of tests conducted in all the Subjects."}),Object(o.jsxs)("li",{className:"mb-2",children:["Students can view their ",Object(o.jsx)("b",{children:"Scores"})," and Top 10 ",Object(o.jsx)("b",{children:"Rank List "}),"in all the tests conducted."]}),Object(o.jsxs)("li",{className:"mb-2",children:["Students can give their feedback to any subject Teacher in"," ",Object(o.jsx)("b",{children:"Feedback"})," Section."]})]})]})]})})}function v(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:" m-4 ",children:"SUBJECTS"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:"English"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:"Kannada"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:"Hindi"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:"Science"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:"Mathematics"})}),Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:"Social Science"})})]}),Object(o.jsxs)("div",{className:"mt-4 mb-4",children:[Object(o.jsx)("div",{className:"ms-4 mb-2 mt-4 font-weight-bolder",children:Object(o.jsx)("b",{children:"Download PDF version text-book of any Subject below."})}),Object(o.jsx)("a",{href:"http://ktbs.kar.nic.in/New/index.html#!/textbook",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("span",{className:"subject-btn ms-4",children:"Download"})})]}),Object(o.jsxs)("div",{className:"mt-3 mb-4",children:[Object(o.jsx)("div",{className:"ms-4 mb-2 mt-4 font-weight-bolder",children:Object(o.jsx)("b",{children:"Download Marks Distribution of Core Subjects below."})}),Object(o.jsx)("a",{href:"http://www.kseeb.kar.nic.in/content%20weightage.asp",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("span",{className:"subject-btn ms-4",children:"Download"})})]}),Object(o.jsxs)("div",{className:"mt-3 mb-4",children:[Object(o.jsx)("div",{className:"ms-4 mb-2 mt-4 font-weight-bolder",children:Object(o.jsx)("b",{children:"Download Previous years SSLC Question papers below."})}),Object(o.jsx)("a",{href:"http://kseeb.kar.nic.in/sslc_question_paper.asp",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("span",{className:"subject-btn ms-4 mb-2",children:"Download"})})]}),Object(o.jsx)("h4",{className:"ms-4",children:"SSLC Board Exam Pattern"}),Object(o.jsx)("div",{className:"m-3",children:Object(o.jsxs)("table",{className:"table table-light",children:[Object(o.jsx)("thead",{className:" table-dark thead-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"Subjects"}),Object(o.jsx)("th",{scope:"col",children:"Theory"}),Object(o.jsx)("th",{scope:"col",children:"Internal"}),Object(o.jsx)("th",{scope:"col",children:"Total"})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"1"}),Object(o.jsx)("td",{children:"English"}),Object(o.jsx)("td",{children:"100"}),Object(o.jsx)("td",{children:"-"}),Object(o.jsx)("td",{children:"100"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"2"}),Object(o.jsx)("td",{children:"Kannada"}),Object(o.jsx)("td",{children:"80"}),Object(o.jsx)("td",{children:"20"}),Object(o.jsx)("td",{children:"100"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"3"}),Object(o.jsx)("td",{children:"Hindi"}),Object(o.jsx)("td",{children:"80"}),Object(o.jsx)("td",{children:"20"}),Object(o.jsx)("td",{children:"100"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"4"}),Object(o.jsx)("td",{children:"Maths"}),Object(o.jsx)("td",{children:"80"}),Object(o.jsx)("td",{children:"20"}),Object(o.jsx)("td",{children:"100"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"5"}),Object(o.jsx)("td",{children:"Science"}),Object(o.jsx)("td",{children:"80"}),Object(o.jsx)("td",{children:"20"}),Object(o.jsx)("td",{children:"100"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"6"}),Object(o.jsx)("td",{children:"Social Science"}),Object(o.jsx)("td",{children:"80"}),Object(o.jsx)("td",{children:"20"}),Object(o.jsx)("td",{children:"100"})]})]})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}function N(e){var t=e.user,c=e.idx,a=e.score,n=e.max,r=e.edit,l=e.onInputChange,j=Object(s.useState)(0),d=Object(i.a)(j,2),b=d[0],h=d[1],m=1;Object(s.useEffect)((function(){m&&(h("Absent"!=a?a/n*100:0),m=0)}),[a]);var u=2*b;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:c+1}),Object(o.jsx)("td",{children:t.id}),Object(o.jsx)("td",{children:t.name}),Object(o.jsx)("td",{children:r?Object(o.jsx)("input",{defaultValue:a,type:"text",contentEditable:"true",style:{width:"10vw"},onChange:function(e){return l(t.id,e.target.value)}}):a}),Object(o.jsx)("td",{children:b.toPrecision(4)}),Object(o.jsx)("td",{children:Object(o.jsx)("div",{id:"result-bar",children:Object(o.jsx)("div",{style:{backgroundColor:"rgba(".concat(250-u,", ").concat(30+u,", 20, 1)"),width:"".concat(b,"%"),height:"100%",borderRadius:"5px",transition:"ease-in-out 0.6s"}})})})]})}function S(e){var t=e.students,c=e.user,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],l=n[1],d=Object(s.useState)(!1),b=Object(i.a)(d,2),h=b[0],m=b[1],u=Object(s.useState)(!1),x=Object(i.a)(u,2),O=x[0],p=x[1],f=Object(s.useState)(null),g=Object(i.a)(f,2),v=g[0],S=g[1],y=Object(s.useState)([]),w=Object(i.a)(y,2),k=w[0],C=w[1],F=Object(s.useState)([]),U=Object(i.a)(F,2),I=U[0],T=U[1],D=Object(s.useState)(!1),P=Object(i.a)(D,2),E=P[0],M=P[1],R=Object(s.useState)([]),A=Object(i.a)(R,2),L=A[0],q=A[1];Object(s.useEffect)((function(){E||j.a.get("/api/tests").then((function(e){if(C(e.data),M(!0),r){var t=e.data.filter((function(e){return e.subject===r}));T(t)}})).catch((function(e){}))}),[E]);var _=function(e,t){var c=v,s=c.marks.filter((function(t){return t.id!=e}));s.push({id:e,score:parseInt(t)}),c.marks=s,S(c)};Object(s.useEffect)((function(){if(v){var e=v.marks.sort((function(e,t){return t.score-e.score}));e=e.slice(0,10),q(e)}}),[v,h]);return Object(o.jsxs)("div",{className:"flex-col container align-items-center pb-5",children:[Object(o.jsx)("h6",{className:"mt-4",children:'Select any Subject and Click on "Get Test List!".'}),Object(o.jsxs)("div",{className:"flex-row justify-content-center align-items-center",children:[Object(o.jsxs)("select",{className:"custom-select mb-3 mt-3 pb-1 pe-2 ps-2",name:"subject",defaultValue:"",onChange:function(e){T([]),l(e.target.value),S(null)},children:[Object(o.jsx)("option",{value:"",children:"Select Subjects"}),Object(o.jsx)("option",{value:"english",children:"English"}),Object(o.jsx)("option",{value:"kannada",children:"Kannada"}),Object(o.jsx)("option",{value:"hindi",children:"Hindi"}),Object(o.jsx)("option",{value:"science",children:"Science"}),Object(o.jsx)("option",{value:"maths",children:"Mathematics"}),Object(o.jsx)("option",{value:"social",children:"Social Science"})]}),Object(o.jsx)("button",{className:"btn btn-sm btn-success ms-1 ",type:"button",onClick:function(){if(r){var e=k.filter((function(e){return e.subject===r}));T(e)}},children:"Get Test List!"})]}),Object(o.jsx)("div",{className:"flex-row justify-content-center m-0 mt-3 flex-nowrap col-xs-12 col-md-8",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("div",{className:"list-group text-center w-100",children:I.map((function(e,t){return Object(o.jsxs)("div",{href:"#!",className:"list-group-item list-group-item-action",children:[Object(o.jsx)("span",{className:"ms-2 me-2",children:e.testName}),Object(o.jsx)("span",{className:"ms-2 me-2",children:e.date}),Object(o.jsxs)("span",{className:"ms-2 me-2",children:["Total-Marks : ",e.maxMarks]}),Object(o.jsx)("button",{className:"ms-1 btn-sm btn-warning me-0",onClick:function(){S(e),m(!1),p(!1)},children:"Show Scores"})]},t)}))})})}),"teacher"==c.role?Object(o.jsx)("div",{className:"row justify-content-center mt-3 ",children:Object(o.jsx)("button",{className:"btn-sm btn-primary ms-auto",onClick:function(){p(!0);var e=(new Date).toISOString().slice(0,10);S({testName:"",date:e,subject:r,maxMarks:100,marks:[]}),m(!0),p(!0)},children:"Add New Test"})}):Object(o.jsx)(o.Fragment,{}),v?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"card text-center mt-3",children:[Object(o.jsx)("span",{className:"btn-danger close-btn ms-auto m-1",onClick:function(){S(null),p(!1),m(!1)},children:"X"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{className:"card-title",children:["Test Name :"," ",h?Object(o.jsx)("input",{defaultValue:v.testName,type:"text",onChange:function(e){var t=v;t.testName=e.target.value,S(t)}}):v.testName]}),Object(o.jsxs)("p",{className:"card-text",children:["Total Marks :"," ",h?Object(o.jsx)("input",{defaultValue:v.maxMarks,type:"text",style:{width:"3.5rem"},onChange:function(e){var t=v;t.maxMarks=parseInt(e.target.value),S(t)}}):v.maxMarks]}),"Subject : ",r,Object(o.jsx)("p",{className:"card-text",children:Object(o.jsxs)("small",{className:"text-muted",children:["Date :"," ",h?Object(o.jsx)("input",{defaultValue:v.date,type:"text",onChange:function(e){var t=v;t.date=e.target.value,S(t)}}):v.date]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{className:"text-primary",children:"Top 5 Rank List : "}),Object(o.jsxs)("table",{className:"table table-light m-auto mt-4 table-hover",children:[Object(o.jsx)("thead",{className:"table-secondary",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Rank"}),Object(o.jsx)("th",{scope:"col",children:"Full Name"}),Object(o.jsx)("th",{scope:"col",children:"Marks"})]})}),Object(o.jsx)("tbody",{children:L.map((function(e,c){var s=t.filter((function(t){return t.id===e.id}));return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:c+1}),Object(o.jsx)("th",{scope:"col",children:s[0].name}),Object(o.jsx)("th",{scope:"col",children:e.score})]},c)}))})]})]})]})]}),Object(o.jsxs)("h5",{className:"text-primary mt-3 mb-0 mx-auto text-center",children:["Full Detail List :"," "]}),Object(o.jsxs)("table",{className:"table table-light m-auto mt-2 table-hover",children:[Object(o.jsx)("thead",{className:"table-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"Reg_Id"}),Object(o.jsx)("th",{scope:"col",children:"Full Name"}),Object(o.jsx)("th",{scope:"col",children:"Marks"}),Object(o.jsx)("th",{scope:"col",children:"%"}),Object(o.jsx)("th",{scope:"col",children:"Indicator"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e,t){var c=v.marks.filter((function(t){return t.id==e.id}));if(!c.length){var s=v;s.marks.push({id:e.id,score:0}),S(s),c=[{score:0}]}return Object(o.jsx)(N,{user:e,idx:t,score:c[0].score,max:v.maxMarks,edit:h,onInputChange:_},e.id)}))})]})]}):Object(o.jsx)(o.Fragment,{}),v&&"teacher"==c.role?Object(o.jsx)(o.Fragment,{children:O?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"row justify-content-center mt-3",children:Object(o.jsx)("button",{className:"btn btn-sm btn-success me-0 col",onClick:function(){""!=v.testName?r?j.a.post("/api/test",v).then((function(e){M(!1),m(!1),p(!1),S(null)})).catch((function(e){alert("Server Error Please Reload the Page and try again.")})):alert("Please Select Subject Above"):alert("Test Name cannot be Empty.")},children:"Update New Test Scores"})})}):Object(o.jsx)(o.Fragment,{children:h?Object(o.jsxs)("div",{className:"flex-row justify-content-center mt-3 col-8",children:[Object(o.jsx)("button",{className:"btn btn-sm btn-danger m-2",onClick:function(){m(!1),S(null),j.a.delete("/api/test/".concat(v._id)).then((function(e){var t=I.filter((function(e){return e._id!=v._id}));T(t);var c=k.filter((function(e){return e._id!=v._id}));C(c),M(!0)})).catch((function(e){alert("Server Error Please Reload the Page and try again.")}))},children:"Delete This Test"}),Object(o.jsx)("button",{className:"btn-sm btn-success m-2",onClick:function(){m(!1),j.a.put("/api/test/".concat(v._id),v).then((function(e){var t=I.filter((function(e){return e._id!=v._id}));t.push(v),T(t),M(!1)})).catch((function(e){alert("Server Error Please Reload the Page and try again.")}))},children:"Save Test Details"})]}):Object(o.jsx)("div",{className:"row justify-content-center mt-3",children:Object(o.jsx)("button",{className:"btn btn-sm btn-warning me-0 col",onClick:function(){m(!0),p(!1)},children:"Edit This Test Scores"})})})}):Object(o.jsx)(o.Fragment,{})]})}function y(e){var t=e.user,c=e.feedbacks,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],l=n[1],d=Object(s.useState)([]),b=Object(i.a)(d,2),h=b[0],m=b[1],u=Object(s.useState)(""),x=Object(i.a)(u,2),O=x[0],p=x[1];Object(s.useEffect)((function(){if(c){var e=[];"teacher"==t.role?(e=c.filter((function(e){return e.subject===t.subject})),m(e)):m(c)}}),[c,t]);return Object(o.jsx)(o.Fragment,{children:"student"===t.role||"d group"===t.role?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=new Date,s=c.toDateString(),a=c.getMinutes(),n=c.getHours(),i=n>=12?"PM":"AMs",l="Date- "+s+", Time- "+(n=n%12||12)+":"+a+" "+i;O?j.a.post("/api/feedback",{id:t.id,name:t.name,subject:O,feedback:r,date:l}).then((function(e){alert(e.data)})).catch((function(e){alert(e.response.data)})):alert("Please Select Subject to Which you want to send!")},children:[Object(o.jsx)("div",{className:"alert alert-warning text-center my-4 col-11 mx-auto",children:"Only Selected Teacher can See your Feedbacks and NOT visible to Students."}),Object(o.jsxs)("div",{className:"col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6 mx-auto",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col text-center",children:Object(o.jsx)("h1",{children:"Feedback"})})}),Object(o.jsx)("div",{className:"row align-items-center mt-4",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("textarea",{type:"text",className:"form-control textarea",placeholder:"Write Your Feedback here.",rows:"5",onChange:function(e){return l(e.target.value)},required:!0})})}),Object(o.jsxs)("div",{className:"flex-col justify-content-center align-items-center col-6 mx-auto",children:[Object(o.jsxs)("select",{className:"form-select mb-3 mt-3 pb-1 pe-2 ps-2",onChange:function(e){return p(e.target.value)},required:!0,children:[Object(o.jsx)("option",{children:"Select Subject Teacher"}),Object(o.jsx)("option",{value:"english",children:"English"}),Object(o.jsx)("option",{value:"kannada",children:"Kannada"}),Object(o.jsx)("option",{value:"hindi",children:"Hindi"}),Object(o.jsx)("option",{value:"science",children:"Science"}),Object(o.jsx)("option",{value:"maths",children:"Mathematics"}),Object(o.jsx)("option",{value:"social",children:"Social Science"})]}),Object(o.jsx)("button",{className:"ms-1 btn-sm btn-success me-0",type:"submit",children:"Send Feedback"})]})]})]})}):Object(o.jsx)("div",{className:" my-4 col-11 mx-auto",children:Object(o.jsx)("div",{className:"row p-4 flex-row justify-content-center",children:h.map((function(e){return Object(o.jsx)("div",{className:"col-10  mb-5",children:Object(o.jsxs)("div",{className:"card text-light student-card p-3",children:[Object(o.jsx)("div",{className:"mt-2 mb-2",children:Object(o.jsx)("small",{children:"From : "})})," ",Object(o.jsx)("h5",{className:"text-capitalize mb-3",children:e.name}),Object(o.jsxs)("p",{className:"card-subtitle mb-2 text-info font-weight-light",children:["Posted On : ",e.date]}),Object(o.jsxs)("p",{className:"text-capitalize",children:["To : ","".concat(e.subject)," teacher"]}),Object(o.jsx)("div",{className:"mt-1 text-warning",children:"Feedback : "}),Object(o.jsx)("p",{children:e.feedback})]})})}))})})})}var w=c(32),k=c.n(w);function C(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],d=r[1],b=Object(s.useState)(""),h=Object(i.a)(b,2),m=h[0],u=h[1],x=Object(s.useState)(""),p=Object(i.a)(x,2),f=p[0],g=p[1],v=Object(s.useState)(""),N=Object(i.a)(v,2),S=N[0],y=N[1],w=Object(s.useState)(""),C=Object(i.a)(w,2),F=C[0],U=C[1],I=Object(s.useState)(""),T=Object(i.a)(I,2),D=T[0],P=T[1],E=Object(s.useState)(""),M=Object(i.a)(E,2),R=M[0],A=M[1],L=Object(s.useState)(""),q=Object(i.a)(L,2),_=q[0],z=q[1],B=Object(s.useState)("student"),H=Object(i.a)(B,2),V=(H[0],H[1],Object(s.useState)("")),G=Object(i.a)(V,2),K=(G[0],G[1],Object(s.useState)("")),J=Object(i.a)(K,2),W=J[0],Q=J[1],X=Object(s.useState)("col-6 form-group display-none"),Y=Object(i.a)(X,2);Y[0],Y[1];if(W)return Object(o.jsx)(O.a,{to:"/login"});return Object(o.jsx)("div",{className:"register",children:Object(o.jsx)("section",{children:Object(o.jsx)("form",{onSubmit:function(e){F===D?function(e){e.preventDefault();var t=new FormData;t.append("id",c),t.append("name",l),t.append("phone",m),t.append("dob",f),t.append("email",S),t.append("password",F),t.append("address",R),t.append("profile",_),j.a.post("/api/register",t).then((function(e){alert(e.data),Q(!0)})).catch((function(e){alert(e.response.data)}))}(e):alert("Both passwords not matching. Try again")},children:Object(o.jsx)("div",{className:"container bg-gradient-secondary",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"alert alert-warning text-center my-4 col-11",children:"Use your SATS number as 'User Id' for Registration."}),Object(o.jsxs)("div",{className:"col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col text-center",children:Object(o.jsx)("h1",{children:"Register"})})}),Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsx)("div",{className:"col  mt-4",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"User Id",onChange:function(e){return a(Number(e.target.value))},required:!0})})}),Object(o.jsx)("div",{className:"row align-items-center mt-4",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",onChange:function(e){return d(e.target.value.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "))},required:!0})})}),Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsx)("div",{className:"col mt-4",children:Object(o.jsx)("input",{type:"tel",className:"form-control",placeholder:"Phone",onChange:function(e){return u(e.target.value)},required:!0})}),Object(o.jsx)("div",{className:"col mt-4",children:Object(o.jsx)("input",{type:"text",name:"dob",className:"form-control",placeholder:"Date of Birth",onFocus:function(e){e.target.type="date"},onBlur:function(e){""===e.target.value&&(e.target.type="text")},onChange:function(e){return g(e.target.value)},required:!0})})]}),Object(o.jsx)("div",{className:"row align-items-center mt-4",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",onChange:function(e){return y(e.target.value)},required:!0})})}),Object(o.jsxs)("div",{className:"row align-items-center mt-4",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:function(e){return U(e.target.value)},required:!0})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password",onChange:function(e){return P(e.target.value)},required:!0})})]}),Object(o.jsx)("div",{className:"row align-items-center mt-4",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("textarea",{type:"text",className:"form-control textarea",placeholder:"Residential Address",rows:"4",onChange:function(e){return A(e.target.value)},required:!0})})}),Object(o.jsx)("div",{className:"row align-items-center mt-4",children:Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{className:"mb-1",children:"Profile Picture ( size limit : 4 mb )"}),Object(o.jsx)("input",{type:"file",className:"form-control textarea",accept:"image/png, image/jpg, image/jpeg",required:!0,onChange:function(e){e.target.files[0].size>4194304?(alert("Image size exceeded"),e.target.value=""):new k.a(e.target.files[0],{quality:.6,success:function(e){var t=new File([e],"".concat(c,".jpeg"),{type:e.type});z(t);var s=document.getElementById("preview");s.src=URL.createObjectURL(t),s.className="mt-3"}})}}),Object(o.jsx)("img",{id:"preview",src:"#",className:"display-none",style:{height:"20vw",width:"17vw"}})]})}),Object(o.jsx)("div",{className:"row justify-content-start mt-4",children:Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("div",{className:"form-check",children:Object(o.jsxs)("label",{className:"form-check-label",children:[Object(o.jsx)("input",{type:"checkbox",className:"form-check-input",required:!0}),"I Accept all the Information provided by me is Genuine."]})}),Object(o.jsx)("button",{className:"btn btn-primary mt-4",type:"submit",children:"Submit"})]})})]})]})})})})})}function F(e){var t=e.fun,c=e.setUser,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],l=n[1],d=Object(s.useState)(""),b=Object(i.a)(d,2),h=b[0],m=b[1],u=Object(s.useState)(""),x=Object(i.a)(u,2),p=x[0],f=x[1];return p?Object(o.jsx)(O.a,{to:"/"}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("section",{children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("/api/login",{id:r,password:h}).then((function(e){t(!0),c(e.data),f(!0)})).catch((function(e){alert(e.response.data)}))},children:Object(o.jsx)("div",{className:"container bg-gradient-secondary",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"alert alert-warning text-center my-4 col-11",children:"Use your SATS number as 'User Id' for Registration."}),Object(o.jsxs)("div",{className:"col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col text-center",children:Object(o.jsx)("h1",{children:"Login"})})}),Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsx)("div",{className:"col  mt-4",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"User Id",onChange:function(e){return l(Number(e.target.value))},required:!0})})}),Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsx)("div",{className:"col  mt-4",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:function(e){return m(e.target.value)},required:!0})})}),Object(o.jsx)("div",{className:"row justify-content-start mt-1",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("button",{className:"btn btn-primary mt-4",type:"submit",children:"Submit"})})})]})]})})})})})}function U(e){var t=e.students,c=e.user,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],l=n[1],d=Object(s.useState)("student"),b=Object(i.a)(d,2),h=b[0],m=b[1],u=Object(s.useState)(""),x=Object(i.a)(u,2),O=x[0],p=x[1],f=Object(s.useState)("col-6 form-group display-none"),g=Object(i.a)(f,2),v=g[0],N=g[1];return Object(o.jsxs)("div",{className:"container",children:["teacher"===c.role&&"english"===c.subject?Object(o.jsx)("section",{children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),"teacher"===h&&""===O?alert("Choose Teaching Subject!"):(p(""),j.a.post("/api/enter",{id:r,role:h,subject:O}).then((function(e){alert("inserted")})).catch((function(e){})))},children:Object(o.jsx)("div",{className:"container bg-gradient-secondary",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"alert alert-warning text-center my-4 col-11",children:"Use Student SATS number as 'User Id' for Entry below."}),Object(o.jsxs)("div",{className:"col-11 col-sm-8 col-md-8 col-lg-8 col-xl-6",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col text-center",children:Object(o.jsx)("h1",{children:"Insert Student"})})}),Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsx)("div",{className:"col  mt-4",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"User Id",onChange:function(e){return l(Number(e.target.value))},required:!0})})}),Object(o.jsxs)("div",{className:"row align-items-center mt-4",children:[Object(o.jsx)("div",{className:"col-6 form-group",children:Object(o.jsxs)("select",{className:"form-select",onChange:function(e){m(e.target.value),"teacher"===e.target.value?N("col-6 form-group"):N("col-6 form-group display-none")},children:[Object(o.jsx)("option",{value:"student",defaultValue:"student",children:"Student"}),Object(o.jsx)("option",{value:"teacher",children:"Teacher"}),Object(o.jsx)("option",{value:"head master",children:"Head Master"}),Object(o.jsx)("option",{value:"d group",children:"D Group"}),Object(o.jsx)("option",{value:"clerk",children:"Clerk"})]})}),Object(o.jsx)("div",{className:v,children:Object(o.jsxs)("select",{className:"form-select",onChange:function(e){return p(e.target.value)},required:!0,children:[Object(o.jsx)("option",{children:"Select Teaching Subject"}),Object(o.jsx)("option",{value:"english",children:"English"}),Object(o.jsx)("option",{value:"kannada",children:"Kannada"}),Object(o.jsx)("option",{value:"hindi",children:"Hindi"}),Object(o.jsx)("option",{value:"science",children:"Science"}),Object(o.jsx)("option",{value:"maths",children:"Mathematics"}),Object(o.jsx)("option",{value:"social",children:"Social Science"})]})})]}),Object(o.jsx)("div",{className:"row justify-content-start mt-4",children:Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("button",{className:"btn btn-primary mt-4",type:"submit",children:"Submit"})})})]})]})})})}):Object(o.jsx)(o.Fragment,{}),Object(o.jsx)("div",{className:"row p-4 flex-row justify-content-center",children:t.map((function(e){return Object(o.jsx)("div",{className:"col-10 col-sm-8 col-md-6 col-lg-4 mb-5",children:Object(o.jsx)("div",{className:"card text-light student-card",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{className:"avatar rounded-circle",src:"./images/".concat(e.id,".jpeg"),alt:"User Not Registered"}),Object(o.jsx)("h4",{className:"card-title text-capitalize",children:e.name}),Object(o.jsxs)("p",{className:"card-subtitle mb-2 text-info font-weight-light",children:["Id : ",e.id]}),Object(o.jsxs)("p",{className:"card-subtitle mb-2 text-info font-weight-light text-danger",children:["Role : ",(t=e.role,t.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "))]}),Object(o.jsx)("p",{className:"card-text bg-dark",children:e.email}),"student"!==c.role?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:"Click on the Number below to call"}),Object(o.jsx)("a",{className:"text-light btn-success  btn-sm",href:"tel:".concat(e.phone),children:"Phone : ".concat(e.phone)}),Object(o.jsx)("div",{className:"mt-2 text-warning",children:"Address : "}),Object(o.jsx)("p",{children:"".concat(e.address)})]}):Object(o.jsx)(o.Fragment,{})]})})});var t}))})]})}function I(e){var t=e.students,c=e.user,a=Object(s.useState)({id:"profile",name:"",email:"",phone:"",address:""}),n=Object(i.a)(a,2),r=n[0],l=n[1],j=1;return Object(s.useEffect)((function(){if(t){var e=t.filter((function(e){return e.id==c.id}));e=e[0],j&&(l(e),j=0)}}),[t]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"alert alert-warning text-center mx-5 my-3",children:Object(o.jsx)("h5",{className:"px-4",children:"If you Forget Password or want to Update your Profile Details, Register again with required changes"})}),Object(o.jsx)("div",{className:"col-10 col-sm-8 col-md-6 col-lg-4 mb-5 mx-auto mt-3",children:r?Object(o.jsx)("div",{className:"card text-light student-card",children:Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("img",{className:"avatar rounded-circle",src:"./images/".concat(r.id,".jpeg"),alt:"Student Not Registered"}),Object(o.jsx)("h4",{className:"card-title text-capitalize",children:r.name}),Object(o.jsxs)("p",{className:"card-subtitle mb-2 text-info font-weight-light",children:["Id : ",r.id]}),Object(o.jsx)("p",{className:"card-text bg-dark",children:r.email}),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("a",{className:"text-light btn-success  btn-sm",children:"Phone : ".concat(r.phone)}),Object(o.jsx)("div",{className:"mt-2 text-warning",children:"Address : "}),Object(o.jsx)("p",{children:"".concat(r.address)})]})]})}):Object(o.jsx)(o.Fragment,{})})]})}function T(e){var t=e.loginStatus,c=e.user,s=e.fun,a=e.setUser,n=e.students,r=e.AllUsers,i=e.feedbacks;return Object(o.jsx)("div",{id:"main",children:Object(o.jsxs)(O.d,{children:[Object(o.jsx)(O.b,{path:"/",exact:!0,children:Object(o.jsx)(g,{user:c,students:r,loginStatus:t})}),Object(o.jsx)(O.b,{path:"/courses",children:Object(o.jsx)(v,{})}),Object(o.jsx)(O.b,{path:"/results",children:t?Object(o.jsx)(S,{students:n,user:c}):Object(o.jsx)(F,{fun:s,setUser:a})}),Object(o.jsx)(O.b,{path:"/feedback",children:t?Object(o.jsx)(y,{user:c,feedbacks:i}):Object(o.jsx)(F,{fun:s,setUser:a})}),Object(o.jsx)(O.b,{path:"/students",children:t?Object(o.jsx)(U,{students:n,user:c}):Object(o.jsx)(F,{fun:s,setUser:a})}),Object(o.jsx)(O.b,{path:"/profile",children:t?Object(o.jsx)(I,{students:r,user:c}):Object(o.jsx)(F,{fun:s,setUser:a})}),Object(o.jsx)(O.b,{path:"/register",children:Object(o.jsx)(C,{})}),Object(o.jsx)(O.b,{path:"/login",children:Object(o.jsx)(F,{fun:s,setUser:a})})]})})}var D=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(i.a)(n,2),l=r[0],h=r[1],m=Object(s.useState)([]),u=Object(i.a)(m,2),O=u[0],p=u[1],f=Object(s.useState)([]),g=Object(i.a)(f,2),v=g[0],N=g[1],S=Object(s.useState)({name:"Guest User",id:"profile",role:"Visitor",subject:""}),y=Object(i.a)(S,2),w=y[0],k=y[1],C=!1;return Object(s.useEffect)((function(){C||(j.a.get("/api/loginstatus").then((function(e){k({name:e.data.name,id:e.data.id,role:e.data.role,subject:e.data.subject}),a(!0)})).catch((function(e){})),j.a.get("api/students").then((function(e){var t;p(e.data),t=e.data.filter((function(e){return"student"===e.role})),h(t)})).catch((function(e){})),j.a.get("api/feedbacks").then((function(e){N(e.data)})).catch((function(e){}))),C=!0}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)(b,{setLoginStatus:a,loginStatus:c,setUser:k}),Object(o.jsxs)("div",{className:"flex-row",id:"app-container",children:[Object(o.jsx)(x,{}),Object(o.jsx)(T,{loginStatus:c,user:w,fun:a,setUser:k,students:l,AllUsers:O,feedbacks:v})]})]})})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root"))}},[[62,1,2]]]);