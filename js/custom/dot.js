


//global
var ctx;
var lineCtx;
var cc = 0;
var delay = 25;
var radius = 3.2;
var shuffle = false;



//min 1
//higher is slower, no floats
var SPEED = 2;

var LINE_ALPHA = 0.75;

var rArray = [];
var rTemp = [];
var w = window.innerWidth;
var h = window.innerHeight;
var myCanvasId = document.getElementById('lineCanvas');


myCanvasId.width = w
myCanvasId.height = h
//myCanvasId.style.marginLeft = w/4 - 100 + 'px';
//myCanvasId.style.marginTop = h/4 - 200 + 'px';
var waypoints=[];

 var yHeights = {
       startY: 0,
       endY: 0
   
    }


var yValues = [100, 200, 250, 350, 450, 500, 550, 650, 225, 300];

// variable to hold how many frames have elapsed in the line animation
var t=1;
var points;


//random y heights
var getRandomIndex = function() {

	return yValues[Math.floor(Math.random() * yValues.length)];	
}


//ramdon nummber between minimum and maximum
var randomFromTo = function(min, max) {

	return Math.floor(Math.random() * (max - min + 1) + min);

}


//constructor
var Dot = function(x, y, canvas) {

	this.x = x;
	this.y = y;
	this.canvas = canvas;
	this.amount = randomFromTo(3, 6);
	ctx = this.canvas.getContext("2d");
	lineCtx = myCanvasId.getContext("2d");
	ctx.strokeStyle = '#ffffff';
	ctx.fillStyle = '#ffffff';
	lineCtx.strokeStyle = '#ffffff';
	lineCtx.fillStyle = '#ffffff';
}


//store line point in array to create line animation
function calcWaypoints(vertices){
					 
	    for (var i=1; i<vertices.length; i++){
	        var pt0=vertices[i-1];
	        var pt1=vertices[i];
	        var dx=pt1.x-pt0.x;
	        var dy=pt1.y-pt0.y;

	        for(var j=0;j<(50*SPEED);j++){
	            var x=pt0.x+dx*j/(50*SPEED);
	            var y=pt0.y+dy*j/(50*SPEED);
	            waypoints.push({x:x,y:y});
	        }
	    }
	    return(waypoints);
	}

var lineToDot = function() {
						

			lineCtx.save();
			lineCtx.globalAlpha =  1;
			lineCtx.lineWidth = 0.65;
			lineCtx.beginPath();
			//+1 and -1 after .x and .y gives little dashed line effect
		 	lineCtx.moveTo(points[t-1].x + 1 ,points[t-1].y - 1);
		    lineCtx.lineTo(points[t].x,points[t].y);
			lineCtx.stroke();
			lineCtx.restore();
			t++;
		

		}


Dot.prototype.create = function() {

					var self = this;
				
				
					for (var i =0; i < self.amount; i++) {

						rArray.push(getRandomIndex());

					}

					var oldX = self.x;


					var vertices=[];

					//+1 to make scanner move 1 block further before finishing
					for (var i = 0; i < self.amount + 1; i++) {

								if (i == 0) {
									vertices.push({x:self.x , y:rArray[i]});
								}

								if (i > 0) {
									vertices.push({x:oldX + i*200, y:rArray[i]});
								}

			
				}

					// calculate incremental points along the path
					points = calcWaypoints(vertices);

			

				function drawCanvas() {




					//a is number of dots
					//i is number of rings around dots
					for (var a = 0; a < self.amount; a++) {
							
						for (var i = 0; i < 5; i++) {

					//find way to make this shorter
						if (t>=1 && points.length > 1 ) {

							//following cross
								ctx.save();
								ctx.beginPath();
								ctx.globalAlpha = 1;
								ctx.lineWidth = 0.01;
							 	ctx.moveTo(points[t-1].x+5, 0);
							    ctx.lineTo(points[t-1].x+5, window.innerHeight);
							    ctx.moveTo(0, points[t-1].y);
							    ctx.lineTo(window.innerWidth, points[t-1].y);
								ctx.stroke();
								//restore makes each path indiviual
								ctx.restore();


							//first line
							//drawing lines x and y lines when cross hits target
								ctx.save();
								ctx.beginPath();
								ctx.lineWidth = 0.015;
								ctx.globalAlpha = LINE_ALPHA;
							 	ctx.moveTo(points[0].x, 0);
							    ctx.lineTo(points[0].x, window.innerHeight);
							    ctx.moveTo(0, points[0].y);
							    ctx.lineTo(window.innerWidth, points[0].y);
								ctx.stroke();
								ctx.restore();

							
						}


						//second line
						if (t >= (50*SPEED) && points.length > (50*SPEED)) {




								ctx.globalAlpha =  1 - i/6 - a + 1;
								ctx.save();
								ctx.beginPath();
								ctx.lineWidth = 0.015;
								ctx.globalAlpha = LINE_ALPHA;
							 	ctx.moveTo(points[50*SPEED].x, 0);
							    ctx.lineTo(points[50*SPEED].x, window.innerHeight);
							    ctx.moveTo(0, points[50*SPEED].y);
							    ctx.lineTo(window.innerWidth, points[50*SPEED].y);
								ctx.stroke();
								ctx.restore();

						
						}

						//third line
						if (t >= (100*SPEED) && points.length > (100*SPEED)) {

								ctx.globalAlpha =  1 - i/6 - a + 2;
								ctx.save();
								ctx.beginPath();
								ctx.lineWidth = 0.015;
								ctx.globalAlpha = LINE_ALPHA;
							 	ctx.moveTo(points[100*SPEED].x, 0);
							    ctx.lineTo(points[100*SPEED].x, window.innerHeight);
							    ctx.moveTo(0, points[100*SPEED].y);
							    ctx.lineTo(window.innerWidth, points[100*SPEED].y);
								ctx.stroke();
								ctx.restore();

							

						} 

						//fourth line
						if (t >= (149*SPEED) && points.length > (149*SPEED) ) {

								ctx.globalAlpha =  1 - i/6 - a + 3;
								ctx.save();
								ctx.beginPath();
								ctx.lineWidth = 0.015;
								ctx.globalAlpha = LINE_ALPHA;
							 	ctx.moveTo(points[149*SPEED].x, 0);
							    ctx.lineTo(points[149*SPEED].x, window.innerHeight);
							    ctx.moveTo(0, points[149*SPEED].y);
							    ctx.lineTo(window.innerWidth, points[149*SPEED].y);
								ctx.stroke();
								ctx.restore();

							

						}


							//fourth line
						if (t >= (200*SPEED) && points.length > (200*SPEED)) {


								ctx.globalAlpha =  1 - i/6 - a + 4;
								ctx.save();
								ctx.beginPath();
								ctx.lineWidth = 0.015;
								ctx.globalAlpha = LINE_ALPHA;
							 	ctx.moveTo(points[200*SPEED].x, 0);
							    ctx.lineTo(points[200*SPEED].x, window.innerHeight);
							    ctx.moveTo(0, points[200*SPEED].y);
							    ctx.lineTo(window.innerWidth, points[200*SPEED].y);
								ctx.stroke();
								ctx.restore();

						}


							//fourth line
						if (t >= (249*SPEED) && points.length > (249*SPEED)) {

								ctx.globalAlpha =  1 - i/6 - a + 5;
								ctx.save();
								ctx.beginPath();
								ctx.lineWidth = 0.015;
								ctx.globalAlpha = LINE_ALPHA;
							 	ctx.moveTo(points[249*SPEED].x, 0);
							    ctx.lineTo(points[249*SPEED].x, window.innerHeight);
							    ctx.moveTo(0, points[249*SPEED].y);
							    ctx.lineTo(window.innerWidth, points[249*SPEED].y);
								ctx.stroke();
								ctx.restore();		

						}


						

						
							//static centered dot
							ctx.globalAlpha =  1 - i/6 - a;
							ctx.lineWidth = 4.5 - i * 2.0;		
							ctx.beginPath();
							ctx.arc(self.x + a * 200 , rArray[a], 2, 0, 2*Math.PI);
							ctx.stroke();

							ctx.globalAlpha =  1 - i/6 - a;
							ctx.lineWidth = 4.5 - i * 2.0;		
							ctx.beginPath();
							ctx.arc(self.x + a * 200 , rArray[a] , Math.abs(1 + Math.cos(cc + i*5)  / i*delay/radius + i*delay/radius) , 0, 2*Math.PI);
							ctx.stroke();				

							}
						}

						//animation speed of pulses
						cc+=0.07;
					}


				function animate() {
	
					//request to render
					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
					window.requestAnimationFrame(animate);
					//redraw canvas
					drawCanvas();
						


						//check if t did not finish the end of the path
						if ( t<points.length ) { 

							lineToDot();
							shuffle = false;

						}
						//else line is finished
						  else { console.log('done first scan'); 
						 
					


									//close all circles, += because value is negative
									 radius+=0.2;
									 self.amount = randomFromTo(3, 6);

									//wait 500ms before removing
									//so there's time for radius animation
									setTimeout(function () {

												shuffle = true;
												radius = 3.2;
										 		rArray = [];

							 	 				//this gives the glitchy effect in when redrawing
							 	 				//ramdom index gets called multiple times
										 		for (var i =0; i < self.amount; i++) {
													rArray.push(getRandomIndex());
											
												}
												//put line incrementer 't' back on 1
										 		t=1;
										 		

										 		//delete all point array holders for point to be redrawn
										 		//push vertices afterwards
											 	lineCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
											 	waypoints=[];
											 	vertices=[];
													for (var i = 0; i < self.amount + 1; i++) {

														if (i == 0) {
															vertices.push({x:self.x , y:rArray[i]});
														}

														if (i > 0) {
															vertices.push({x:oldX + i*200, y:rArray[i]});
														}

														//vertices.push({x:oldX + 200 ,y:rArray[2]});
														//vertices.push({x:oldX + 400 ,y:rArray[3]});
				}
												points = calcWaypoints(vertices);
									}, 500);
								}
					

						} //End of animate

					animate();

} //End of prototype.create







