(function(){
var d=document,root=d.documentElement,btn=d.getElementById("menuBtn"),ov=d.getElementById("mobOverlay"),cl=d.getElementById("mobClose");
function setOpen(o){d.body.classList.toggle("mob-open",o);root.style.overflow=o?"hidden":"";if(btn)btn.setAttribute("aria-expanded",o?"true":"false")}
if(btn)btn.addEventListener("click",function(){setOpen(true)});
if(ov)ov.addEventListener("click",function(){setOpen(false)});
if(cl)cl.addEventListener("click",function(){setOpen(false)});
d.querySelectorAll(".mob-drawer a").forEach(function(a){a.addEventListener("click",function(){setOpen(false)})});
d.addEventListener("keydown",function(e){if(e.key==="Escape")setOpen(false)});
window.addEventListener("resize",function(){if(window.innerWidth>768)setOpen(false)});
d.querySelectorAll(".faq-q").forEach(function(q){q.addEventListener("click",function(){
var it=q.parentNode,a=it.querySelector(".faq-a"),o=it.classList.toggle("open");
q.setAttribute("aria-expanded",o?"true":"false");a.style.maxHeight=o?a.scrollHeight+"px":"0"})});
})();
