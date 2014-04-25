$(document).ready(function(){
	$('.jq_designer').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$('.team').offset().top}, 800)
	})
	$('.jq_product').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$('.banner').offset().top}, 800)
	})
	$('.jq_contact').on('click',function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$('.footer').offset().top}, 800)
	})
//top
	$(window).scroll(function () {
        
        if ($(window).scrollTop() > $('.introduce').offset().top) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });	
    $(".top").on('click',function () {
        $("html,body").animate({scrollTop:$('.header .menu').offset().top - 710}, 800);
        return false;
    });
})