(function(){
  var els=document.querySelectorAll(".featured");
  if(!els.length||!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
  els.forEach(function(el){el.classList.add("reveal");io.observe(el)});
})();
