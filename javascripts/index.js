$( document ).ready(function() {
  
//Photo slideshow  
    var delay = 10000;	
    var transition_speed = 2000;
    var slideshow = $("#slider"),
        photoList = slideshow.children('li'),
        listLength	= photoList.length,
        i	= 0,
		changePhoto = function (){
		    photoList.eq(i).fadeOut(1000, function () {
				  i += 1;
				  if (i === listLength) {
		        i = 0;
				  }
				  photoList.eq(i).hide().fadeIn(transition_speed);
			   });

        };
    photoList.not(':first').hide();
    setInterval(changePhoto, delay);
  
    $.fn.scrollView = function () {
        return this.each(function () {
        $('html, body').animate({
          scrollTop: $(this).offset().top
        }, 1000);
        });
    }
    
    setTimeout(function(){
      $('.row#nav').scrollView();
    },3500); 
    
});
