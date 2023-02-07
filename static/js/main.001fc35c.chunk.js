(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(36)},25:function(e,a,t){},27:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(14),c=t.n(n),r=(t(25),t(6));t(27);function s(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return o.a.createElement("div",{className:"container",style:t},o.a.createElement("h2",{className:"my-4"}," About Us:- "),o.a.createElement("div",{className:"accordion",id:"accordionExample",style:t},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingOne"},o.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse",style:t,"data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),o.a.createElement("div",{className:"container my-3"}),o.a.createElement("button",{onClick:function(){"black"===t.color?(n({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(n({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},type:"button",className:"btn btn-primary"},i))}var i=t(9);function d(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(i.b,{className:"navbar-brand",to:"/"},o.a.createElement("b",null,e.title)),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{className:"nav-link active mx-3","aria-current":"page",to:"/"},"Home ")),o.a.createElement("li",{className:"nav-item"})),o.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),n=t[0],c=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},o.a.createElement("h1",null,e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",value:n,onChange:function(e){console.log("OnChange"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"Mybox",rows:"8"})),o.a.createElement("button",{className:"btn btn-success",onClick:function(){console.log("Uppercase was clicked"+n);var a=n.toUpperCase();c(a),e.showAlert("Converted to uppercase!","success")}}," Convert to Uppercase "),o.a.createElement("button",{className:"btn btn-success mx-2",onClick:function(){console.log("Lowercase was clicked"+n);var a=n.toLowerCase();c(a),e.showAlert("Converted to lowercase!","success")}}," Convert to Lowercase "),o.a.createElement("button",{className:"btn btn-success mx-1",onClick:function(){var a=document.getElementById("Mybox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Text Copied!","success")}}," Copy Text "),o.a.createElement("button",{className:"btn btn-danger mx-1 ",onClick:function(){console.log("Cleared"+n);c(""),e.showAlert("Text Cleared!","success")}}," Clear Text ")),o.a.createElement("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"#042743"}},o.a.createElement("h2",null,o.a.createElement("b",null,"Your Text Summary :-")),o.a.createElement("p",null," There are ",o.a.createElement("u",null,n.split(" ").length-1," Words")," & ",o.a.createElement("u",null,n.length," Characters"))))}function u(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),":",e.alert.msg)}d.defaultProps={title:"Set title here...",aboutText:"About "};var h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(d,{title:"TextUtils",aboutText:"About Us",mode:t,toggleMode:function(){"light"===t?(n("dark"),document.body.style.backgroundColor="#042743",E("Dark Mode has been enabled","success"),document.title="TextUtils-Dark Mode"):(n("light"),document.body.style.backgroundColor="white",E("Light Mode has been enabled","success"),document.title="TextUtils-Light Mode")}}),o.a.createElement(u,{alert:p}),o.a.createElement("div",{className:"container my-5 mx-6"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/about"},o.a.createElement(s,null)),o.a.createElement(h.a,{exact:!0,path:"/"},o.a.createElement(m,{showAlert:E,heading:"Enter the text to analyze below:-",mode:t}))))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,37)).then(function(a){var t=a.getCLS,l=a.getFID,o=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),l(e),o(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),p()}},[[16,3,2]]]);
//# sourceMappingURL=main.001fc35c.chunk.js.map