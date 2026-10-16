(function(){
  var KEY="rp-consent";
  function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
  function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
  var css=".rp-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:100;max-width:560px;margin:0 auto;padding:22px 24px;border-radius:18px;background:#0a0a0a;border:1px solid #262626;color:#ffffff;font:14px/1.6 Inter,system-ui,sans-serif;box-shadow:0 30px 60px -20px rgba(0,0,0,.7)}"+
  ".rp-cc h4{margin:0 0 6px;font-size:15px}.rp-cc p{margin:0 0 16px;color:#8a8a8a}.rp-cc a{color:#ffffff;text-decoration:underline}"+
  ".rp-cc .b{display:flex;gap:10px;flex-wrap:wrap}.rp-cc button{flex:1;min-width:150px;height:42px;border-radius:10px;font:600 14px Inter,system-ui,sans-serif;cursor:pointer;border:1px solid #2e2e2e;background:transparent;color:#ffffff}"+
  ".rp-cc button.p{background:#ffffff;color:#000000;border-color:#ffffff}";
  function show(){
    if(document.querySelector(".rp-cc"))return;
    var s=document.createElement("style");s.textContent=css;document.head.appendChild(s);
    var d=document.createElement("div");d.className="rp-cc";d.setAttribute("role","dialog");d.setAttribute("aria-label","Cookie settings");
    d.innerHTML='<h4>Privacy settings</h4><p>This website only uses technically necessary storage (for example to remember this choice). Optional services are only enabled if you accept them. You can change your choice at any time via “Cookie settings” at the bottom of the page. More in our <a href="/legal.html#website">Privacy Policy</a>.</p><div class="b"><button type="button" data-v="necessary">Only necessary</button><button type="button" class="p" data-v="all">Accept all</button></div>';
    d.addEventListener("click",function(e){var v=e.target.getAttribute&&e.target.getAttribute("data-v");if(v){set(v);d.remove();document.dispatchEvent(new CustomEvent("rp-consent",{detail:v}))}});
    document.body.appendChild(d);
  }
  window.rpConsent={get:get,open:show};
  document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("[data-cookie-settings]");if(a){e.preventDefault();show()}});
  if(!get()){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",show);else show()}
})();
