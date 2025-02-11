(()=>{"use strict";function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),3e4);(function(t,e,n,o){const r=document.querySelectorAll(t),s=document.querySelectorAll(e),a=document.querySelector(n);function i(){s.forEach((t=>{t.classList.add("hide"),t.classList.remove("show")})),r.forEach((t=>{t.classList.remove(o)}))}function c(t=0){s[t].classList.add("show","fade"),s[t].classList.remove("hide"),r[t].classList.add(o)}i(),c(),a.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&r.forEach(((t,e)=>{n==t&&(i(),c(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const s=document.querySelectorAll(n),a=document.querySelector(o);s.forEach((e=>{e.addEventListener("click",(()=>t(o,r)))})),a.addEventListener("click",(t=>{t.target!==a&&""!=t.target.getAttribute("data-close")||e(o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&a.classList.contains("show")&&e(o)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(o,r),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(){const t=document.querySelector(".calculating__result span");let e,n,o,r,s;function a(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function i(){t.textContent=e&&n&&o&&r&&s?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*r)*s):Math.round((88.36+13.4*o+4.8*n-5.7*r)*s):"____"}function c(t,n){const o=document.querySelectorAll(t);o.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(s=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),o.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),i()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":r=+e.value}i()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?s=localStorage.getItem("ratio"):(s=1.375,localStorage.setItem("ratio",1.375)),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),i(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(){class t{constructor(t,e,n,o,r,s){this.src=t,this.alt=e,this.title=n,this.description=o,this.price=r,this.parent=document.querySelector(s),this.transfer=27,this.changeToUAN()}changeToUAN(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");t.innerHTML=`\n\t\t\t\t\t\t\t<div class="menu__item">\n\t\t\t\t\t\t\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t\t\t\t\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t\t\t\t\t\t\t<div class="menu__item-descr">${this.description}</div>\n\t\t\t\t\t\t\t\t\t<div class="menu__item-divider"></div>\n\t\t\t\t\t\t\t\t\t<div class="menu__item-price">\n\t\t\t\t\t\t\t\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t`,this.parent.append(t)}}new t("img/tabs/vegy.jpg","vegy",'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',9,".menu .container").render(),new t("img/tabs/elite.jpg","elite",'Меню "Премиум"',"В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",11,".menu .container").render(),new t("img/tabs/post.jpg","post",'Меню "Фитнес"',"Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",24,".menu .container").render()}(),function(n,o){const r=document.querySelectorAll(n),s={loading:"img/form/spinner.svg",success:"Спасибо! Мы с вами скоро свяжемя.",error:"Что-то пошло не так..."};function a(n){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),t(".modal",o);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n\t\t\t\t\t\t<div class="modal__content">\n\t\t\t\t\t\t\t\t<div class="modal__close" data-close>×</div>\n\t\t\t\t\t\t\t\t<div class="modal__title">${n}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t`,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),r.classList.add("show"),r.classList.remove("hide"),e(".modal")}),4e3)}r.forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();let n=document.createElement("img");n.src=s.loading,n.style.cssText="\n\t\t\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t\t\t\t",e.insertAdjacentElement("afterend",n);const o=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),a(s.success),n.remove()})).catch((()=>{a(s.failure)})).finally((()=>{e.reset()}))}))}))}("form",n),function({container:t,slide:e,nextArrow:n,prevArrow:o,totalCounter:r,currentCounter:s,wrapper:a,field:i}){const c=document.querySelectorAll(e),l=document.querySelector(t),d=document.querySelector(o),u=document.querySelector(n),m=document.querySelector(r),g=document.querySelector(s),h=document.querySelector(a),f=document.querySelector(i),y=window.getComputedStyle(h).width;let p=1,v=0;f.style.width=100*c.length+"%",f.style.display="flex",f.style.transition="0.5s all",h.style.overflow="hidden",c.forEach((t=>{t.style.width=y})),l.style.position="relative";const _=document.createElement("ol"),L=[];_.classList.add("carousel-indicators"),_.style.cssText="\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 15;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tmargin-right: 15%;\n\t\tmargin-left: 15%;\n\t\tlist-style: none;\n\t\t",l.append(_);for(let t=0;t<c.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n\t\t\tbox-sizing: content-box;\n\t\t\tflex: 0 1 auto;\n\t\t\twidth: 30px;\n\t\t\theight: 6px;\n\t\t\tmargin-right: 3px;\n\t\t\tmargin-left: 3px;\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: #fff;\n\t\t\tbackground-clip: padding-box;\n\t\t\tborder-top: 10px solid transparent;\n\t\t\tborder-bottom: 10px solid transparent;\n\t\t\topacity: .5;\n\t\t\ttransition: opacity .6s ease;\n\t\t",0==t&&(e.style.opacity=1),_.append(e),L.push(e)}function b(t){return+t.replace(/\D/g,"")}c.length<10?(m.textContent=`0${c.length}`,g.textContent=`0${p}`):(m.textContent=c.length,g.textContent=p),u.addEventListener("click",(()=>{v==b(y)*(c.length-1)?v=0:v+=b(y),f.style.transform=`translateX(-${v}px)`,p==c.length?p=1:p++,c.length<10?g.textContent=`0${p}`:g.textContent=p,L.forEach((t=>t.style.opacity=".5")),L[p-1].style.opacity=1})),d.addEventListener("click",(()=>{0==v?v=b(y)*(c.length-1):v-=b(y),f.style.transform=`translateX(-${v}px)`,1==p?p=c.length:p--,c.length<10?g.textContent=`0${p}`:g.textContent=p,L.forEach((t=>t.style.opacity=".5")),L[p-1].style.opacity=1})),L.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");p=e,v=b(y)*(e-1),f.style.transform=`translateX(-${v}px)`,c.length<10?g.textContent=`0${p}`:g.textContent=p,L.forEach((t=>t.style.opacity=".5")),L[p-1].style.opacity=1}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",slide:".offer__slide",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const o=document.querySelector(t),r=o.querySelector("#days"),s=o.querySelector("#hours"),a=o.querySelector("#minutes"),i=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(t){let e,n,o,r;const s=Date.parse(t)-Date.parse(new Date);return s<=0?(e=0,n=0,o=0,r=0):(e=Math.floor(s/864e5),n=Math.floor(s/36e5%24),o=Math.floor(s/1e3/60%60),r=Math.floor(s/1e3%60)),{total:s,days:e,hours:n,minutes:o,seconds:r}}(e);r.innerHTML=n(t.days),s.innerHTML=n(t.hours),a.innerHTML=n(t.minutes),i.innerHTML=n(t.seconds),t.total<=0&&clearInterval(c)}l()}(t,e)}(".timer","2025-09-22")}))})();
//# sourceMappingURL=bundle.js.map