(this.webpackJsonptextutiles=this.webpackJsonptextutiles||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(20),c=t.n(o),r=(t(30),t(3));t(31);function s(e){return n.a.createElement("div",{style:{height:"70px"}},e.alert&&n.a.createElement("div",null,n.a.createElement("div",{class:"alert alert-".concat(e.alert.type),role:"alert"},e.alert.msg)))}function i(e){var a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#0b5871":"white"};return n.a.createElement("div",{style:{border:"3px solid",color:"dark"===e.mode?"white":"black"}},n.a.createElement("div",{className:"accordion accordion-flush",id:"accordionFlushExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"flush-collapseOne",className:"accordion-collapse collapse",style:a,"data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{className:"accordion-body"},"Placeholder content for this accordion, which is intended to demonstrate the ",n.a.createElement("code",null,".accordion-flush")," className. This is the first item's accordion body."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"flush-collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{style:a,className:"accordion-body"},"Placeholder content for this accordion, which is intended to demonstrate the ",n.a.createElement("code",null,".accordion-flush")," className. This is the second item's accordion body. Let's imagine this being filled with some actual content."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"flush-collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},n.a.createElement("div",{style:a,className:"accordion-body"},"Placeholder content for this accordion, which is intended to demonstrate the ",n.a.createElement("code",null,".accordion-flush")," className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.")))))}var m=t(11);function d(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/about"},"About"))),n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{className:"form-check-input",onClick:e.ToggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"," "),htmlFor:"flexSwitchCheckDefault"},"Enable Blue Mode"))))))}function u(e){var a=Object(l.useState)("Enter Text here"),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",{className:"mb-3 container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",null,"Enter the text to analyze below"),n.a.createElement("br",null),n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},id:"exampleFormControlTextarea1",rows:"3",style:{color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"#0b5871":"white"}}),n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toUpperCase();""===a?e.showAlert("Please Enter the text in Textbox","danger"):o===a?e.showAlert("Text Already in UperCase buddy!","primary"):(c(a),e.showAlert("Text Converted into UperCase","success"))}},"ToUpperCase"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toLowerCase();""===a?e.showAlert("Please Enter the text in Textbox","danger"):o===a?e.showAlert("Text Already in LowerCase buddy!","primary"):(c(a),e.showAlert("Text Converted into LowerCase","success"))}},"ToLowerCase"),n.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){c(""),e.showAlert("Text Clear","success")}},"Clear Text"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h2",null,"Your text summery"),n.a.createElement("div",null,o.split(" ").filter((function(e){return 0!==e.length})).length," words and ",o.length," Characters"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,""===o?"Enter Something in the Textbox for Preview":o))))}d.defaultProps={title:"Aarsh2"};var h=t(2);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],E=b[1],g=function(e,a){E({msg:e,type:a}),setTimeout((function(){E(null)}),2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(d,{title:"Aarsh",mode:t,ToggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#0b5871",g("Dark mode Enable","success"),document.title="TextUtils Home - Dark Mode"):(o("light"),document.body.style.backgroundColor="White",g("Light mode Enable","danger"),document.title="TextUtils Home - Light Mode")},alert:p}),n.a.createElement(s,{alert:p}),n.a.createElement("div",{className:"container"},n.a.createElement(h.c,null,n.a.createElement(h.a,{path:"/about",element:n.a.createElement(i,{mode:t})}),n.a.createElement(h.a,{path:"/",element:n.a.createElement(u,{showAlert:g,mode:t})})))))},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()}},[[21,1,2]]]);
//# sourceMappingURL=main.9979d9a4.chunk.js.map