$( document ).ready(function() {
    console.log( "GTHC" );
  
  $(".row#2").hide();
  
  setInterval(function(){
    $(".row#1").hide();
    $(".row#2").show();
  }, 7000);
  
});