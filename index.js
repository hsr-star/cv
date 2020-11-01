


var n;
   if (!window.sessionStorage) {  // if sessionStorage not supported
         var name=prompt("what's your name Visiter","User"); // perform other action
   }
   n = window.sessionStorage.getItem('name');
   if (!n) {
       n = prompt("what's your name Visiter","User");
       window.sessionStorage.setItem('name', n);
   }
   document.querySelector("p").innerHTML ="Hii,  " +n;
