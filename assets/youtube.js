(function(){
  var boxes=document.querySelectorAll("[data-youtube]");if(!boxes.length)return;
  boxes.forEach(function(b){b._placeholder=b.innerHTML});
  function apply(v){
    boxes.forEach(function(b){
      var loaded=!!b.querySelector("iframe");
      if(v==="all"&&!loaded){
        var f=document.createElement("iframe");
        f.src="https://www.youtube-nocookie.com/embed/"+b.getAttribute("data-youtube");
        f.title="YouTube video";f.loading="lazy";f.allowFullscreen=true;
        f.allow="accelerometer; encrypted-media; gyroscope; picture-in-picture";
        f.referrerPolicy="strict-origin-when-cross-origin";
        b.innerHTML="";b.appendChild(f);
      }else if(v!=="all"&&loaded){b.innerHTML=b._placeholder}
    });
  }
  document.addEventListener("rp-consent",function(e){apply(e.detail)});
  apply(window.rpConsent&&window.rpConsent.get());
})();
