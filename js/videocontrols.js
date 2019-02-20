$(document).ready(function(){
	var video = $('video');
	var progress = $('.progress');
	var progressFilled = $('.progress-filled');
	var playpause = $('.playpause');
	var play = $('.initialplay');

	var playIcon = '►';
	var pauseIcon = '| |';

	var slider = $('.slidecontain');
	var volume = $('.volumeicon');

	var fadeouts = $('.fadeoutstuff');

	function showvolume(){

		volume.on('mouseenter', function(){
			slider.fadeIn(100);
		});

		slider.on('mouseleave', function(){
			$(this).fadeOut(100);
		})

	};

	function playPause(){

		if(video.get(0).paused){
			video.trigger('play');
		}

		else{
			video.trigger('pause');
		}

	};

	function changeIcon(){

		if (playpause.text() == playIcon){
			
			playpause.text(pauseIcon);
		}
		else{
			playpause.text(playIcon);
			
		}
	};

	playpause.on('click', function(){
				playPause();
				changeIcon();

	});

	video.on('click', function(){
		playPause();
		changeIcon();

		if(play.is(':visible')){
			play.fadeOut(200);
			playpause.fadeIn(200);
		};

	});

	var timer;

	//moves to video section and starts starts timer to fade stuff out

	$('.glyph').on('click', function(){
		$('.landing').addClass('landingmove');
		setTimeout(function(){
			playPause();
			changeIcon();
		}, 600);

		timer = setTimeout(function(){
			$('.video-container').addClass('fadecursor');
			fadeouts.fadeOut(200);
		}, 3500)
	});

	play.on('click', function(){
		playPause();
		changeIcon();
		$(this).fadeOut(200);
		playpause.fadeIn(200);
	});

	volume.on('mouseenter', function(){
		slider.fadeIn(100);
		// console.log('heard');
	});

	slider.on('mouseleave', function(){
		$(this).fadeOut(100);
	});

// WOOO fades out stuff when cursor is inactive for four seconds
	

	$('.video-container').mousemove(function(){
		$('.video-container').removeClass('fadecursor');
		clearTimeout(timer);
		fadeouts.fadeIn(200);

		timer = setTimeout(function(){
			$('.video-container').addClass('fadecursor');
			fadeouts.fadeOut(200);
		}, 3000)
	});

	fadeouts.mouseenter(function(){
		clearTimeout(timer);
	});


});