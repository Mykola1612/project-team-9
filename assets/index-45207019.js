(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open-buy]"),closeModalBtn:document.querySelector("[data-modal-close-buy]"),modal:document.querySelector("[data-modal-buy]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();window.addEventListener("DOMContentLoaded",function(){var o=document.querySelector(".swiper-wrapper"),t=Array.from(document.querySelectorAll(".swiper-slide")),l=0,s=t[0].offsetWidth;function e(){o.style.transform="translateX("+-l*s+"px)"}function n(r){if(r>=0&&r<t.length){l=r;var d=window.innerWidth<768?1:2.5;s=o.offsetWidth/d,e()}}o.addEventListener("touchstart",f),o.addEventListener("touchmove",p);var c=null;function f(r){c=r.touches[0].clientX}function p(r){if(c){var d=r.touches[0].clientX,u=c-d;u>0?slideNext():u<0&&slidePrev(),c=null}}for(var i=document.querySelectorAll(".op_swiper_buttons button"),a=0;a<i.length;a++)i[a].classList.add("op_swiper_button"),i[a].addEventListener("click",y);function y(){for(var r=this,d=0;d<i.length;d++)i[d].classList.remove("active");r.classList.add("active");var u=Array.from(i).indexOf(r);n(u)}function m(){var r=window.innerWidth,d=1;r>=768&&r<1200?d=2.5:r>=1200&&(d=4),s=o.offsetWidth/d,e()}m(),window.addEventListener("resize",m)});(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),s=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",s),l.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const o=document.querySelector(".js-menu-container-sub"),t=document.querySelector(".js-open-menu-sub"),l=document.querySelector(".js-close-menu-sub"),s=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",s),l.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
