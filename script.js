$(document).ready(function() {
	$('.tabs li').click(function() {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.info-panel').addClass('hidden');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hidden');

	})









	$('.partners .tabs li').click(function() {
		$('.partners .tabs li').removeClass('active');
		$('.info-panel').removeClass('active-tab');
		$(this).addClass('active');
		$('.info-panel').addClass('hidden');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hidden');
		$('#' + firstClass).addClass('active-tab');
	})

	$('#menu li a').click(function() {
  		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop: top}, 1200);
	})

	//mobile menu-button
	$('.mobile-menu-btn').click(function(e){
		$(this).toggleClass('active');
		$('.fixed-menu .menu, .fixed-menu .call').toggleClass('active-mobile');
		e.preventDefault();
		return false;
	});


	
	$('#overlay').click( function(){
		$('.ask-question').animate({opacity: 0, top: '0%'}, 200, function(){
	    	$(this).css('display', 'none'); 
	    	$('#overlay').fadeOut(400);
		});
	});


	$('.callback').click(function() {
		$('#overlay').fadeIn(400);
		$('.ask-question').animate({opacity: 0, top: '0%'}, 200, function(){
	    	$('.ask-question').css('display', 'block').animate({opacity: 1, top: '13%'}, 200);
		});
	});
});