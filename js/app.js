//document.addEventListener("DOMContentLoaded", function(event) {
//
//var map = document.querySelector('.map');
//console.log(map);


$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});
    
    
    
    
    
//$('.map')
//	.click(function(){
//			$(this).find('iframe').addClass('map_scroll')})
//	.mouseleave(function(){
//			$(this).find('iframe').removeClass('map_scroll')});
////
//onClick="style.pointerEvents='none'"
    
    
    
    
    
    
});