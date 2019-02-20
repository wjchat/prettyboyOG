function SliderAdjust(){
	var video = document.getElementById('Reel');
	var slider = document.getElementById('volumeslider');
	video.volume = slider.value * .01;
	// console.log(video.volume);
};
