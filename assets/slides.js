(function(){
  document.querySelectorAll("[data-slides]").forEach(function(box){
    var imgs=box.querySelectorAll("img"),i=0,timer=null;if(imgs.length<2)return;
    var dots=document.createElement("div");dots.className="dots";
    imgs.forEach(function(_,n){
      var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Show image "+(n+1));
      b.addEventListener("click",function(){go(n);start()});dots.appendChild(b);
    });
    box.appendChild(dots);
    function go(n){
      imgs[i].classList.remove("on");dots.children[i].classList.remove("on");
      i=(n+imgs.length)%imgs.length;
      imgs[i].classList.add("on");dots.children[i].classList.add("on");
    }
    function start(){
      clearInterval(timer);
      if(!matchMedia("(prefers-reduced-motion: reduce)").matches)timer=setInterval(function(){go(i+1)},4500);
    }
    box.addEventListener("mouseenter",function(){clearInterval(timer)});
    box.addEventListener("mouseleave",start);
    go(0);start();
  });
})();
