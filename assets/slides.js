(function(){
  var ARROW='<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>';
  document.querySelectorAll("[data-slides]").forEach(function(box){
    var items=box.querySelectorAll(".slide"),i=0,timer=null,stopped=false;if(items.length<2)return;
    var dots=document.createElement("div");dots.className="dots";
    items.forEach(function(_,n){
      var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Show slide "+(n+1));
      b.addEventListener("click",function(){go(n);start()});dots.appendChild(b);
    });
    [["prev","Previous slide",-1],["next","Next slide",1]].forEach(function(a){
      var b=document.createElement("button");b.type="button";b.className="arrow "+a[0];b.setAttribute("aria-label",a[1]);
      b.innerHTML=a[2]<0?ARROW:ARROW.replace("M15 5l-7 7 7 7","M9 5l7 7-7 7");
      b.addEventListener("click",function(){go(i+a[2]);start()});box.appendChild(b);
    });
    box.appendChild(dots);
    function go(n){
      var f=items[i].querySelector("iframe");if(f)f.src=f.src;// stop playback of the video being left
      items[i].classList.remove("on");dots.children[i].classList.remove("on");
      i=(n+items.length)%items.length;
      items[i].classList.add("on");dots.children[i].classList.add("on");
    }
    function start(){
      clearInterval(timer);
      if(!stopped&&!matchMedia("(prefers-reduced-motion: reduce)").matches)timer=setInterval(function(){go(i+1)},5000);
    }
    // Clicking into a video (focus moves into the iframe) stops auto-advance so playback isn't interrupted
    window.addEventListener("blur",function(){
      setTimeout(function(){var a=document.activeElement;if(a&&a.tagName==="IFRAME"&&box.contains(a)){stopped=true;clearInterval(timer)}},0);
    });
    box.addEventListener("mouseenter",function(){clearInterval(timer)});
    box.addEventListener("mouseleave",start);
    go(0);start();
  });
})();
