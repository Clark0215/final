var lightCate = 1;
var lightDir = 1;

var interval = null; // keeps track of the interval
var speed = 1; // determines the speed of the animation
var count = 5; // size of the image during the animation

var pos = 100;
var back = 0;

var keepMove = 1; //background move
var time = 1;
function start(){
  move();
  document.getElementById("bang").addEventListener("click",bang2,false);
  		 
}
function bang2(){
  setTimeout(function(){ bang(); }, 1000);
}
// background move
function move() {
	if(back == 0)
		++pos;
	else
		--pos;
		
    if (pos > 110) {
      back = 1;
    }
	else if (pos < 0) {
      back = 0;
    }
    document.body.setAttribute("style", "background-size: auto;"  + " background-position:"+ (pos +25) + "% "+  "0px;");
    if(keepMove)
		setTimeout(move, time );
  }
  function bang(){
      time = 999999;
      pos = -999999;
      output="";
      output = '<img src = "bang2.jpg">';
      result.innerHTML = output;
      result2.innerHTML = '<a href="page1.html"><img src = "start.jpg"></a><a class="aaaa" href="網頁說明.pptx">網頁說明</a>';
  }
  window.addEventListener("load", start, false);