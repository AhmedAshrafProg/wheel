
var spinn1 = document.getElementById("spinn1");
var spinn2 = document.getElementById("spinn2");
spinn1.onclick = function(){
 document.getElementById("wheel").style.transition ="all 4s";
 document.getElementById("wheel").style.transform  ="rotate(7200deg)";
 document.getElementById("wheel").style.transform  ="translate(1000px)";

};

spinn2.onclick = function(){
    document.getElementById("wheel").style.transition ="all 4s";
    document.getElementById("wheel").style.transform  ="rotate(7200deg)";
    document.getElementById("wheel").style.transform  ="translate(0)";

};