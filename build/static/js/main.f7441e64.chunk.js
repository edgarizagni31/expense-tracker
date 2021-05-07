(this["webpackJsonp01-expense-tracker"]=this["webpackJsonp01-expense-tracker"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=a(1),l=a(9),m=a(4),i=a(5),u=function(e){var t=e.label,a=e.id,n=e.placeholder,c=e.handleInputChange,s=e.formText;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:a,className:"form-label mb-0"},t),""!==s&&r.a.createElement("p",{className:"form-text mt-0"}," ",s," "),r.a.createElement("input",{type:"text",id:a,placeholder:n,className:"form-control",name:a,onChange:c,autoComplete:"off"}))},d=a(8),b=a.n(d),p=function(e){return b.a.fire({title:"Error!",text:e,icon:"error",confirmButtonText:"Ok"})},f=function(e){var t=e.setTransactions,a=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1];return[r,function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(m.a)({},t.name,t.value)))}]}({desc:"",amount:""}),c=Object(o.a)(a,2),s=c[0],d=c[1],b=/[1-9]+/;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0!==s.desc.length||0!==s.amount.length?null!==s.desc&&0!==s.desc.length?s.desc.length<3||b.test(s.desc)?p("Descripci\xf3n no valida, no puede ser un valor n\xfamerico."):null!==s.amount?0!==s.amount.length&&b.test(s.amount)?(t((function(e){return[s].concat(Object(l.a)(e))})),document.querySelector("form").reset()):p("Cantidad no valida, tiene que ser un valor n\xfamerico."):p("Por favor ingrese una cantidad."):p("Por favor ingrese una descripci\xf3n."):p("Los campos no pueden estar vacios.")}},r.a.createElement("h2",{className:"fs-6 pb-1 border-bottom border-dark"},"A\xf1adir una nueva transacci\xf3n"),r.a.createElement(u,{id:"desc",placeholder:"Ingrese una descripci\xf3n",label:"Descripci\xf3n",handleInputChange:d}),r.a.createElement(u,{id:"amount",placeholder:"Ingrese la cantidad",label:"Cantidad",formText:"negativo(-) gasto, positivo(+) ingreso",handleInputChange:d}),r.a.createElement("button",{type:"submit",className:"w-100 btn btn-primary mb-3 text-align-center mx-auto"},"A\xf1adir transacci\xf3n"))},g=function(e){var t=function(e){var t=0,a=0,n=0;return e.forEach((function(e){var r=e.amount;r>=0?t+=parseFloat(r):a+=parseFloat(r),n+=parseFloat(r)})),{totalIcome:t,totalExpense:a,balance:n}}(e.transactions),a=t.totalIcome,n=t.totalExpense,c=t.balance;return r.a.createElement("section",{className:"mb-4 container "},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("p",{className:"mb-0 p-0"}," Tu balance "),r.a.createElement("p",{className:"fw-bold fs-4 p-0"},"S/ ",c," ")),r.a.createElement("article",{className:"row"},r.a.createElement("div",{className:"col shadow-sm text-center bg-white me-1"},r.a.createElement("p",null,"Ingresos"),r.a.createElement("p",{className:"text-success"},"S/ ",a)),r.a.createElement("div",{className:"col shadow-sm text-center bg-white"},r.a.createElement("p",null,"Egresos"),r.a.createElement("p",{className:"text-danger"},"S/ ",n))))},E=function(e){var t=e.transactions;return r.a.createElement("section",{className:"w-100 mb-4"},r.a.createElement("h2",{className:"fs-6 pb-1 border-bottom border-dark"},"Historia"),0===t.length?r.a.createElement("p",null,"No se ha registrado transacci\xf3nes "):t.map((function(e,t){var a=e.desc,n=e.amount,c=n>0?"border-success":"border-danger";return r.a.createElement("div",{className:"".concat(c," border-end  shadow-sm border-2 d-flex align-items-center pt-2 pb-2 ps-2 mb-2 row bg-white container ms-0  me-0 row"),key:t},r.a.createElement("p",{className:"mb-0 col"},a),r.a.createElement("p",{className:"col mb-0 text-end"}," ",n," "))})))},h=(a(16),function(){var e=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("transaction"))||[]})),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){localStorage.setItem("transaction",JSON.stringify(a))}),[a]),r.a.createElement("main",{className:"mt-3 mx-auto main"},r.a.createElement("h1",{className:"fs-4 fw-bold mb-3 text-center"}," Registro de Gastos"),r.a.createElement(g,{transactions:a}),r.a.createElement(E,{transactions:a}),r.a.createElement(f,{setTransactions:c}))}),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(r.a.createElement(h,null),document.getElementById("root")),v()}},[[10,1,2]]]);
//# sourceMappingURL=main.f7441e64.chunk.js.map