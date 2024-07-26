(()=>{"use strict";let e=[{title:"home",url:"https://mikeoppong.netlify.app",menu:["home 1","home 3","home 3"]},{title:"shop",url:"https://mikeoppong.netlify.app",menu:["product style 1","product style 3","product style 3","product style 4","product style 5","product style 6"]},{title:"blog",url:"https://mikeoppong.netlify.app",menu:["blog list 1","blog list 3"]},{title:"about",url:"https://mikeoppong.netlify.app"},{title:"contact",url:"https://mikeoppong.netlify.app"}];const t=[{title:"new arrival",products:[{name:"Nike Air Force 1",price:310.99,size:["32","43","44","46"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/73-home_default/hummingbird-vector-graphics.jpg",colour:["#F00000","#00FF00","#9AFB34","#173B45","#B43F3F","#FF8225"]},{name:"Dress Neck Casual Short Dresses",price:10,size:["s","m","l","xl"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/33-home_default/brown-bear-printed-sweater.jpg",colour:["#F00000","#00FF00"]},{name:"Summer Dress Women Short Sleeve",price:110,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/35-home_default/the-best-is-yet-to-come-framed-poster.jpg",colour:["#9AFB34","#173B45","#B43F3F","#FF8225"]},{name:"Cropped Faux Leather Jacket",price:300,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/65-home_default/mountain-fox-vector-graphics.jpg",colour:["#B43F3F","#FF8225"]}]},{title:"best sellers",products:[{name:"jeans",price:10,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/60-home_default/brown-bear-cushion.jpg",colour:[]},{name:"Neck Casual Short Zessi Dressesgh",price:10,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/57-home_default/mountain-fox-cushion.jpg",colour:[]},{name:"Nike Air Force 1 07",price:600,size:["38","39","40","41","42"],img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/buty-meskie-air-force-1-07-CFVMS0.png",colour:["#FFFFFF"]},{name:"NIKE Jordan 1 MID",price:345,size:["38","39","40","41","42"],img:"https://storamore.pl/images/sh193/20000-21000/Buty-NIKE-Dunk-Low-Czarno-biale-Panda_%5B20375%5D_780.jpg",colour:["#173B45","#B43F3F","#FF8225"]}]},{title:"top rating",products:[{name:"Women’s Turtleneck Tie Dress",price:100,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/50-home_default/mug-the-adventure-begins.jpg",colour:[]},{name:"",price:59,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/83-home_default/mountain-fox-notebook.jpg",colour:["#173B45","#B43F3F","#FF8225"]},{name:"Women’s High-Waist Jean",price:120,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/61-home_default/hummingbird-cushion.jpg",colour:[]},{name:"Compact Circular Saw",price:10,size:["s","m","l"],img:"https://demo74leotheme.b-cdn.net/prestashop/vt_fashion_demo/79-home_default/pack-mug-framed-poster.jpg",colour:["#B43F3F","#FF8225"]}]}],n=document.querySelector(".footer-center"),i=[{title:"company",links:[{text:"about us",url:""},{text:"careers",url:""},{text:"affiliates",url:""},{text:"blog",url:""},{text:"contact us",url:""}]},{title:"shop",links:[{text:"accessories",url:""},{text:"men",url:""},{text:"women",url:""},{text:"clothes",url:""},{text:"shop all",url:""}]},{title:"help",links:[{text:"customer service",url:""},{text:"my account",url:""},{text:"find a store",url:""},{text:"legal & privacy",url:""},{text:"contact",url:""}]}].map((e=>`   <div class="footer-menu">\n                <h2>${e.title}</h2>\n          <div class="footer-menu-link">\n            <ul class="footer-link">\n                  ${e.links.map((e=>`<li><a href=${e.url} target="_blank">${e.text}</a></li>`)).join("")}\n            </ul>\n          </div>\n        </div>`)).join("");n.innerHTML=i;const s=document.querySelector(".slider"),l=document.querySelector(".left-btn"),o=document.querySelector(".right-btn"),a=document.querySelectorAll(".dot-btn");document.title="seahorse".toUpperCase();const c=[{id:1,title:"new trend",text:"summer sale stylist",colour:"#B1D4E0",url:""},{id:2,title:"all skin types",text:"Power Skincare! At one with the planet",colour:"#e2cfea",url:""}].map((e=>{const{id:t,title:n,text:i,url:s,colour:l}=e;return`<div class="slide"  style="background-color: ${l};">\n   <div class="slide-content">\n    <div class="title-container">\n  <span></span>\n  <p>${n}</p>\n</div>\n    <h2>${i}</h2>\n        <div class="deal-link-container">\n       <a  class="deals-link" href="${s}" target="_blank">shop now</a>\n      <div class="btn-underline"></div>\n      </div>\n    </div>\n    </div>`})).join("");s.innerHTML=c;const r=document.querySelectorAll(".slide");let d=0;function u(e){r.forEach(((t,n)=>{t.style.transform=`translateX(-${100*e}%)`,t.style.transition="2s"}))}r.forEach((function(e,t){e.style.left=100*t+"%"})),l.addEventListener("click",(function(){d=0,u(d)})),o.addEventListener("click",(function(){d=1,u(d)})),a.forEach((e=>{e.addEventListener("click",(function(t){e.classList.contains("active-btn")||e.classList.add("active-btn"),a.forEach((t=>{t!==e&&t.classList.remove("active-btn")}))}))})),setInterval((()=>{let e=Math.floor(2*Math.random());u(e),a.forEach(((t,n)=>{n===e&&t.classList.add("active-btn")})),a.forEach(((t,n)=>{n!==e&&t.classList.remove("active-btn")}))}),5e3);const m=document.querySelector(".trend-btns"),p=document.querySelector(".trending-products");let h="new arrival";const v=[...m.children];function f(e){const n=t.find((t=>t.title===e)),i=null==n?void 0:n.products.map((e=>{const{name:t,img:n,price:i,colour:s,size:l}=e;return`<div class="product">\n                  <div class="product-img-container">\n                   <img class="product-img" src="${n}" alt="">\n                   <div class="cart-btn-container">\n                   <button class="cart-btn">add to cart</button>\n                   </div>\n                  </div>\n                   <div class="product-info">\n                    <p>${t}</p>\n                    <div class="product-size">\n                    ${l.map(((e,t)=>`<span class="size ${0===t?"active-attribute":""}">${e}</span>`)).join("")}\n                    </div>\n                     <div class="product-colour">\n                     ${s.map(((e,t)=>`<span style="background-color:${e}" class="colour ${0===t?"active-attribute":""}"></span>`)).join("")}\n                    </div>\n                    <span class="price">&#36;${i}</span>\n                   </div>\n                  </div>\n                  `})).join("");i&&(p.innerHTML=i)}function g(e,t){var n;const i=null===(n=e.parentElement)||void 0===n?void 0:n.querySelectorAll(`.${t}`);null==i||i.forEach((t=>{t!==e&&t.classList.remove("active-attribute")}))}v.forEach((e=>{e.addEventListener("click",(function(t){const n=t.target;if(n instanceof Element){n.classList.add("active-trend");const e=n.nextElementSibling;null==e||e.classList.add("active-trend"),n.textContent&&(h=n.textContent,f(h))}v.forEach((t=>{if(t!==e){const e=t.firstElementChild,n=null==e?void 0:e.nextElementSibling;null==e||e.classList.remove("active-trend"),null==n||n.classList.remove("active-trend")}}))}))})),f(h),p.addEventListener("click",(function(e){const t=e.target;(t instanceof Element&&t.classList.contains("size")||t instanceof Element&&t.classList.contains("colour"))&&(t.classList.add("active-attribute"),g(t,"size"),g(t,"colour"))}));const b=document.querySelector(".season"),y=[{title:"deal of the week",text:"spring collection",img:"../public/assets/spring-sale.webp"}].map((e=>{const{title:t,text:n,img:i}=e;return`<div class="deal">\n  <div class="img-container">\n\n  </div>\n  <div class="deal-content">\n<div class="title-container">\n  <span></span>\n  <p>${t}</p>\n</div>\n    <h2>${n}</h2>\n      <div class="deal-link-container">\n       <a  class="deals-link" href="https://mikeoppong.netlify.app" target="_blank">shop now</a>\n      <div class="btn-underline"></div>\n      </div>\n  </div>\n\n  </div>`})).join("");void 0!==y&&(b.innerHTML=y);let L=document.querySelector(".nav-links"),k=document.querySelector(".nav-menu-container"),E=["about","contact"],_=e.map(((e,t)=>` <li class="link ${0===t?"active":""}">\n            <a  href=${e.url} target="_blank" class="nav-link">${e.title}</a>\n            <i class="fa fa-caret-down ${E.includes(e.title)?"hide-icon":""}"></i>\n            </li>`)).join("");null!==_&&(L.innerHTML=_);let F=L.querySelectorAll(".link");F.forEach((e=>{e.addEventListener("mouseover",(function(){e.classList.contains("active")||e.classList.add("active"),F.forEach(((t,n)=>{t!==e&&0!==n&&t.classList.remove("active")}))}))})),F.forEach((t=>{t.addEventListener("mouseover",(function(n){var i,s;const l=null===(i=t.querySelector("a"))||void 0===i?void 0:i.textContent,o=e.find((e=>e.title===l)),a=null===(s=null==o?void 0:o.menu)||void 0===s?void 0:s.map((e=>`\n      <li><a href="">${e}</a></li>\n    `)).join("");let c=k.querySelector(".nav-menu");if(void 0===a)return void(k.style.visibility="hidden");c.innerHTML=a;let r=t.getBoundingClientRect();k.style.top=`${r.bottom+35}`,k.style.left=`${r.left}`,k.style.visibility="visible"}))})),window.addEventListener("mouseover",(function(e){const t=k.getBoundingClientRect();let n=t.left,i=t.right,s=t.bottom;(e.pageX<n||e.pageX>i||e.pageY>s)&&(k.style.visibility="hidden")}));const S=document.querySelector(".btn-search"),x=document.querySelector(".la-times"),$=document.querySelector(".la-search"),w=document.querySelector(".form-search");null==S||S.addEventListener("click",(function(){(null==x?void 0:x.classList.contains("show"))?(null==x||x.classList.add("hide"),null==x||x.classList.remove("show"),null==$||$.classList.remove("hide"),null==w||w.classList.remove("show")):(null==x||x.classList.remove("hide"),null==x||x.classList.add("show"),null==$||$.classList.add("hide"),null==w||w.classList.add("show"))}));const q=document.querySelector(".user-menu"),j=document.querySelector(".btn-user");null==j||j.addEventListener("click",(function(){(null==q?void 0:q.classList.contains("show-menu"))?null==q||q.classList.remove("show-menu"):null==q||q.classList.add("show-menu")})),window.addEventListener("mouseover",(function(e){const t=q.getBoundingClientRect();let n=t.left,i=t.right,s=t.bottom;(e.pageX<n||e.pageX>i||e.pageY>s)&&(null==q||q.classList.remove("show-menu"))}));let B=document.querySelector(".sidebar-container"),z=document.querySelector(".sidebar"),C=document.querySelector(".closeBtn-container");document.querySelector(".hamburgerBtn").addEventListener("click",(function(){B.classList.add("show"),B.classList.contains("hide")&&B.classList.remove("hide")})),C.addEventListener("click",(function(){B.classList.add("hide"),B.classList.contains("show")&&B.classList.remove("show")}));const M=document.createElement("ul");let T=e.map(((e,t)=>{var n;return` <li class="sidebar-link">\n            <div class="menu">\n            <a  href=${e.url} target="_blank" class="nav-link">${e.title}\n            </a>\n            <button class="toggle-btn"> <i class="la la-angle-right"></i></button>\n            </div>\n            <div class="child-menu-container">\n            <ul class="child-menu">\n           ${null===(n=e.menu)||void 0===n?void 0:n.map((e=>`<li class="child-menu-link">  <a  href="" target="_blank" >${e}</a></li>`)).join("")}\n            </ul>\n            </div>\n            </li>`})).join("");M.innerHTML=T,z.append(M),document.querySelectorAll(".toggle-btn").forEach((e=>{e.addEventListener("click",(function(e){var t;const n=e.currentTarget;if(n instanceof Element){const e=n.parentElement,i=null==e?void 0:e.nextElementSibling;let s=null==i?void 0:i.getBoundingClientRect().height,l=null===(t=null==i?void 0:i.firstElementChild)||void 0===t?void 0:t.getBoundingClientRect().height;i instanceof HTMLElement&&(i.style.height=0===s?`${l}px`:"0px"),document.querySelectorAll(".child-menu-container").forEach((e=>{e!==i&&e instanceof HTMLElement&&(e.style.height="0px")}))}}))}))})();