(()=>{"use strict";var t={889:()=>{let t=document.querySelector(".sidebar-container"),e=(document.querySelector(".sidebar"),document.querySelector(".closeBtn-container"));document.querySelector(".hamburgerBtn").addEventListener("click",(function(){t.classList.add("show"),t.classList.contains("hide")&&t.classList.remove("hide")})),e.addEventListener("click",(function(){t.classList.add("hide"),t.classList.contains("show")&&t.classList.remove("show"),console.log("ll")}))}},e={};let l=[{title:"home",url:"https://www.google.com",menu:["home 1","home 3","home 3"]},{title:"shop",url:"",menu:["product style 1","product style 3","product style 3","product style 4","product style 5","product style 6"]},{title:"blog",url:"",menu:["blog list 1","blog list 3"]},{title:"about",url:""},{title:"contact",url:""}];const i=document.querySelector(".footer-center"),n=[{title:"company",links:[{text:"about us",url:""},{text:"careers",url:""},{text:"affiliates",url:""},{text:"blog",url:""},{text:"contact us",url:""}]},{title:"shop",links:[{text:"accessories",url:""},{text:"men",url:""},{text:"women",url:""},{text:"clothes",url:""},{text:"shop all",url:""}]},{title:"help",links:[{text:"customer service",url:""},{text:"my account",url:""},{text:"find a store",url:""},{text:"legal & privacy",url:""},{text:"contact",url:""}]}].map((t=>`   <div class="footer-menu">\n                <h2>${t.title}</h2>\n          <div class="footer-menu-link">\n            <ul class="footer-link">\n                  ${t.links.map((t=>`<li><a href=${t.url} target="_blank">${t.text}</a></li>`)).join("")}\n            </ul>\n          </div>\n        </div>`)).join("");i.innerHTML=n;const o=document.querySelector(".slider"),s=document.querySelector(".left-btn"),c=document.querySelector(".middle-btn"),r=document.querySelector(".right-btn"),a=document.querySelectorAll(".dot-btn"),u=[{id:1,url:"https://images.unsplash.com/photo-1720811118401-0c947249988c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:2,url:"https://images.unsplash.com/photo-1721146609543-491c1ec04240?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{id:3,url:"https://images.unsplash.com/photo-1720983415059-43ec4007cf97?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}].map((t=>`<div class="slide">\n   <img class="slide-img"  src=${t.url} alt="">\n   <div class="slide-content">\n    <p>slide ${t.id}</p>\n    </div>\n    </div>`)).join("");o.innerHTML=u;const d=document.querySelectorAll(".slide");let f=0;function m(t){d.forEach(((e,l)=>{e.style.transform=`translateX(-${100*t}%)`,e.style.transition="2s"}))}d.forEach((function(t,e){t.style.left=100*e+"%"})),s.addEventListener("click",(function(){f=0,m(f)})),r.addEventListener("click",(function(){f=2,m(f)})),c.addEventListener("click",(function(){f=1,m(f)})),a.forEach((t=>{t.addEventListener("click",(function(e){t.classList.contains("active-btn")||t.classList.add("active-btn"),a.forEach((e=>{e!==t&&e.classList.remove("active-btn")}))}))})),setInterval((()=>{const t=Math.floor(3*Math.random());m(t),a.forEach(((e,l)=>{l===t&&e.classList.add("active-btn")})),a.forEach(((e,l)=>{l!==t&&e.classList.remove("active-btn")}))}),5e3);let v=document.querySelector(".nav-links"),h=document.querySelector(".nav-menu-container"),p=["about","contact"],x=l.map(((t,e)=>` <li class="link ${0===e?"active":""}">\n            <a  href=${t.url} target="_blank" class="nav-link">${t.title}</a>\n            <i class="la la-caret-down ${p.includes(t.title)?"hide-icon":""}"></i>\n            </li>`)).join("");null!==x&&(v.innerHTML=x);let y=v.querySelectorAll(".link");y.forEach((t=>{t.addEventListener("mouseover",(function(){t.classList.contains("active")||t.classList.add("active"),y.forEach(((e,l)=>{e!==t&&0!==l&&e.classList.remove("active")}))}))})),y.forEach((t=>{t.addEventListener("mouseover",(function(e){var i,n;const o=null===(i=t.querySelector("a"))||void 0===i?void 0:i.textContent,s=l.find((t=>t.title===o)),c=null===(n=null==s?void 0:s.menu)||void 0===n?void 0:n.map((t=>`\n      <li><a href="">${t}</a></li>\n    `)).join("");let r=h.querySelector(".nav-menu");if(void 0===c)return void(h.style.visibility="hidden");r.innerHTML=c;let a=t.getBoundingClientRect();h.style.top=`${a.bottom+35}`,h.style.left=`${a.left}`,h.style.visibility="visible"}))})),window.addEventListener("mouseover",(function(t){const e=h.getBoundingClientRect();let l=e.left,i=e.right,n=e.bottom;(t.pageX<l||t.pageX>i||t.pageY>n)&&(h.style.visibility="hidden")})),function l(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,l),o.exports}(889)})();