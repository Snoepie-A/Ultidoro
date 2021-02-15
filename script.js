var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 0;

     function myClock() {
       document.getElementById("workTime").innerHTML = ++c;
       }
     }
