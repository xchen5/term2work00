var c = document.getElementById("can");
var ctx = c.getContext("2d");

var counter = 0;
var toCircle = function(e){
    ctx.beginPath();
    var x = e.clientX;
    var y = e.clientY;
    ctx.fillStyle= "red";
    if (counter === 0){
	ctx.arc(x,y,10,0,2 * Math.PI);
	ctx.fill();
	ctx.moveTo(x,y);
	counter += 1;
    }
    else{
	ctx.arc(x,y,10,0,2 * Math.PI);
	ctx.fill();
	ctx.lineTo(x,y);
	ctx.stroke();
	counter += 1;
    }
};

var toClear = function(e){
    ctx.clearRect(0,0, 500,500);
    counter
};

var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", toClear);

var toggleButton = document.getElementById("toggle");

var toSquare = function(e){
  ctx.beginPath();
  var x = e.offsetX;
  var y = e.offsetY;
  ctx.rect(x,y,30,30);
  ctx.fillStyle = "blue";
  ctx.fill();
}

c.addEventListener("click", toCircle);

var keepTrack = 0;

var toToggle = function(e){
  if (keepTrack === 0){
    c.removeEventListener("click", toCircle);
    c.addEventListener("click", toSquare);
    keepTrack = 1;
  }
  else {
    c.removeEventListener("click", toSquare);
    c.addEventListener("click", toCircle);
    keepTrack = 0;
  };
};

toggleButton.addEventListener("click", toToggle);
