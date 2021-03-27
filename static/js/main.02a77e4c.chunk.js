(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{121:function(e,t,c){},125:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(24),l=c.n(s),i=c(45),a=c(48),o=c(98),j=(c(121),c(31)),d=c(150),u=(c(122),"SET_COLLAPSED"),h="TOGGLE_COLLAPSED",b="EXPAND_ALL",m="COLLAPSE_ALL",O="SET_SECTION_FILTERS",f="SET_TECH_FILTERS",p="SET_TECH_ORDER",x=function(e){return{type:f,payload:{filters:e}}},v=function(e){var t=null,c="pending",n=e.then((function(e){c="success",t=e}),(function(e){c="error",t=e}));return function(){switch(c){case"pending":throw n;case"error":throw t;default:return t}}},g=c(109),N=c(146),y=c(85),_=c(153),k=c(5),E={GithubOutlined:_.a},S=function(e){var t=e.contact;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N.a,{className:"resume-page-header",title:t.name,subTitle:t.blurb,extra:[].concat(Object(g.a)((t.urls||[]).map((function(e){var t=E[e.icon];return Object(k.jsxs)(y.a,{href:e.url,children:[E[e.icon]&&Object(k.jsx)(t,{})," ",e.label||e.url]},e.url)}))),[Object(k.jsx)(y.a,{href:"tel:".concat(t.phone),children:t.phone},"phone"),Object(k.jsx)(y.a,{href:"mailto:".concat(t.email),type:"primary",children:t.email},"email")])}),Object(k.jsxs)("div",{className:"print-header",children:[Object(k.jsx)("span",{className:"print-name",children:t.name}),Object(k.jsx)("a",{href:"tel:".concat(t.phone),children:t.phone}),Object(k.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})]}),Object(k.jsx)("div",{className:"print-header",children:(t.urls||[]).map((function(e){var t=E[e.icon];return Object(k.jsxs)("a",{href:e.url,children:[E[e.icon]&&Object(k.jsx)(t,{})," ",e.label||e.url]},e.url)}))})]})},T=r.a.memo(S),C=c(148),w=c(147),I=c(149),L=function(e){var t=e.tech,c=void 0===t?[]:t;return c.length?Object(k.jsxs)("div",{children:["Technology used:",Object(k.jsx)("span",{className:"tech",children:c.join(", ")})]}):null},P=r.a.memo(L),D=(c(125),C.a.Title),F=C.a.Text,A=function(e){var t=e.projects,c=e.filters,n=e.collapsed,r=e.collapseCallback,s=t.filter((function(e){return!c.length||!e.tech||e.tech.some((function(e){return c.includes(e)}))}));return s.length?Object(k.jsx)(w.a,{size:"small",title:Object(k.jsx)(D,{level:2,children:"Projects"}),children:Object(k.jsx)(I.b,{dataSource:s,renderItem:function(e){return Object(k.jsx)(I.b.Item,{children:Object(k.jsx)(I.b.Item.Meta,{title:Object(k.jsxs)("div",{className:"project-container",onClick:function(){r(e.id)},children:[Object(k.jsx)("span",{className:"project-name",children:Object(k.jsx)(F,{strong:!0,children:e.name})}),e.url&&Object(k.jsx)("a",{href:e.url,onClick:function(e){return e.stopPropagation()},target:"_blank",rel:"noopener noreferrer",children:e.url}),Object(k.jsx)("span",{className:"date",children:e.date})]}),description:Object(k.jsxs)(k.Fragment,{children:[!n[e.id]&&Object(k.jsx)("div",{children:e.description}),!n[e.id]&&Object(k.jsx)(P,{tech:e.tech})]})})})}})}):null},R=r.a.memo(A),z=(c(138),C.a.Title),X=C.a.Text,V=function(e){var t=e.schools;return Object(k.jsx)(w.a,{size:"small",title:Object(k.jsx)(z,{level:2,children:"Education"}),children:Object(k.jsx)(I.b,{dataSource:t,renderItem:function(e){return Object(k.jsx)(I.b.Item,{className:"school",children:Object(k.jsx)(I.b.Item.Meta,{title:Object(k.jsxs)("div",{className:"school-container",children:[Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{className:"school-name",children:Object(k.jsx)(X,{strong:!0,children:e.school})}),", ",Object(k.jsx)("span",{className:"location",children:e.location})]}),Object(k.jsx)("span",{className:"date",children:e.date})]}),description:e.results})})}})})},G=r.a.memo(V),M=c(151),B="Project Blurbs",H="Summary",J="Skills",U="Experience",Y="Other Projects",q="Education",K=(c(96),function(e){var t=e.tech,c=void 0===t?[]:t;return c.length?Object(k.jsx)("div",{className:"project-tech-box",children:Object(k.jsx)(P,{tech:c})}):null}),Q=r.a.memo(K),W=function(e){var t=e.highlight,c=e.filters,n=void 0===c?[]:c;return n.length&&t.tech&&!t.tech.some((function(e){return n.includes(e)}))?null:Object(k.jsxs)("li",{children:[t.blurb,Object(k.jsx)(Q,{tech:t.tech})]},t.blurb)},Z=r.a.memo(W),$=function(e){var t=e.project,c=e.collapseCallback,n=e.collapsed,s=e.sections,l=e.projects,i=e.filters,a=t.project;return Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)("div",{className:"job-project",onClick:function(){c(a)},children:Object(k.jsxs)("div",{className:"job-project-container",children:[Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{className:"job-project-name",children:a}),Object(k.jsx)("span",{className:"project-role",children:t.role}),Object(k.jsxs)("span",{className:"project-members",children:[t.members," person team"]})]}),t.url&&Object(k.jsx)("span",{className:"float-right",children:t.url.map((function(e){return Object(k.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:[" ",e]},e)}))}),Object(k.jsx)("div",{className:"date",children:Object(k.jsx)("div",{className:"float-right",children:t.date})})]})},"".concat(a,"-info")),l[a]&&s[B]&&Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"project-blurb",children:l[a].blurb}),l[a].url&&Object(k.jsx)("div",{children:Object(k.jsx)("ul",{style:{listStyle:"none"},className:"float-right",children:l[a].url.map((function(e){return Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e})},e)}))})})]},"".concat(a,"-blurb")),t.highlights&&!n[t.project]&&Object(k.jsx)("div",{className:"project-highlight",children:Object(k.jsx)("div",{className:"highlight",children:Object(k.jsx)("ul",{children:t.highlights.map((function(e,t){return Object(k.jsx)(Z,{highlight:e,filters:i},t)}))})})},"".concat(a,"-highlights"))]},a)},ee=r.a.memo($),te=C.a.Title,ce=function(e){var t=e.experience,c=e.tech_filters,n=e.sections,r=e.projects,s=e.collapsed,l=e.collapseCallback;return Object(k.jsx)(w.a,{size:"small",title:Object(k.jsx)(te,{level:2,children:"Experience"}),children:Object(k.jsx)(M.a,{children:t.map((function(e){return Object(k.jsxs)(M.a.Item,{color:"present"===e.duration.to?"green":void 0,children:[Object(k.jsxs)("div",{className:"job-container",onClick:function(){l(e.id)},children:[Object(k.jsxs)("span",{className:"job-name",children:[Object(k.jsx)("span",{className:"employer",children:e.employer}),Object(k.jsxs)("span",{className:"location",children:[", ",e.location]})]}),e.url&&Object(k.jsx)("a",{href:e.url,onClick:function(e){return e.stopPropagation()},target:"_blank",rel:"noopener noreferrer",children:e.url}),Object(k.jsxs)("span",{className:"duration",children:[e.duration.from," - ",e.duration.to]})]}),e.title&&e.title.map((function(e){return Object(k.jsx)("div",{children:Object(k.jsx)("div",{className:"job-role",children:e})},e)})),e.projects&&!s[e.id]&&e.projects.map((function(e){return Object(k.jsx)(ee,{project:e,collapsed:s,sections:n,projects:r,collapseCallback:l,filters:c},e.project)}))]},e.id)}))})})},ne=r.a.memo(ce),re=C.a.Title,se=function(e){var t=e.summary;return Object(k.jsx)(w.a,{size:"small",title:Object(k.jsx)(re,{level:2,children:"Summary"}),children:t.map((function(e,t){return Object(k.jsx)("p",{children:e},t)}))})},le=r.a.memo(se),ie=(c(139),C.a.Title),ae=C.a.Text,oe=function(e){var t=e.skill,c=t.blurb.since?"".concat((new Date).getFullYear()-t.blurb.since," years"):t.blurb.duration;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("span",{className:"skill-duration",children:c}),t.blurb.level&&Object(k.jsx)("span",{className:"skill-level",children:t.blurb.level})]})},je=r.a.memo(oe),de=function(e){var t=e.set,c=e.filters,n=void 0===c?[]:c;return t.map((function(e){var t=e.items.filter((function(e){return!n.length||!e.tech||e.tech.some((function(e){return n.includes(e)}))}));return Object(k.jsx)(I.b,{size:"small",header:Object(k.jsx)(ie,{level:4,children:e.type}),dataSource:t,renderItem:function(e){return Object(k.jsxs)(I.b.Item,{className:"skill-item",children:[Object(k.jsx)("span",{className:"skill-label",children:Object(k.jsx)(ae,{strong:!0,children:e.label})}),Object(k.jsx)("span",{className:"skill-value",children:Object(k.jsx)(je,{skill:e})})]})}},e.type)}))},ue=r.a.memo(de),he=function(e){var t=e.skills,c=e.filters,n=t["Professional Skills"],r=t["Additional Skills"];return Object(k.jsx)(w.a,{size:"small",title:Object(k.jsx)(ie,{level:2,children:"Skills"}),children:Object(k.jsxs)("div",{className:"skills-container",children:[Object(k.jsx)(ue,{set:n,filters:c}),Object(k.jsx)(ue,{set:r,filters:c})]})})},be=r.a.memo(he),me=c(69),Oe=(c(140),me.a.Option),fe=function(){var e=Object(i.c)((function(e){return e.filters})),t=e.section_order,c=e.section_filters,n=e.tech_filters,r=e.tech_order,s=Object(i.b)();return Object(k.jsxs)("div",{className:"filter-container",children:[Object(k.jsx)("div",{className:"instructions",children:"You're busy. Filter down the resume to only show what you want."}),Object(k.jsxs)("div",{className:"filter-section",children:[Object(k.jsx)("div",{className:"filter-section-label",children:"Resume sections:"}),Object(k.jsx)(me.a,{mode:"multiple",allowClear:!0,placeholder:"Sections",defaultValue:c,onChange:function(e){return s(function(e){return{type:O,payload:{filters:e}}}(e))},style:{width:"100%"},children:t.map((function(e){return Object(k.jsx)(Oe,{children:e},e)}))})]}),Object(k.jsxs)("div",{className:"filter-section",children:[Object(k.jsx)("div",{className:"filter-section-label",children:"Technology:"}),Object(k.jsx)(me.a,{mode:"multiple",allowClear:!0,placeholder:"Technology",defaultValue:n,onChange:function(e){return s(x(e))},style:{width:"100%"},children:r.map((function(e){return Object(k.jsx)(Oe,{children:e},e)}))})]}),Object(k.jsx)("div",{className:"filter-section",children:Object(k.jsxs)("div",{className:"filter-buttons",children:[Object(k.jsx)(y.a,{onClick:function(){return s({type:b})},children:"Expand all sub-sections"}),Object(k.jsx)(y.a,{onClick:function(){return s({type:m})},children:"Collapse all sub-sections"})]})}),Object(k.jsx)("div",{className:"instructions",children:"Click on company names and projects to expand/collapse individual jobs, if you want to see the old stuff from years ago."})]})},pe=r.a.memo(fe),xe=(c(141),v(fetch("./resume.json").then((function(e){return e.json()}))));function ve(e){return e.includes(U)&&e.includes(J)?"3fr 1fr":"1fr"}var ge=function(){var e=xe();document.title=e.contact.name;var t=Object(i.c)((function(e){var t=e.filters,c=e.collapsed;return Object(j.a)(Object(j.a)({},t),{},{collapsed:c})})),c=t.tech_filters,r=void 0===c?[]:c,s=t.section_filters,l=void 0===s?[]:s,a=t.collapsed,o=void 0!==a&&a,d=t.tech_order,b=void 0===d?[]:d,m=Object(i.b)();Object(n.useEffect)((function(){var t;if(!Object.keys(r).length&&e.active_tech_filters&&m(x(e.active_tech_filters)),!b.length&&e.tech&&m((t=e.tech,{type:p,payload:{order:t}})),!Object.keys(o).length){var c={};e.experience.forEach((function(e){c[e.id]=e.collapsed||!1,e.projects&&e.projects.forEach((function(e){c[e.project]=e.collapsed||!1}))})),e.other.forEach((function(e){c[e.id]=e.collapsed||!1})),m(function(e){return{type:u,payload:e}}(c))}}),[o,e,m,r,b]);var O=Object(n.useMemo)((function(){return function(e){return m(function(e){return{type:h,payload:e}}(e))}}),[m]),f={[q]:Object(k.jsx)(G,{filters:r,schools:e.education},"education"),[U]:Object(k.jsx)(ne,{filters:r,experience:e.experience,projects:e.projects,sections:l,collapsed:o,collapseCallback:O},"experience"),[Y]:Object(k.jsx)(R,{filters:r,projects:e.other,collapsed:o,collapseCallback:O},"projects"),[J]:Object(k.jsx)(be,{filters:r,skills:e.skills},"skills"),[H]:Object(k.jsx)(le,{filters:r,summary:e.summary},"summary")};return[Object(k.jsx)(T,{contact:e.contact},"header"),Object(k.jsx)(pe,{},"tech_filters"),l.includes(H)&&f.Summary,(l.includes(U)||l.includes(J))&&Object(k.jsxs)("div",{className:"resume-container",style:{gridTemplateColumns:ve(l)},children:[Object(k.jsx)("div",{className:"left-column",children:l.includes(U)&&f.Experience}),Object(k.jsx)("div",{className:"right-column",children:l.includes(J)&&f.Skills})]},"resume-container"),l.includes(Y)&&f[Y],l.includes(q)&&f.Education]},Ne=r.a.memo(ge),ye=function(){return Object(k.jsx)(n.Suspense,{fallback:Object(k.jsxs)("div",{children:[Object(k.jsx)(d.a,{active:!0}),Object(k.jsx)(d.a,{active:!0}),Object(k.jsx)(d.a,{active:!0}),Object(k.jsx)(d.a,{active:!0})]}),children:Object(k.jsx)(Ne,{})})},_e=r.a.memo(ye),ke=[H,J,U,Y,q,B],Ee={section_order:ke,section_filters:ke.filter((function(e){return e!==B})),tech_order:[],tech_filters:[]},Se={},Te=Object(a.c)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var c=t.payload.filters;return Object(j.a)(Object(j.a)({},e),{},{section_filters:c});case f:var n=t.payload.filters;return Object(j.a)(Object(j.a)({},e),{},{tech_filters:n});case p:var r=t.payload.order;return Object(j.a)(Object(j.a)({},e),{},{tech_order:r});default:return e}},collapsed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;case h:return Object(j.a)(Object(j.a)({},e),{},{[t.payload]:!e[t.payload]});case b:return Object.keys(e).reduce((function(e,t){return e[t]=!1,e}),{});case m:return Object.keys(e).reduce((function(e,t){return e[t]=!0,e}),{});default:return e}}}),Ce=Object(a.a)(o.a)(a.d)(Te,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(k.jsx)(i.a,{store:Ce,children:Object(k.jsx)(_e,{})}),document.getElementById("root"))},96:function(e,t,c){}},[[142,1,2]]]);
//# sourceMappingURL=main.02a77e4c.chunk.js.map