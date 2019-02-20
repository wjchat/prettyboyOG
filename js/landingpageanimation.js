$(document).ready(function(){
			$('.pretty').addClass('moveright');


			// box enters
			setTimeout(function(){
				$('.window').addClass('box-in');
				$('.words li').addClass('shrink');
				$('.words li').addClass('slightleft');
				$('.glyph').addClass('glyphchange');
			},1000);

			// words scroll
			setTimeout(function(){
				$('.words').addClass('moved');
			}, 1300);

			setTimeout(function(){
				$('.pretty').css('background-color', 'transparent');
			}, 1300);

			setTimeout(function(){
				$('.cutoff').addClass('enlarge-box');
			}, 3800);

			// box returns to normal form
			setTimeout(function(){
				$('.container').addClass('movein');
				// $('.window').removeClass('box-in');
				$('.window').removeClass('box-in');
				$('.words li').removeClass('slightleft');
				$('.words li').removeClass('shrink');

			}, 3800); 


			// borders are created
			setTimeout(function(){
				$('.topline').css('background-color', 'black');
				$('.topline').toggleClass('topmove');
			}, 4000);

			setTimeout(function(){
				$('.rightline').css('background-color', 'black');
				$('.rightline').toggleClass('rightmove');
			}, 4200);

			setTimeout(function(){
				$('.bottomline').css('background-color', 'black');
				$('.bottomline').toggleClass('bottommove');
			}, 4250);

			setTimeout(function(){
				$('.leftline').css('background-color', 'black');
				$('.leftline').toggleClass('leftmove');
			}, 4300);

			setTimeout(function(){
				$('.glyph').addClass('glyphchange2');
			}, 4400);

   			  
   			setTimeout(function() {
    			$('.first').addClass('fadein');
    			$('.window').addClass('left-border');
    			// console.log('h');
			}, 5650);

			setTimeout(function() {
    			$('.second').addClass('fadein');
    			// console.log('h');
			}, 5600); 

			setTimeout(function() {
    			$('.third').addClass('fadein');
    			// console.log('h');
			}, 5550);

			$(window).resize(function(){
				if($(window).width()<450){
					$('.optionsm').fadeIn(200);
				};
			});

});