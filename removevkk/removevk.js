
console.log("removevk: adding load listener");
window.addEventListener('load', function() {
  setTimeout( function() {
    console.log("removevk: disabling virtual keyboard");
    var pwd=document.querySelector('input[type="password"]');
    if (pwd) {
      pwd.removeAttribute("onfocus");
      pwd.removeAttribute("onclick");
      pwd.onkeypress=null;
      elClone = pwd.cloneNode(true);
      pwd.parentNode.replaceChild(elClone, pwd);
    }
  }, 300);
});

