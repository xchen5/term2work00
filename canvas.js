var c = document.getElementById("can");
var ctx = c.getContext("2d");

var toCircle = function(e){
    ctx.beginPath();
    var x = e.clientX;
    var y = e.clientY;
    ctx.arc(x,y,10,0,2 * Math.PI);
    ctx.fillStyle= "red";
    ctx.fill();
};

c.addEventListener("click", toCircle);

