(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{167:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(55),s=n.n(i),l=(n(167),n(168),n(130)),r=n(87),o=n(89),d=n(119),j=n(120),h=n(123),b=n(122),u=n(214),O=n(39),m=n(215),x=n(208),p=n(216),f=n(211),k=n(206),v=n(207),g=n(209),C=n(212),y=n(210),I=n(83),w=n(10),S=n(150),F=n.n(S),T=n(217),N=n(5);var z=function(e){return Object(N.jsx)(f.a.Item,{children:Object(N.jsxs)("h2",{children:[Object(N.jsx)(T.a,{id:e.title,defaultChecked:e.completed})," "+e.title]})})},A=[],B=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={activeItem:"all",animation:"swing down",duration:1e3,visible:!1,name:"",completed:!1,tasklist:[],apiFetched:!1},e.handleVisibility=function(){e.setState((function(e){return{visible:!e.visible}}))},e.handleChange=function(t,n){var a=n.name,c=n.value;n.completed;e.setState(Object(o.a)({},a,c),(function(){}))},e.handleSubmit=function(){var t=e.state,n=t.name,a=t.completed,c=t.tasklist;e.setState({tasklist:[].concat(Object(r.a)(c),[{id:c.length+1,title:n,completed:a,userId:c.length+1}])})},e.FetchNow=function(){F.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){A=t.data,e.setState({tasklist:[].concat(Object(r.a)(e.state.tasklist),Object(r.a)(A)),apiFetched:!0})}))},e.handleItemClick=function(t,n){var a=n.name;e.setState({activeItem:a})},e.handleCheckClick=function(t){var n=e.state.tasklist.map((function(e){return e.title===t.target.id?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}));e.setState({tasklist:Object(r.a)(n)})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeItem,n=this.state.name;return Object(N.jsxs)(I.a,{children:[Object(N.jsxs)(g.a,{stackable:!0,color:"teal",inverted:!0,size:"huge",children:[Object(N.jsx)(g.a.Item,{as:I.b,to:"/all",name:"all",active:"all"===t,onClick:this.handleItemClick}),Object(N.jsx)(g.a.Item,{as:I.b,to:"/finished",name:"finished",active:"finished"===t,onClick:this.handleItemClick}),Object(N.jsx)(g.a.Item,{as:I.b,to:"/todo",name:"todo",active:"todo"===t,onClick:this.handleItemClick}),Object(N.jsx)(g.a.Item,{as:I.b,to:"/forfun",name:"have fun",active:"forfun"===t,onClick:this.handleItemClick,position:"right"})]}),Object(N.jsxs)(u.a,{stackable:!0,columns:2,children:[Object(N.jsx)(u.a.Column,{textAlign:"center",children:Object(N.jsxs)(C.a,{animated:"fade",color:"teal",onClick:this.handleVisibility,children:[Object(N.jsx)(C.a.Content,{visible:!0,children:Object(N.jsx)(O.a,{name:"add circle"})}),Object(N.jsx)(C.a.Content,{hidden:!0,children:"Add task"})]})}),Object(N.jsx)(u.a.Column,{textAlign:"center",children:Object(N.jsxs)(C.a,{animated:"fade",color:"teal",onClick:this.FetchNow,id:"fetchButton",children:[Object(N.jsx)(C.a.Content,{visible:!0,children:Object(N.jsx)(O.a,{name:"arrow circle down"})}),Object(N.jsx)(C.a.Content,{hidden:!0,children:"Fetch"})]})})]}),Object(N.jsx)(y.a.Group,{animation:this.state.animation,duration:this.state.duration,children:this.state.visible&&Object(N.jsx)("div",{id:"formhere",children:Object(N.jsx)(m.a,{children:Object(N.jsx)(u.a,{centered:!0,children:Object(N.jsx)(x.a,{id:"formhere",onSubmit:this.handleSubmit,children:Object(N.jsxs)(x.a.Group,{children:[Object(N.jsx)(x.a.Input,{placeholder:"Task Name",required:!0,name:"name",value:n,onChange:this.handleChange,color:"teal"}),Object(N.jsx)(x.a.Button,{color:"teal",children:Object(N.jsx)(O.a,{name:"check circle",fitted:!0})})]})})})})})}),Object(N.jsx)(w.a,{path:"/all",exact:!0,render:function(){var t={backgroundColor:"lightgreen"},n={backgroundColor:"tomato"};return Object(N.jsxs)("div",{children:[Object(N.jsx)(p.a,{as:"h1",children:"All Tasks"}),Object(N.jsx)(f.a,{size:"huge",style:{overflow:"auto",maxHeight:700},children:e.state.tasklist.map((function(a){return Object(N.jsx)(m.a,{style:!0===a.completed?t:n,onChange:e.handleCheckClick,children:Object(N.jsx)(z,{title:a.title,completed:a.completed})},a.title)}))})]})}}),Object(N.jsx)(w.a,{path:"/forfun",exact:!0,render:function(){return Object(N.jsxs)("div",{style:{paddingTop:20},children:[Object(N.jsxs)(m.a,{inverted:!0,children:[Object(N.jsx)(p.a,{children:"Ever heard of the procrastinator monkey?"}),Object(N.jsx)(k.a,{id:"arj7oStGLkU",placeholder:"https://hygger.io/wp-content/uploads/2019/02/4.png",source:"youtube"})]}),Object(N.jsxs)(m.a,{inverted:!0,children:[Object(N.jsx)(p.a,{children:"Netflix? Now we're talking!"}),Object(N.jsx)(k.a,{id:"KchhsRpocYc",placeholder:"https://hygger.io/wp-content/uploads/2019/02/4.png",source:"youtube"})]})]})}}),Object(N.jsx)(w.a,{path:"/finished",exact:!0,render:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(p.a,{as:"h1",children:"Finished Tasks"}),Object(N.jsx)(f.a,{size:"huge",style:{overflow:"auto",maxHeight:700},children:e.state.tasklist.filter((function(e){return!0===e.completed})).map((function(t){return Object(N.jsx)(m.a,{style:{backgroundColor:"lightgreen"},onChange:e.handleCheckClick,children:Object(N.jsx)(z,{title:t.title,completed:t.completed})},t.title)}))})]})}}),Object(N.jsx)(w.a,{path:"/todo",exact:!0,render:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(p.a,{as:"h1",children:"Tasks to do..."}),Object(N.jsx)(f.a,{size:"huge",style:{overflow:"auto",maxHeight:700},children:e.state.tasklist.filter((function(e){return!1===e.completed})).map((function(t){return Object(N.jsx)(m.a,{style:{backgroundColor:"tomato"},className:"atask",onChange:e.handleCheckClick,children:Object(N.jsx)(z,{title:t.title,completed:t.completed})},t.title)}))})]})}})]})}}]),n}(a.Component),G=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(N.jsxs)("div",{className:"ui very raised padded text three column container segment",id:"top",children:[Object(N.jsxs)(m.a,{children:[Object(N.jsxs)(p.a,{as:"h1",size:"huge",children:[Object(N.jsx)(O.a,{bordered:!0,inverted:!0,circular:!0,color:"teal",name:"hand peace outline"}),Object(N.jsxs)(p.a.Content,{children:["Task Manager",Object(N.jsxs)(p.a.Subheader,{children:["Procrastinate. We're here to see that you do",Object(N.jsx)(O.a,{name:"smile outline"})]})]})]}),Object(N.jsx)(v.a,{})]}),Object(N.jsx)(B,{})]})}}]),n}(a.Component),H=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsx)(G,{})})}}]),n}(a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,218)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(H,{})}),document.getElementById("root")),L()}},[[194,1,2]]]);
//# sourceMappingURL=main.e712fc0e.chunk.js.map