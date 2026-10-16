(function(){
  var API="https://api.modrinth.com/v2/project/x-to-xray",KEY="rp-xr-downloads",EVERY=20*60*1000,FALLBACK="450,000+";
  var el=document.querySelector("[data-modrinth-downloads]");if(!el)return;
  var timer=null;
  function show(n){el.textContent=n}
  function load(){
    try{var c=JSON.parse(localStorage.getItem(KEY));if(c&&Date.now()-c.t<EVERY){show(c.n.toLocaleString("en-US"));return}}catch(e){}
    fetch(API).then(function(r){if(!r.ok)throw r;return r.json()}).then(function(p){
      if(typeof p.downloads!=="number"||!window.rpConsent||window.rpConsent.get()!=="all")return;
      show(p.downloads.toLocaleString("en-US"));
      try{localStorage.setItem(KEY,JSON.stringify({n:p.downloads,t:Date.now()}))}catch(e){}
    }).catch(function(){});
  }
  function apply(v){
    clearInterval(timer);timer=null;
    if(v==="all"){load();timer=setInterval(load,EVERY)}
    else{show(FALLBACK);try{localStorage.removeItem(KEY)}catch(e){}}
  }
  document.addEventListener("rp-consent",function(e){apply(e.detail)});
  apply(window.rpConsent&&window.rpConsent.get());
})();
