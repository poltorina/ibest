$(document).ready(function() {
	$('.tabs li').click(function() {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.info-panel').addClass('hiddens');
		let firstClass = $(this).attr('class').split(' ')[0];
		$('#' + firstClass).removeClass('hiddens');

	})


	$('#menu li .href-ob').click(function() {
		$('.tabs li').removeClass('active');
		$('.tab-obor').addClass('active');
		$('.info-panel').addClass('hiddens');
		$('#tab-obor').removeClass('hiddens');
	})

	$('#menu li .href-inf').click(function() {
		$('.tabs li').removeClass('active');
		$('.tab-bezop').addClass('active');
		$('.info-panel').addClass('hiddens');
		$('#tab-bezop').removeClass('hiddens');
	})


	$('.footer .logo-en div').hover(function() {
		$('.footer .logo-en div .speech-bubble').addClass('hint');
	}, function() {
		$('.footer .logo-en div .speech-bubble').removeClass('hint');
	});


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
		$('.ask-question').animate({opacity: 0}, 200, function(){
	    	$('.ask-question').css('display', 'block').animate({opacity: 1}, 200);
		});
	});

});