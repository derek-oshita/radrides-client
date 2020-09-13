(this["webpackJsonpradrides-client"]=this["webpackJsonpradrides-client"]||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=a(3),i=a(1),s=function(){return c.a.createElement("div",{id:"homePic"},c.a.createElement("h1",{style:{color:"#13b0cc"}},"Rad Rides"),c.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p180x540/117445408_3197235657029717_1929237182400864772_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=eqOcq-WJUj0AX_p3XCB&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=fd461b770aa2c026deb15d17ce6b568d&oe=5F710F2D",alt:""}))},m=a(4),u=a(8),h=a(10),d=a(9),p="http://localhost:4000/api/v1/cars",E=function e(){Object(m.a)(this,e)};E.getAllCars=function(){return fetch(p).then((function(e){return e.json()}))},E.getCarById=function(e){return fetch("".concat(p,"/").concat(e)).then((function(e){return e.json()}))},E.createCar=function(e){return fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},E.updateCar=function(e,t){return fetch("".concat(p,"/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},E.deleteCar=function(e){return fetch("".concat(p,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))};var f=E;a(26);var b=Object(i.f)((function(e){var t=e.car;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"/cars/".concat(t._id)},c.a.createElement("div",{className:"car-card"},c.a.createElement("section",{className:"image-wrapper"},c.a.createElement("img",{src:t.carPicUrl,alt:t.make&&t.model,height:"100"})),c.a.createElement("section",{className:"content-wrapper"},c.a.createElement("h4",null,t.make," ",t.model)))))}));a(32);var v=function(e){var t=e.cars.map((function(e){return c.a.createElement(b,{key:e._id,car:e,list:!0})}));return c.a.createElement("div",{className:"cars-container"},t)},y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={cars:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getAllCars().then((function(t){console.log(t),e.setState({cars:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement(v,{cars:this.state.cars})}}]),a}(c.a.Component);a(33);var g=Object(i.f)((function(e){var t=e.car;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"/cars/".concat(t._id)},c.a.createElement("div",{className:"car-card"},c.a.createElement("section",{className:"image-wrapper"},c.a.createElement("img",{src:t.carPicUrl,alt:t.make&&t.model,height:"100"})),c.a.createElement("section",{className:"content-wrapper"},c.a.createElement("h4",null,t.make," ",t.model)))),c.a.createElement("div",{className:"car-card-actions",style:{color:"#13b0cc"}},c.a.createElement("p",null,c.a.createElement("strong",null,"Year: ")," ",t.year),c.a.createElement("p",null,c.a.createElement("strong",null,"Make: ")," ",t.make),c.a.createElement("p",null,c.a.createElement("strong",null,"Model: ")," ",t.model),c.a.createElement("button",{className:"delete",onClick:function(){f.deleteCar(t._id).then((function(t){return e.history.push("/cars")})).catch((function(e){return console.log(e)}))}},"Delete"),c.a.createElement(o.b,{to:"/cars/".concat(t._id,"/edit"),className:"edit"},c.a.createElement("button",null,"Edit")),c.a.createElement(o.b,{to:"/cars/".concat(t._id,"/newPost"),className:"edit"},c.a.createElement("button",null,"Add Posts"))),t.posts&&t.posts.map((function(e){return c.a.createElement("p",null,e.title)})))})),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={car:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getCarById(this.props.match.params.id).then((function(t){console.log(t),e.setState({car:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log(this.props),c.a.createElement(g,{car:this.state.car,list:!1})}}]),a}(c.a.Component),j=a(12),O=(a(34),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={year:Number,make:"",model:"",carPicUrl:""},e.handleChange=function(t){"on"===t.target.value&&(t.target.value=!0),e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),f.createCar(e.state).then((function(e){console.log(e)})),e.props.history.push("/cars")},e}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",{style:{color:"#13b0cc"}},"Add A New Car"),c.a.createElement("div",{className:"newCarSub"},c.a.createElement("label",{htmlFor:""}),c.a.createElement("input",{onInput:this.handleChange,placeholder:"Year",type:"number",name:"year"})),c.a.createElement("div",{className:"newCarSub"},c.a.createElement("label",{htmlFor:""}),c.a.createElement("input",{onInput:this.handleChange,placeholder:"Make",type:"text",name:"make"})),c.a.createElement("div",{className:"newCarSub"},c.a.createElement("label",{htmlFor:""}),c.a.createElement("input",{onInput:this.handleChange,placeholder:"Model",type:"text",name:"model"})),c.a.createElement("div",{className:"newCarSub"},c.a.createElement("label",{htmlFor:""}),c.a.createElement("input",{onInput:this.handleChange,placeholder:"Picture Url",type:"text",name:"carPicUrl"})),c.a.createElement("button",{type:"submit"},"Add Car")))}}]),a}(c.a.Component)),N=Object(i.f)(O),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={year:Number,make:"",model:"",carPicUrl:""},e.handleChange=function(t){console.log(t.target.id),e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),f.updateCar(e.state,e.props.match.params.id).then((function(e){console.log(e)})),e.props.history.push("/cars/".concat(e.props.match.params.id))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getCarById(this.props.match.params.id).then((function(t){return e.setState(t)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.year,a=e.make,n=e.model,r=e.carPicUrl;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",{style:{color:"#13b0cc"}},"Edit Car"),c.a.createElement("label",{htmlFor:"year"}),c.a.createElement("input",{onChange:this.handleChange,placeHolder:"Year",type:"number",name:"year",value:t}),c.a.createElement("div",{className:"editInfo"},c.a.createElement("label",{htmlFor:"make"}),c.a.createElement("input",{onChange:this.handleChange,placeHolder:"Make",type:"text",name:"make",value:a})),c.a.createElement("div",{className:"editInfo"},c.a.createElement("label",{htmlFor:"model"}),c.a.createElement("input",{onChange:this.handleChange,placeHolder:"Model",type:"text",name:"model",value:n})),c.a.createElement("div",{className:"editInfo"},c.a.createElement("label",{htmlFor:"carPicUrl"}),c.a.createElement("input",{onChange:this.handleChange,placeHolder:"Picture URL",type:"text",name:"carPicUrl",value:r})),c.a.createElement("button",{type:"submit"},"Update")))}}]),a}(c.a.Component),S=function e(){Object(m.a)(this,e)};S.createPost=function(e,t){return fetch("".concat("http://localhost:4000/api/v1/posts","/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))};var w=S,P=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",body:""},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),w.createPost(e.state,e.props.match.params.id).then((function(e){console.log(e)})),e.props.history.push("/cars/".concat(e.props.match.params.id))},e}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h4",{style:{color:"#13b0cc"}}," Add Post "),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",null,c.a.createElement("label",{style:{color:"#13b0cc"}}," Title "),c.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("label",{style:{color:"#13b0cc"}}," Body "),c.a.createElement("input",{type:"text",name:"body",value:this.state.body,onChange:this.handleChange})),c.a.createElement("button",{type:"submit"}," Submit ")))}}]),a}(n.Component),x=function(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:s}),c.a.createElement(i.a,{path:"/cars/new",render:function(){return c.a.createElement(N,null)}}),c.a.createElement(i.a,{exact:!0,path:"/cars/:id",component:C}),c.a.createElement(i.a,{path:"/cars/:id/edit",component:k}),c.a.createElement(i.a,{path:"/cars/:id/newpost",component:P}),c.a.createElement(i.a,{path:"/cars",component:y}))};a(35);var _=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"container"},c.a.createElement(o.c,{className:"logo",to:"/"},c.a.createElement("h1",null,"RadRides")),c.a.createElement("ul",{className:"nav-list"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",exact:!0,to:"/cars"},"Cars")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",to:"/cars/new"},"Add Car")))))};a(36);var A=Object(i.f)((function(){return c.a.createElement("div",{className:"App"},c.a.createElement(_,null),c.a.createElement(x,null))}));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(A,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.05fd0690.chunk.js.map