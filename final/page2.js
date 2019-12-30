		  var counter;
		  var grade;
		 
		function mystart() {
		  grade=0;
		  counter=1;
		  var x = document.getElementById("start");
		  var y = document.getElementById("game");
		  var a = document.getElementById("bgm");
		  a.volume=0.05;
		  a.loop=true;
		  a.play();  
		  x.setAttribute("style", "display:none;");
		  y.setAttribute("style", "display:block;");
		  document.getElementById("body").setAttribute("style", "background-image:url('stage.jpg');");
		  playdog();
		  show();
		}
		function show(){
		  var no = document.getElementById("no");
		  var gd = document.getElementById("grade");
		  var ans = document.getElementById("ans");
		  
		setTimeout(function(){ ans.innerHTML=""; }, 1000);

		  playdog();
		  no.innerHTML=counter-1;
		  gd.innerHTML=grade;
			
		}
		function playdog(){
			var b1 = document.getElementById("bark1");
			var b2 = document.getElementById("bark2");
			var b3 = document.getElementById("bark3");
			var b4 = document.getElementById("bark4");
			var b5 = document.getElementById("bark5");
			if(counter==1){
					b1.play();	
				}
			else if(counter==2){
			        b1.pause();	
					b2.play();	
				}
			else if(counter==3){
			        b2.pause();	
					b3.play();	
				}	
			else if(counter==4){
					b3.pause();
					b4.play();	
				}
			else if(counter==5){
			        b4.pause();	
					b5.play();	
				}	
		}
		function choice(e){
			var ans = document.getElementById("ans");
			if(counter==1){
				if(e==2){
					grade=grade+20;
					ans.innerHTML="O";
				}
				else{
					ans.innerHTML="X";
				}
			}
			else if(counter==2){
			    if(e==3){
					grade=grade+20;	
					ans.innerHTML="O";
				}
				else{
					ans.innerHTML="X";
				}
			
			}
			else if(counter==3){
			    if(e==4){
					grade=grade+20;	
					ans.innerHTML="O";
				}
				else{
					ans.innerHTML="X";
				}
			
			}
			else if(counter==4){
			    if(e==3){
					grade=grade+20;	
					ans.innerHTML="O";
				}
				else{
					ans.innerHTML="X";
				}
			
			}
			else if(counter==5){
			    if(e==1){
					grade=grade+20;	
					ans.innerHTML="O";
				}
				else{
					ans.innerHTML="X";
				}
			
			}
			counter++;
			if(counter<6){
				change();
				show();
				}
			else{
				end();
			}
		}
		function end(){
			var b5 = document.getElementById("bark5");
		   var y = document.getElementById("game");
		   var x = document.getElementById("end");
		   b5.pause();
		    x.style.display = "block";
		    y.style.display = "none";
			document.getElementById("body").setAttribute("style", "background-image: none;");
			x.innerHTML=""
			output=""
			if(grade==100){
			output="<h1>你得到了"+grade+"分!<br>你好棒!你是吉娃娃達人!</h1>"
			}
			else if(grade>=60 && grade<100){
			output="<h1>你得到了"+grade+"分!<br>很好了!看來你對吉娃娃很有研究.</h1>"
			}
			else if(grade>=20 && grade<60){
			output="<h1>你得到了"+grade+"分!<br>加油!你對吉娃娃的了解只差一步.</h1>"
			}
			else if(grade==0){
			output="<h1>你得到了"+grade+"分!<br>看來你是沒被吉娃娃打斷過鼻樑!</h1>"
			}
			x.innerHTML=output;
		}
		function change(){
		  var p1 = document.getElementById("1");
		  var p2 = document.getElementById("2");
		  var p3 = document.getElementById("3");
		  var p4 = document.getElementById("4");
		  
		  
		  p1.setAttribute("src","guest\\gwwguest"+counter+"-1.jpg");
		  p2.setAttribute("src", "guest\\gwwguest"+counter+"-2.jpg");
		  p3.setAttribute("src", "guest\\gwwguest"+counter+"-3.jpg");
		  p4.setAttribute("src", "guest\\gwwguest"+counter+"-4.jpg");
		
		}
		function inst() {
		  window.alert("聽聲辨吉娃娃----\n每題開始前都會放出吉娃娃其一的叫聲\n請選出叫聲的主人\n一共五題，每題二十分");
		  bgm.pause();
		  
		}
        