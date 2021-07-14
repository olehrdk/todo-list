/*! For license information please see main.8a6e50a3.chunk.js.LICENSE.txt */
(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(10),c=n.n(r),i=n(8),l=n(6),s=n(7),u=n(2),d=n(3),b=n(5),f=n(4),h=(n(16),n(17),n(0)),j=function(t){var e=t.toDo,n=t.done;return Object(h.jsxs)("div",{className:"d-flex app-header",children:[Object(h.jsx)("h1",{children:"TODO List"}),Object(h.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},m=(n(19),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={term:""},t.onSearchPanelChange=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearchPanelChange(n)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"search",onChange:this.onSearchPanelChange,value:this.state.term})}}]),n}(o.a.Component)),O=n(11),g=(n(20),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onToggleImportant,o=t.onToggleDone,r="todo-list-item";return t.done&&(r+=" done"),t.important&&(r+=" important"),Object(h.jsxs)("span",{className:r,children:[Object(h.jsx)("span",{className:"todo-list-item-label",onClick:o,children:e}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a,children:Object(h.jsx)("i",{className:"fa fa-exclamation"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(h.jsx)("i",{className:"fa fa-trash-o"})})]})}}]),n}(o.a.Component)),p=(n(21),function(t){var e,n=t.todos,a=t.filter,o=t.onDeleted,r=t.onToggleImportant,c=t.onToggleDone;if(0===n.length)switch(a){case"all":e="No todos. Add task ?";break;case"active":e="No active todos. Add task ?";break;case"done":e="You haven't done anything yet";break;default:e="No todos. Add task ?"}var i=n.map((function(t){var e=t.id,n=Object(O.a)(t,["id"]);return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)(g,Object(l.a)(Object(l.a)({},n),{},{onDeleted:function(){return o(e)},onToggleImportant:function(){return r(e)},onToggleDone:function(){return c(e)}}))},e)}));return Object(h.jsxs)("ul",{className:"list-group todo-list",children:[i,e]})}),v=(n(22),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttons.map((function(t){var a=t.name,o=t.label,r="btn "+(a===e?"btn-info":"btn-outline-secondary");return Object(h.jsx)("button",{type:"button",onClick:function(){return n(a)},className:r,children:o},a)}));return Object(h.jsx)("div",{className:"btn-group",children:a})}}]),n}(o.a.Component)),x=(n(23),function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdded(t.state.label),t.setState({label:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"add-item-form d-flex",onSubmit:this.onSubmit,children:[Object(h.jsx)("input",{type:"text",className:"add-input form-control",onChange:this.onLabelChange,placeholder:"What to do ?",value:this.state.label}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",children:"Add"})]})}}]),n}(o.a.Component)),D=function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).maxId=1,t.createTodoItem=function(e){return{label:e,done:!1,important:!1,id:t.maxId++}},t.state={todoData:[t.createTodoItem("Drink Coffee"),t.createTodoItem("Codding"),t.createTodoItem("Go for a walk")],term:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.todoData.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(s.a)(t.todoData.slice(0,n)),Object(s.a)(t.todoData.slice(n+1)))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.todoData;return{todoData:[].concat(Object(s.a)(e),[n])}}))},t.toggleProperty=function(t,e,n){var a=t.findIndex((function(t){return t.id===e})),o=t[a],r=Object(l.a)(Object(l.a)({},o),{},Object(i.a)({},n,!o[n]));return[].concat(Object(s.a)(t.slice(0,a)),[r],Object(s.a)(t.slice(a+1)))},t.onToggleImportant=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"important")}}))},t.onToggleDone=function(e){t.setState((function(n){var a=n.todoData;return{todoData:t.toggleProperty(a,e,"done")}}))},t.onSearchPanelChange=function(e){t.setState({term:e})},t.search=function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))},t.onFilterChange=function(e){t.setState({filter:e})},t.filterItems=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,o=this.filterItems(this.search(e,n),a),r=e.filter((function(t){return t.done})).length,c=e.length-r;return Object(h.jsxs)("div",{className:"todo-app",children:[Object(h.jsx)(j,{toDo:c,done:r}),Object(h.jsxs)("div",{className:"top-panel d-flex",children:[Object(h.jsx)(m,{onSearchPanelChange:this.onSearchPanelChange}),Object(h.jsx)(v,{filter:a,onFilterChange:this.onFilterChange})]}),Object(h.jsx)(p,{todos:o,filter:a,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(h.jsx)(x,{onAdded:this.addItem})]})}}]),n}(o.a.Component);c.a.render(Object(h.jsx)(D,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.8a6e50a3.chunk.js.map