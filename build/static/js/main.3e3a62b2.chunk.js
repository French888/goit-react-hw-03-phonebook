(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(9),i=n.n(c),o=(n(15),n(10)),s=n(3),u=n(4),d=n(5),l=n(7),b=n(6),m=n(1),h=n.n(m),j=n(21),f=n(0),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",number:""},t.state={name:"",number:""},t.nameInputId=Object(j.a)(),t.numberInputId=Object(j.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(j.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState(t.initialState)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(f.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange,id:this.numberInputId})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);p.PropsType={onSubmit:h.a.func.isRequired};var v=p,C=function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteContact;return Object(f.jsxs)("li",{children:[n,": ",a,Object(f.jsx)("button",{type:"submit",onClick:function(){return r(e)},children:"Delete"})]})};C.prototype={id:h.a.number.isRequired,name:h.a.string.isRequired,number:h.a.number.isRequired,onDeleteContact:h.a.func.isRequired};var O=C,g=function(t){var e=t.findContact,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(f.jsx)(O,{id:e,name:a,number:r,onDeleteContact:n},e)}))})},x=g;g.prototype={findContact:h.a.func.isRequired,onDeleteContact:h.a.func.isRequired};var S=function(t){var e=t.children;return Object(f.jsx)("div",{children:e})},y=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)(f.Fragment,{children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t.hasContacts=function(e){return t.state.contacts.some((function(t){return t.name.toLocaleLowerCase()===e.toLocaleLowerCase()}))},t.addContact=function(e){t.hasContacts(e.name)?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(o.a)(n))}}))},t.findContact=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLocaleLowerCase();return n.length?a.filter((function(t){return t.name.toLowerCase().includes(r)})):a},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("products"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("products",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.findContact();return Object(f.jsxs)(S,{children:[Object(f.jsx)("h1",{children:" PhoneBook "}),Object(f.jsx)(v,{onSubmit:this.addContact}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:" Contacts "}),Object(f.jsx)(y,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(x,{findContact:t,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),k=I;i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3e3a62b2.chunk.js.map