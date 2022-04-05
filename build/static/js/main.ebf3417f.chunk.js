(this["webpackJsonpgoit-react-hw-04-images"]=this["webpackJsonpgoit-react-hw-04-images"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__1pbic",modal:"Modal_modal__2cyOf",image:"Modal_image__3d5_1"}},13:function(e,t,a){e.exports={App:"App_App__4zrwA",error:"App_error__3PDxV"}},15:function(e,t,a){e.exports={button:"Button_button__1kNv7"}},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),s=(a(22),a(14)),i=a(3),l=a(5);a(12);var u={fetchImages:function(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23950514-2b2a864c0ec6a6714acf66442","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(t){return t.ok?t.json():Promise.reject(new Error("No results were found for ".concat(e)))}))}},b=a(17),j=a(6),m=a.n(j),d=a(1),g=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(d.jsx)("header",{className:m.a.searchbar,children:Object(d.jsxs)("form",{className:m.a.form,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return l.b.warn("Please, enter your query");t(c.trim()),o("")},children:[Object(d.jsxs)("button",{type:"submit",className:m.a.button,children:[Object(d.jsx)(b.a,{}),Object(d.jsx)("span",{className:m.a.buttonLabel,children:"Search"})]}),Object(d.jsx)("input",{className:m.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value.toLowerCase())}})]})})},f=a(8),h=a.n(f);var p=function(e){var t=e.tags,a=e.src,n=e.largeImageURL,r=e.openModal;return Object(d.jsx)("li",{className:h.a.galleryItem,onClick:r,children:Object(d.jsx)("img",{src:a,alt:t,"data-largeimg":n,className:h.a.image})})};var O=function(e){var t=e.images,a=e.openModal;return Object(d.jsx)("ul",{className:h.a.gallery,children:t.map((function(e){var t=e.id,n=e.tags,r=e.webformatURL,c=e.largeImageURL;return Object(d.jsx)(p,{tags:n,src:r,largeImageURL:c,openModal:a},t)}))})},_=a(15),x=a.n(_),v=function(e){var t=e.handleClick;return Object(d.jsx)("button",{type:"button",onClick:t,className:x.a.button,children:"Load more"})},y=a(16),S=a.n(y),w=(a(44),function(){return Object(d.jsx)(S.a,{type:"Hearts",color:"#00BFFF",height:100,width:100})}),N=a(10),k=a.n(N),C=document.querySelector("#modal-root");function I(e){var t=e.onClose,a=e.src,r=e.alt;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[t]);return Object(c.createPortal)(Object(d.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&t()},className:k.a.overlay,children:Object(d.jsx)("div",{className:k.a.modal,children:Object(d.jsx)("img",{className:k.a.image,src:a,alt:r})})}),C)}var L=a(13),M=a.n(L);function E(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),b=o[0],j=o[1],m=Object(n.useState)(1),f=Object(i.a)(m,2),h=f[0],p=f[1],_=Object(n.useState)(!1),x=Object(i.a)(_,2),y=x[0],S=x[1],N=Object(n.useState)(!1),k=Object(i.a)(N,2),C=k[0],L=k[1],E=Object(n.useState)(""),P=Object(i.a)(E,2),A=P[0],F=P[1],B=Object(n.useState)(""),R=Object(i.a)(B,2),J=R[0],U=R[1],q=Object(n.useState)(""),D=Object(i.a)(q,2),G=D[0],H=D[1];Object(n.useEffect)((function(){a?(S(!0),u.fetchImages(a,h).then((function(e){var t=e.hits;0===t.length?function(e){l.b.error("We did not find ".concat(e,"!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}(a):(j((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),p(h))})).catch((function(e){return H("Please, try again")})).finally(S(!1))):j([])}),[h,a]);var z=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})}),1e3)};return Object(d.jsxs)("div",{className:M.a.App,children:[Object(d.jsx)(g,{onSubmit:function(e){r(e),S(!0),j([]),p(1),H(null)}}),y&&Object(d.jsx)(w,{}),b.length>0&&!G&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{openModal:function(e){e.preventDefault(),L(!0),F(e.target.dataset.largeimg),U(e.target.alt)},images:b}),Object(d.jsx)(v,{handleClick:function(){p((function(e){return e+1})),z()}})]}),C&&Object(d.jsx)(I,{onClose:function(){return L(!1)},src:A,alt:J}),G&&Object(d.jsx)("p",{className:M.a.error,children:G}),Object(d.jsx)(l.a,{autoClose:3e3,theme:"colored"})]})}a(45);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1Y9Zn",form:"Searchbar_form__2C1wM",button:"Searchbar_button__3FvkY",buttonLabel:"Searchbar_buttonLabel__k0yPn",input:"Searchbar_input__3chJI"}},8:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__nxN4o",galleryItem:"ImageGallery_galleryItem__2CfL9",image:"ImageGallery_image__2RJ39"}}},[[46,1,2]]]);
//# sourceMappingURL=main.ebf3417f.chunk.js.map