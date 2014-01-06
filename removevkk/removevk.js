
console.log("removevk: adding load listener");
window.addEventListener('load', function() {
  setTimeout( function() {
    console.log("removevk: disabling virtual keyboard");
    var pwd=document.querySelector('input[type="password"]');
    pwd.removeAttribute("onfocus");
    pwd.removeAttribute("onclick");
    pwd.onkeypress=null;
  }, 300);
});

