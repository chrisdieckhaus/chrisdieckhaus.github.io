$( document ).ready(function() {
  
//Photo slideshow  
    var delay = 13000;	
    var transition_speed = 1000;
    var slideshow = $("#slider"),
        photoList = slideshow.children('li'),
        listLength	= photoList.length,
        i	= 0,
		changePhoto = function (){
		    photoList.eq(i).fadeOut(transition_speed, function () {
				  i += 1;
				  if (i === listLength) {
		        i = 0;
				  }
				  photoList.eq(i).fadeIn(transition_speed);
			   });

        };
    photoList.not(':first').hide();
    setInterval(changePhoto, delay);
});