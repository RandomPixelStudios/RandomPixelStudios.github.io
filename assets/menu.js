(function(){
  var h=document.querySelector("header"),b=h&&h.querySelector(".menu");if(!b)return;
  function set(o){h.classList.toggle("open",o);b.setAttribute("aria-expanded",o?"true":"false")}
  b.addEventListener("click",function(){set(!h.classList.contains("open"))});
  h.querySelectorAll("nav a").forEach(function(a){a.addEventListener("click",function(){set(false)})});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
})();
