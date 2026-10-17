(function(){
  var el=document.querySelector("[data-modrinth-downloads]");if(!el)return;
  fetch("/assets/downloads.json",{cache:"no-cache"}).then(function(r){if(!r.ok)throw r;return r.json()}).then(function(d){
    if(typeof d.downloads==="number")el.textContent=d.downloads.toLocaleString("en-US");
  }).catch(function(){});
})();
