$(function() {

	$(document).ready(function() {
	    console.log( "ready!" );
	    $('body').scrollspy({target:'.navbar-example'});
	});



		var scroll = $(window).scrollTop();

		var obj0 = {
			layer: true,
			name: 'myBox',
			x: 725, y:0,
			radius:1500,
			ccw:true,
		}

		var obj1 = {
			layer: true,
			x: 725, y:0,
			fillStyle: '#486869',
			radius: 1500,
			ccw:true,
			start:0, end:205
		}

		var obj2 = {
			layer: true,
			name: 'myBox2',
			x: 725, y:0,
			radius:1500,
			ccw:true,
			start:0
		}

		var fun = function(layer) {
			  // Callback function
			  $(this).animateLayer(layer, {
			  	ccw:true,
			    start:90, end:205
			  }, 'slow', 'swing');
			};

	$(window).load(function(){
		$("html,body").animate({scrollTop:'0px'});
		$('canvas').drawSlice(obj0);
		$('canvas').animateLayer('myBox',obj1,2500);
		return false;

	});

	// For Menu Tabs lines positioning

		    $(document).ready(function(){

		    	$('#arrow').click(function () {
	          		$("html,body").animate({
	    		    scrollTop: $('#about').offset().top
	          				},1500);
	          	return false;
	      		});

			  	$('#hm').click(function () {
	          		$("html,body").animate({
	              		scrollTop: '0px'
	          				},1500);
	          	return false;
	      		});

			  	$('#abt').click(function () {
	          		$("html,body").animate({
	              		scrollTop: $('#about').offset().top
	          				},1500);
	           	return false;
	      		});

			  	$('#th').click(function () {
	          		$("html,body").animate({
	              		scrollTop: $('#theme').offset().top
	          				},1500);	       
	          	return false;
	      		});

	      		$('#comp').click(function () {
	          		$("html,body").animate({
	              		scrollTop: $('#competitions').offset().top
	          				},1500);	     
	          	return false;
	      		});

	      		$('#spnsr').click(function () {
	          		$("html,body").animate({
	              		scrollTop: $('#sponsors').offset().top
	          				},1500);
	          	return false;
	      		});

	      		$('#tem').click(function () {
	          		$("html,body").animate({
	              		scrollTop: $('#team').offset().top
	          				},1500);
	          	return false;
	      		});

	      	});
	

	$(window).scroll(function() {

		var scroll = $(window).scrollTop();
 		var a = 205 - scroll/4;
 		var off = 1-scroll/250;
		var on = -0.1+scroll/500;

		var head = $('#header');
		var t1 = $('#text1');
		var t2 = $('#text2');
		var t3 = $('#text3');

		var e1 = $('#about');
		var e2 = $('#arrow');

//scrolling tabs

	// $('#tem').click(function () {
 //  		$('body').scrollTo('#team',{duration:'slow',offsetTop:'-100'});
 //  		return false;
 //  	});


// for transforming the slice
		if(scroll>10){
				var l =1;
				obj2['end']=a;
				obj1['name']='myBox'+l;
				$('canvas').removeLayer('myBox'+l);
				$('canvas').animateLayer('myBox',obj2,1);
				l+=1; 	
		}

		else{
			$('canvas').animateLayer('myBox',obj1,1);
		}
		
		if(scroll>450){
			$('canvas').addClass('veil');
			e1.addClass('color');
		}

		else{
			$('canvas').removeClass('veil');
			e1.removeClass('color');
		}

		if(scroll>440){
			head.removeClass('veil').addClass('usher');
		}

		else{
			head.removeClass('usher').addClass('veil');			
		}

// for variable opacity
		if(scroll>150){
			t1.css({opacity:off});
			e2.css({opacity:off});
			t2.removeClass('veil').addClass('usher');
			t2.css({opacity:on});
			t3.removeClass('veil').addClass('usher');
			t3.css({opacity:on});
		}

		else{
			t1.css({opacity:1});
			e2.css({opacity:1});
			t2.css({opacity:0});
			t3.css({opacity:0});
		}

// Theme variables

			var az9 = $('#a');
		    var az10 = $('#b');
		    var az11 = $('#c');
		    var az12 = $('#d');
		    var az13 = $('#e');
		    var az14 = $('#f');
		    var az15 = $('#g');

// Theme converges
		var dis = $(window).scrollTop();
		var conv9h = -665+dis/2;
		// for 31 px
		var conv9v = -635+dis/2;
		// for 54 px
		var conv10h = 665-dis/2;
		// for -31 px
		var conv11 = -620+dis/2;
		// for 63 px
		var conv12 = 620-dis/2;
		var conv13v = 635-dis/2;
		// for -54 px


		if(scroll >= 1300 && conv9h <= 44){
			az9.css({transform:'translate('+conv9h+'px,'+conv9v+'px)'});
			az10.css({transform:'translate('+conv10h+'px,'+conv9v+'px)'});
			az11.css({transform:'translate('+conv11+'px)'});
			az12.css({transform:'translate('+conv12+'px)'});
			az13.css({transform:'translate('+conv9h+'px,'+conv13v+'px)'});
			az14.css({transform:'translate('+conv10h+'px,'+conv13v+'px)'});
		}

		if(scroll >= 1420){
			az9.css({transform:'translate(41.5px,78.5px)'});
			az10.css({transform:'translate(-45.5px,78.5px)'});
			az11.css({transform:'translate(86.5px)'});
			az12.css({transform:'translate(-86.5px)'});
			az13.css({transform:'translate(40.5px,-78.5px)'});
			az14.css({transform:'translate(-44.5px,-81.5px)'});
			az15.removeClass("hide").addClass("show");
			az14.addClass("bw");
			az13.addClass("bw");
			az12.addClass("bw");
			az11.addClass("bw");
			az10.addClass("bw");
			az9.addClass("bw");

		}

		else{
			az15.removeClass("show").addClass("hide");
			az14.removeClass("bw");
			az13.removeClass("bw");
			az12.removeClass("bw");
			az11.removeClass("bw");
			az10.removeClass("bw");
			az9.removeClass("bw");
		}

	});

});
