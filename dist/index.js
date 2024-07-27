(()=>{"use strict";let e=[{title:"home",url:"https://mikeoppong.netlify.app",menu:[{links:[{url:"",text:"home 1"},{url:"",text:"home 2"}]}]},{title:"shop",url:"https://mikeoppong.netlify.app",menu:[{title:"product category",links:[{url:"",text:"cosmetics"},{url:"",text:"perfumes"}]},{title:"brand category",links:[{url:"",text:"gucci"},{url:"",text:"enyce"},{url:"",text:"reserved"}]}]},{title:"blog",url:"https://mikeoppong.netlify.app",menu:[{links:[{url:"",text:"blog 1"},{url:"",text:"blog 2"}]}]},{title:"about",url:"https://mikeoppong.netlify.app"},{title:"contact",url:"https://mikeoppong.netlify.app"}];const t=[{id:1,title:"new trend",text:"Summer sale stylist".toUpperCase(),colour:"#B1D4E0",url:""},{id:2,title:"all skin types",text:"Powerful Skincare! </br>At one with the planet",colour:"#e2cfea",url:""}],n=[{title:"new arrival",products:[{name:"Nike Air Force 1",price:310.99,size:["32","43","44","46"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/73-home_default/hummingbird-vector-graphics.jpg",colour:["#F00000","#00FF00","#9AFB34","#173B45","#B43F3F","#FF8225"]},{name:"Dress Neck Casual Short Dresses",price:10,size:["s","m","l","xl"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/33-home_default/brown-bear-printed-sweater.jpg",colour:["#F00000","#00FF00"]},{name:"Summer Dress Women Short Sleeve",price:110,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/35-home_default/the-best-is-yet-to-come-framed-poster.jpg",colour:["#9AFB34","#173B45","#B43F3F","#FF8225"]},{name:"Cropped Faux Leather Jacket",price:300,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/65-home_default/mountain-fox-vector-graphics.jpg",colour:["#B43F3F","#FF8225"]}]},{title:"best sellers",products:[{name:"jeans",price:10,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/60-home_default/brown-bear-cushion.jpg",colour:[]},{name:"Neck Casual Short Zessi Dressesgh",price:10,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/57-home_default/mountain-fox-cushion.jpg",colour:[]},{name:"Nike Air Force 1 07",price:600,size:["38","39","40","41","42"],img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/buty-meskie-air-force-1-07-CFVMS0.png",colour:["#FFFFFF"]},{name:"NIKE Jordan 1 MID",price:345,size:["38","39","40","41","42"],img:"https://storamore.pl/images/sh193/20000-21000/Buty-NIKE-Dunk-Low-Czarno-biale-Panda_%5B20375%5D_780.jpg",colour:["#173B45","#B43F3F","#FF8225"]}]},{title:"top rating",products:[{name:"Women’s Turtleneck Tie Dress",price:100,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/50-home_default/mug-the-adventure-begins.jpg",colour:[]},{name:"",price:59,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/83-home_default/mountain-fox-notebook.jpg",colour:["#173B45","#B43F3F","#FF8225"]},{name:"Women’s High-Waist Jean",price:120,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/61-home_default/hummingbird-cushion.jpg",colour:[]},{name:"Compact Circular Saw",price:10,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/79-home_default/pack-mug-framed-poster.jpg",colour:["#B43F3F","#FF8225"]}]}],i=document.querySelector(".footer-center"),l=[{title:"company",links:[{text:"about us",url:""},{text:"careers",url:""},{text:"affiliates",url:""},{text:"blog",url:""},{text:"contact us",url:""}]},{title:"shop",links:[{text:"accessories",url:""},{text:"men",url:""},{text:"women",url:""},{text:"clothes",url:""},{text:"shop all",url:""}]},{title:"help",links:[{text:"customer service",url:""},{text:"my account",url:""},{text:"find a store",url:""},{text:"legal & privacy",url:""},{text:"contact",url:""}]}].map((e=>`   <div class="footer-menu">\n                <h2>${e.title}</h2>\n          <div class="footer-menu-link">\n            <ul class="footer-link">\n                  ${e.links.map((e=>`<li><a href=${e.url} target="_blank">${e.text}</a></li>`)).join("")}\n            </ul>\n          </div>\n        </div>`)).join("");i.innerHTML=l;const s=document.querySelector(".slider"),o=document.querySelector(".left-btn"),a=document.querySelector(".right-btn"),c=document.querySelectorAll(".dot-btn");document.title="seahorse".toUpperCase();const r=t.map((e=>{const{id:t,title:n,text:i,url:l,colour:s}=e;return`<div class="slide"  style="background-color: ${s};">\n   <div class="slide-content">\n    <div class="title-container">\n  <span></span>\n  <p>${n}</p>\n</div>\n    <h2>${i}</h2>\n        <div class="deal-link-container">\n       <a  class="deals-link" href="${l}" target="_blank">shop now</a>\n      <div class="btn-underline"></div>\n      </div>\n    </div>\n    </div>`})).join("");s.innerHTML=r;const u=document.querySelectorAll(".slide");let d=0;function m(e){u.forEach(((t,n)=>{t.style.transform=`translateX(-${100*e}%)`,t.style.transition="1s"}))}u.forEach((function(e,t){e.style.left=100*t+"%"})),o.addEventListener("click",(function(){d=0,m(d)})),a.addEventListener("click",(function(){d=1,m(d)})),c.forEach((e=>{e.addEventListener("click",(function(t){e.classList.contains("active-btn")||e.classList.add("active-btn"),c.forEach((t=>{t!==e&&t.classList.remove("active-btn")}))}))})),setInterval((()=>{let e=Math.floor(2*Math.random());m(e),c.forEach(((t,n)=>{n===e&&t.classList.add("active-btn")})),c.forEach(((t,n)=>{n!==e&&t.classList.remove("active-btn")}))}),5e3);const p=document.querySelector(".trend-btns"),h=document.querySelector(".trending-products");let v="new arrival";const f=[...p.children];function g(e){const t=n.find((t=>t.title===e)),i=null==t?void 0:t.products.map((e=>{const{name:t,img:n,price:i,colour:l,size:s}=e;return`<div class="product">\n                  <div class="product-img-container">\n                   <img class="product-img" src="${n}" alt="">\n                   <div class="cart-btn-container">\n                   <button class="cart-btn">add to cart</button>\n                   </div>\n                  </div>\n                   <div class="product-info">\n                    <p>${t}</p>\n                    <div class="product-size">\n                    ${s.map(((e,t)=>`<span class="size ${0===t?"active-attribute":""}">${e}</span>`)).join("")}\n                    </div>\n                     <div class="product-colour">\n                     ${l.map(((e,t)=>`<span style="background-color:${e}" class="colour ${0===t?"active-attribute":""}"></span>`)).join("")}\n                    </div>\n                    <span class="price">&#36;${i}</span>\n                   </div>\n                  </div>\n                  `})).join("");i&&(h.innerHTML=i)}function b(e,t){var n;const i=null===(n=e.parentElement)||void 0===n?void 0:n.querySelectorAll(`.${t}`);null==i||i.forEach((t=>{t!==e&&t.classList.remove("active-attribute")}))}f.forEach((e=>{e.addEventListener("click",(function(t){const n=t.target;if(n instanceof Element){n.classList.add("active-trend");const e=n.nextElementSibling;null==e||e.classList.add("active-trend"),n.textContent&&(v=n.textContent,g(v))}f.forEach((t=>{if(t!==e){const e=t.firstElementChild,n=null==e?void 0:e.nextElementSibling;null==e||e.classList.remove("active-trend"),null==n||n.classList.remove("active-trend")}}))}))})),g(v),h.addEventListener("click",(function(e){const t=e.target;(t instanceof Element&&t.classList.contains("size")||t instanceof Element&&t.classList.contains("colour"))&&(t.classList.add("active-attribute"),b(t,"size"),b(t,"colour"))}));const k=document.querySelector(".season"),L=[{title:"deal of the week",text:"spring collection",img:"../public/assets/spring-sale.webp"}].map((e=>{const{title:t,text:n,img:i}=e;return`<div class="deal">\n  <div class="img-container">\n\n  </div>\n  <div class="deal-content">\n<div class="title-container">\n  <span></span>\n  <p>${t}</p>\n</div>\n    <h2>${n}</h2>\n      <div class="deal-link-container">\n       <a  class="deals-link" href="https://mikeoppong.netlify.app" target="_blank">shop now</a>\n      <div class="btn-underline"></div>\n      </div>\n  </div>\n\n  </div>`})).join("");void 0!==L&&(k.innerHTML=L);let y=document.querySelector(".nav-links"),x=document.querySelector(".nav-menu-container"),E=["about","contact"],_=e.map(((e,t)=>` <li class="link ${0===t?"active":""}">\n            <a  href=${e.url} target="_blank" class="nav-link">${e.title}</a>\n            <i class="fa fa-caret-down ${E.includes(e.title)?"hide-icon":""}"></i>\n            </li>`)).join("");null!==_&&(y.innerHTML=_);let F=y.querySelectorAll(".link");F.forEach((e=>{e.addEventListener("mouseover",(function(){e.classList.contains("active")||e.classList.add("active"),F.forEach(((t,n)=>{t!==e&&0!==n&&t.classList.remove("active")}))}))})),F.forEach((t=>{t.addEventListener("mouseover",(function(){var n,i;const l=null===(n=t.querySelector("a"))||void 0===n?void 0:n.textContent,s=e.find((e=>e.title===l)),o=null===(i=null==s?void 0:s.menu)||void 0===i?void 0:i.map((e=>{console.log(e);const{title:t,links:n}=e;return t?`\n        <div>\n          <p>${t}</p>\n          <ul>\n              ${n.map((e=>`\n          <li class="link"><a  class="nav-link" href=${e.url}>${e.text}</a></li>\n          `)).join("")}\n          </ul>\n          </div>\n      `:`\n        <div>\n          <ul>\n              ${n.map((e=>`\n          <li class="link"><a  class="nav-link" href=${e.url}>${e.text}</a></li>\n          `)).join("")}\n          </ul>\n          </div>\n      `})).join("");let a=x.querySelector(".nav-menu");if(void 0===o)return void(x.style.visibility="hidden");a.innerHTML=o;let c=t.getBoundingClientRect();x.style.top=`${c.bottom+35}`,x.style.left=`${c.left}`,x.style.visibility="visible"}))})),window.addEventListener("mouseover",(function(e){const t=x.getBoundingClientRect();let n=t.left,i=t.right,l=t.bottom;(e.pageX<n||e.pageX>i||e.pageY>l)&&(x.style.visibility="hidden")}));const S=document.querySelector(".btn-search"),$=document.querySelector(".la-times"),w=document.querySelector(".la-search"),q=document.querySelector(".form-search");null==S||S.addEventListener("click",(function(){(null==$?void 0:$.classList.contains("show"))?(null==$||$.classList.add("hide"),null==$||$.classList.remove("show"),null==w||w.classList.remove("hide"),null==q||q.classList.remove("show")):(null==$||$.classList.remove("hide"),null==$||$.classList.add("show"),null==w||w.classList.add("hide"),null==q||q.classList.add("show"))}));const j=document.querySelector(".user-menu"),B=document.querySelector(".btn-user");null==B||B.addEventListener("click",(function(){(null==j?void 0:j.classList.contains("show-menu"))?null==j||j.classList.remove("show-menu"):null==j||j.classList.add("show-menu")})),window.addEventListener("mouseover",(function(e){const t=j.getBoundingClientRect();let n=t.left,i=t.right,l=t.bottom;(e.pageX<n||e.pageX>i||e.pageY>l)&&(null==j||j.classList.remove("show-menu"))}));let C=document.querySelector(".sidebar-container"),z=document.querySelector(".sidebar"),M=document.querySelector(".closeBtn-container");document.querySelector(".hamburgerBtn").addEventListener("click",(function(){C.classList.add("show"),C.classList.contains("hide")&&C.classList.remove("hide")})),M.addEventListener("click",(function(){C.classList.add("hide"),C.classList.contains("show")&&C.classList.remove("show")}));const T=document.createElement("ul");let A=e.map(((e,t)=>{var n;return` <li class="sidebar-link">\n            <div class="menu">\n            <a  href=${e.url} target="_blank" class="nav-link">${e.title}\n            </a>\n            <button class="toggle-btn"> <i class="la la-angle-right"></i></button>\n            </div>\n            <div class="child-menu-container">\n            <ul class="child-menu">\n           ${null===(n=e.menu)||void 0===n?void 0:n.map((e=>`<li class="child-menu-link">  <a  href="" target="_blank" >${e}</a></li>`)).join("")}\n            </ul>\n            </div>\n            </li>`})).join("");T.innerHTML=A,z.append(T),document.querySelectorAll(".toggle-btn").forEach((e=>{e.addEventListener("click",(function(e){var t;const n=e.currentTarget;if(n instanceof Element){const e=n.parentElement,i=null==e?void 0:e.nextElementSibling;let l=null==i?void 0:i.getBoundingClientRect().height,s=null===(t=null==i?void 0:i.firstElementChild)||void 0===t?void 0:t.getBoundingClientRect().height;i instanceof HTMLElement&&(i.style.height=0===l?`${s}px`:"0px"),document.querySelectorAll(".child-menu-container").forEach((e=>{e!==i&&e instanceof HTMLElement&&(e.style.height="0px")}))}}))}))})();