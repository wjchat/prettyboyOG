$(document).ready(function(){

	var options = $('.navoption').toArray();
	var $contact = $(options[0]);
	var $works = $(options[1]);
	var $about = $(options[2]);

	function toggleOptions(){

		if ($('.navoption').is(':visible')){
			// console.log('visible');

			$('.navoption').hide();
			if (!$('.dropdown').hasClass("default")) {
				$('.dropdown').addClass('default');
			};
			
		}

		else{
			// console.log('invisible');
			$('.dropdown').removeClass('default');

			setTimeout(function(){
				$about.fadeIn(300)
			 }, 80);

			setTimeout(function(){
				$works.fadeIn(300)
			 }, 120);

			setTimeout(function(){
				$contact.fadeIn(300)
			 }, 150);
		};
	};

	if($( window ).width() > 450){
		console.log('wider');
		$('.dropdown').on('click', function(){

			if ($('.navoption').is(':hidden')){
				toggleOptions();
			};
		});

		$('nav').on('mouseleave', function(){

			if ($('.navoption').is(':visible')){
				toggleOptions();
				};
		});
	};

	$(window).on('resize', function(){
		if($( window ).width() > 450){
			$('.navoption').hide();
			$('.dropdown').on('click', function(){

				if ($('.navoption').is(':hidden')){
					toggleOptions();
				};
			});

			$('nav').on('mouseleave', function(){

				if ($('.navoption').is(':visible')){
					toggleOptions();
					};
			});
		}

		else{
			$('.navoption').fadeIn(400);
			
			$('nav').on('mouseleave', function(){
				$('.navoption').show();
			});
		}
	});


});