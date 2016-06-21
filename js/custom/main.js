


(function (){

	var w = window.innerWidth;
	var h = window.innerHeight;
	var c = document.getElementById('myCanvas');
	var m = document.querySelectorAll('.matrix');
	var top = document.getElementById('topText');


	


	init();

	function init() {

		
		c.width = w;
		c.height = h;
		//c.style.marginLeft = w/4 - 100 + 'px';
		//c.style.marginTop = h/4 - 200 + 'px';
		//c.style.marginLeft = w + 'px';
		//c.style.marginTop = w + 'px';
		//top.style.marginLeft = w/4 - 100 + 'px';
		//top.style.marginTop = h/4 - 200 + 'px';
		
		//x, y, canvasId, amount	
		var dot = new Dot(120, 100, c);
		dot.create();



		setTimeout(function (){
		var matrix = new Matrix(m);
		matrix.iterate(10, 500, 500);
		}, 500);


		window.addEventListener('resize', onWindowResize, false);


	}


	function request() {

		requestAnimationFrame(request);


			//matrix counter that follows cross
				if (SPEED == 1) {

					top.style.marginLeft = t*(SPEED*4) + 150 + 'px';

				} else {

					top.style.marginLeft = t*(SPEED) + 150 + 'px';
					
				}


	}
		request();
	


	function onWindowResize() {




		
	}


})();