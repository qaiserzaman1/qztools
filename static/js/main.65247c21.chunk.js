(this["webpackJsonpawesome-search-react"]=this["webpackJsonpawesome-search-react"]||[]).push([[0],{107:function(e,t,s){e.exports={AwesomeListMenu:"AwesomeListMenu_AwesomeListMenu__u0wy6"}},109:function(e,t,s){e.exports={AwesomeRwdMenu:"AwesomeRwdMenu_AwesomeRwdMenu__2Ejey"}},110:function(e,t,s){e.exports={AwesomeLists:"AwesomeLists_AwesomeLists__1huAZ"}},111:function(e,t,s){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},250:function(e,t){},252:function(e,t){},332:function(e,t,s){},333:function(e,t,s){},334:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(106),r=s.n(n),o=s(20),i=s(6),u=s(7),l=s(13),h=s(12),d=s(16),j=s(107),m=s.n(j),p=s(1),b=function(e){var t=e.topics,s=e.topicOnClickHandler;return Object(p.jsx)("div",{className:"menu ".concat(m.a.AwesomeListMenu),children:t.map((function(e){return Object(p.jsx)(d.b,{className:"menu-item",to:"/",onClick:function(){s(e)},children:e},e)}))})},O=s(109),w=s.n(O),f=function(e){var t=e.topics,s=e.topicOnClickHandler;return Object(p.jsx)("div",{className:"menu ".concat(w.a.AwesomeRwdMenu),children:t.map((function(e){return Object(p.jsx)(d.b,{className:"menu-item",to:"/",onClick:function(){s(e)},children:e},e)}))})},x=s(110),v=s.n(x),g=function(e){var t=e.topic,s=e.subjects;return s.sort((function(e,t){var s=e.name.toUpperCase(),a=t.name.toUpperCase();return s<a?-1:s>a?1:0})),Object(p.jsxs)("div",{className:v.a.AwesomeLists,children:[Object(p.jsx)("div",{className:"alert alert-success",children:"Lists are sorted alphabetically! You can easily find it :)"}),Object(p.jsx)("h1",{children:t}),s.map((function(e,t){return Object(p.jsxs)(d.b,{style:{margin:"10px",display:"inline-block"},to:"/".concat(e.repo),children:["# ",e.name," "]},e+t)}))]})},_=s(3),A=s(65),S=s.n(A),y=Object(_.e)((function(e){return Object(p.jsx)("div",{className:S.a.AwesomeInput,children:Object(p.jsxs)("fieldset",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"subject",children:"Awesome Search"}),Object(p.jsx)("input",{id:"subject",type:"text",placeholder:"Try To Search Node.js",className:"form-control",onChange:e.searchOnchange,value:e.value,onFocus:e.searchInputOnFocus}),e.showResult?Object(p.jsx)("div",{className:S.a.SearchResult,children:Object(p.jsxs)("ul",{children:[0===e.searchResult.length?Object(p.jsx)("span",{children:"Please input something :)"}):null,e.searchResult.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/".concat(e.item.repo),children:e.item.name})},e.item.name+t)}))]})}):null]})})})),k=s(66),R=s.n(k),M=(s(67),s(112)),C=s(35),N=s(37),H=(s(192),s(36)),I=s.n(H),B=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={_html:"<br/><b># Waiting for content loading...</b>",stars:0,updateAt:null,user:"",repo:""},e}return Object(u.a)(s,[{key:"shouldComponentUpdate",value:function(){return this.state.user!==this.props.match.params.user&&this.state.repo!==this.props.match.params.repo}},{key:"componentDidMount",value:function(){var e=this;I.a.get("https://api.github.com/repos/".concat(this.props.match.params.user,"/").concat(this.props.match.params.repo,"/readme"),{headers:{Accept:"application/vnd.github.v3.html"}}).then((function(t){e.setState({_html:t.data,user:e.props.match.params.user,repo:e.props.match.params.repo})})).catch((function(t){e.setState({_html:"Error when loading repo ".concat(t.message)})})),I.a.get("https://api.github.com/repos/".concat(this.props.match.params.user,"/").concat(this.props.match.params.repo)).then((function(t){e.setState({stars:t.data.stargazers_count,updateAt:t.data.pushed_at})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:R.a.AwesomeReadme,children:[Object(p.jsxs)("div",{className:R.a.ReadmeInfo,children:[Object(p.jsx)("a",{href:"https://github.com/".concat(this.props.match.params.user,"/").concat(this.props.match.params.repo),children:"Go to original repository"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{icon:N.c})," stars:",this.state.stars]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a,{icon:N.b})," Last update at"," ",Object(p.jsx)(M.a,{datetime:this.state.updateAt})]})]}),Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state._html}})]})}}]),s}(a.Component),L=function(e){return Object(p.jsx)("div",{className:"loading"})},T=s(113),E=s(111),F=s.n(E),U=function(e){var t=e.show?Object(p.jsx)("div",{onClick:e.closeSearchModal,className:F.a.Backdrop}):null;return t},K=(s(243),s(47)),D=s.n(K),P=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={errorMessage:null,subjects:null,selectedSubject:"Platforms",subjectsArray:[],search:"",searchResult:[],showResult:!1,showToc:!1,showMenu:!1,md:""},e.getSubjectEntries=function(){I.a.get("https://raw.githubusercontent.com/lockys/awesome.json/master/awesome/awesome.json").then((function(t){e.setState({subjects:t.data,errorMessage:""});var s=Object.keys(t.data).map((function(e){return t.data[e]})).reduce((function(e,t){return e.concat(t)}),[]);e.setState({subjectsArray:s}),e.state.subjects||e.setState({errorMessage:"There was an error. Unable to load the Awesome subjects."})})).catch((function(t){e.setState({errorMessage:"There was an error. Unable to load the Awesome subjects: ".concat(t,".")})}))},e.topicOnClickHandler=function(t){e.setState({selectedSubject:t,showToc:!1,showMenu:!1})},e.searchInputOnChangeHandler=function(t){e.setState({search:t.target.value});var s=new T.a(e.state.subjectsArray,{keys:["name"]}).search(t.target.value);e.setState({searchResult:s.slice(0,20)})},e.searchInputOnFocusHandler=function(){e.setState({showResult:!0})},e.searchInputOnCloseHandler=function(){e.setState({showResult:!1})},e.showTocHandler=function(){e.setState((function(e){return{showToc:!e.showToc}}))},e.setMdHandler=function(t){e.setState({md:t})},e.burgerButtonClickHandler=function(){e.setState((function(e){return{showMenu:!e.showMenu}}))},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getSubjectEntries()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:D.a.AwesomeSearch,children:[Object(p.jsx)("div",{className:"grid",children:Object(p.jsxs)("div",{className:"cell -12of12",children:[Object(p.jsx)(y,{searchOnchange:this.searchInputOnChangeHandler,value:this.state.search,searchResult:this.state.searchResult,searchInputOnFocus:this.searchInputOnFocusHandler,showResult:this.state.showResult}),Object(p.jsx)("div",{className:D.a.BurgerButton,onClick:this.burgerButtonClickHandler,children:Object(p.jsx)(C.a,{icon:N.a})}),Object(p.jsx)(_.a,{path:"/:user/:repo",render:function(e){return null}})]})}),this.state.subjects?Object(p.jsxs)("div",{className:"grid",children:[Object(p.jsxs)("div",{className:"cell -2of12",style:{width:"100%"},children:[this.state.showMenu?Object(p.jsx)(f,{topics:Object.keys(this.state.subjects),topicOnClickHandler:this.topicOnClickHandler}):null,Object(p.jsx)(b,{topics:Object.keys(this.state.subjects),topicOnClickHandler:this.topicOnClickHandler})]}),Object(p.jsxs)("div",{className:"cell -10of12",style:{width:"100%"},children:[Object(p.jsx)(_.a,{path:"/",exact:!0,render:function(){return Object(p.jsx)(g,{topic:e.state.selectedSubject,subjects:e.state.subjects[e.state.selectedSubject]})}}),Object(p.jsx)(_.a,{path:"/:user/:repo",render:function(t){return Object(p.jsx)(B,Object(o.a)({setMdHandler:e.setMdHandler},t),t.match.params.repo)}}),null]}),Object(p.jsx)(U,{show:this.state.showResult,closeSearchModal:this.searchInputOnCloseHandler})]}):Object(p.jsx)(L,{})]})}}]),s}(a.Component),Y=Object(_.e)(P);s(332);var G=function(){return Object(p.jsx)(d.a,{basename:"/AwesomeSearchReact",children:Object(p.jsx)("div",{className:"hack",children:Object(p.jsx)(Y,{})})})};s(333);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root"))},47:function(e,t,s){e.exports={AwesomeSearch:"AwesomeSearch_AwesomeSearch__2VueG",ReadmeCategory:"AwesomeSearch_ReadmeCategory__1K-5E",BurgerButton:"AwesomeSearch_BurgerButton__334Ks",TocButton:"AwesomeSearch_TocButton__k5yK-",StarButton:"AwesomeSearch_StarButton__2gOqY"}},65:function(e,t,s){e.exports={AwesomeInput:"AwesomeInput_AwesomeInput__4uL0v",SearchResult:"AwesomeInput_SearchResult__3P019"}},66:function(e,t,s){e.exports={AwesomeReadme:"AwesomeReadme_AwesomeReadme__24nUX",ReadmeInfo:"AwesomeReadme_ReadmeInfo__2gfYD"}}},[[334,1,2]]]);
//# sourceMappingURL=main.65247c21.chunk.js.map