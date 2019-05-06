$(document).ready(function() {
	var winWid = $(window).width();
	var windowHeight = $(window).height();
	var skrolleerre;
	$('.videoModal').hide(0);
	$(document).on('click', '.close', function(){
		$('.openSlider').hide(400);
		$('.videoModal').hide(400);
		$('.iframeContModal').children('#vdosInt').remove();
	});
	$(document).on('click', '.closerClk', function(e){
		$('.openSlider').hide(400);
		$('.headerContent').removeClass('active');
		$('.containerHEaer').removeClass('active');
		$('.menuUl').removeClass('active');
		$('.menuT').removeClass('active');
		$('.fixedTop').removeClass('active');
		$('html, body').animate({
	        scrollTop: $("#work").offset().top
	    }, 400);
		return false;
	});
	$('.containerHL').on('click', function(event) {
			$('html, body').animate({
		        scrollTop: $("body").offset().top
		    }, 400);
	});
	
	$(document).on('keyup',function(e) {
	    if (e.keyCode == 27) {
	       $('.openSlider').hide(400);
	       $('.headerContent').removeClass('active');
	       $('.containerHEaer').removeClass('active');
	       $('.menuUl').removeClass('active');
	       $('.menuT').removeClass('active');
	       $('.fixedTop').removeClass('active');
	       $('.videoModal').hide(400);
	       $('.iframeContModal').children('#vdosInt').remove();
	    }
	});
	$('.containerHR').on('click', function(event) {
		event.preventDefault();
		$('.headerContent').toggleClass('active');
		$('.containerHEaer').toggleClass('active');
		$('.menuUl').toggleClass('active');
		$('.menuT').toggleClass('active');
		$('.fixedTop').toggleClass('active');
	});
	$('.portfolio').css({
		display: 'none',
	});
	$('.portfolio.enabledSec2').css({
		display: 'flex',
	});
	

	$('.slickVidTCont').slick({
		slidesToShow: 1,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow:$('.nxtNew'),
		prevArrow:$('.prvNew'),
	});
	$('.slickVidTCont').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.updateSlide').text('0'+(currentSlide+1));
		$('.horizonB2').addClass('active');
	});
	$('.slickVidTCont').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.horizonB2').removeClass('active');
	});

	$('.slickVidTCont1').slick({
		slidesToShow: 1,
		//centerMode: true,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow:$('.nxtNew1'),
		prevArrow:$('.prvNew1'),
	});
	$('.slickVidTCont1').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.updateSlide1').text('0'+(currentSlide+1));
		$('.horizonB1').addClass('active');
	});
	$('.slickVidTCont1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.horizonB1').removeClass('active');
	});

	var numm = 1;
		
	$(document).on('click', '.eachItem', function(){ 
		winWid = $(window).width();

		if (!$(this).hasClass('webCont')) {
			var numSlider = $(this).attr('openSlider');
			$('.openSlider').css({display :'flex'});
			$('.sliderFullCont').slick('unslick');
			$('.sliderFullCont').html('');
			$('.tlsCont').removeClass('inact').html('');
			if (winWid>992) {
				setTimeout(function() {
					$.getJSON( "./data.json", function( response ) {
						var slidData = response[numSlider];
						for(var i = 0; i<slidData.imgArr.length; i++){
							$('.sliderFullCont').append("<div class='eachTile eachTileHorz active'><img src="+slidData.imgArr[i]+"></div>");
						}
						if (slidData.tlsArr.length>0) {
							for(var i = 0; i<slidData.tlsArr.length; i++){
								$('.tlsCont').append("<div class='eachItem "+slidData.tlsArr[i].class+"' openSlider="+slidData.tlsArr[i].openSliderVal+"><span class='before'></span><span class='after'></span><img src="+slidData.tlsArr[i].bgImg+"><div class='onHvr'><h3>"+slidData.tlsArr[i].title+"</h3></div></div>");
							}	
						}else{
							$('.tlsCont').addClass('inact');
							$('.sliderFullCont').addClass('fullScreen');
						}
						
						$('.sliderFullCont').slick({
							slidesToShow: 1,
							//centerMode: true,
							dots:true,
							infinite:true,
							autoplay: true,
							autoplaySpeed: 2000,
							nextArrow:$('.slidNext'),
							prevArrow:$('.slidPrev'),
						});
					});
				}, 0);
			}else {
				
				setTimeout(function() {

					$.getJSON( "./data.json", function( response ) {
						$('.openSlider').addClass('active');
						var slidData = response[(parseInt(numSlider)+100).toString()];
						for(var i = 0; i<slidData.imgArr.length; i++){
							$('.sliderFullCont').append("<div class='eachTile eachTileHorz active'><img src="+slidData.imgArr[i]+"></div>");
						}
						if (slidData.tlsArr.length>0) {
							for(var i = 0; i<slidData.tlsArr.length; i++){
								$('.tlsCont').append("<div class='eachItem "+slidData.tlsArr[i].class+"' openSlider="+slidData.tlsArr[i].openSliderVal+"><span class='before'></span><span class='after'></span><img src="+slidData.tlsArr[i].bgImg+"><div class='onHvr'><h3>"+slidData.tlsArr[i].title+"</h3></div></div>");
							}	
						}else{
							$('.tlsCont').addClass('inact');
							$('.sliderFullCont').addClass('fullScreen');
						}
						
						// $('.sliderFullCont').slick({
						// 	slidesToShow: 1,
						// 	//centerMode: true,
						// 	dots:true,
						// 	infinite:true,
						// 	autoplay: true,
						// 	autoplaySpeed: 2000,
						// 	nextArrow:$('.slidNext'),
						// 	prevArrow:$('.slidPrev'),
						// });
					});
				}, 0);
			}
		}
	});
	$('.sliderFullCont').slick({
		slidesToShow: 1,
		infinite:true,
		autoplay: false,
		autoplaySpeed: 2000,
		dots:true,
		nextArrow:$('.slidNext'),
		prevArrow:$('.slidPrev'),
	});
	
	
	
	$('.actionSec').on('click', function(event) {
		var num = $(this).attr('enableSec');
		if (num == '1') {
			$('.portfolio').show('400');
		}else{
			$('.portfolio').not('.enabledSec'+num).hide('0');
			$(".enabledSec"+num).show(400);
			
			if (num == 6) {
				$('.portfolio.enabledSec6').css({display: 'flex'});
				if (winWid>992) {
					skrolleerre.refresh();	
					skrolleerre = skrollr.init({});
					skrollr.menu.init(skrolleerre, {animate: true,easing: 'sqrt',scale: 2,duration: function(currentTop, targetTop) {return 500;},handleLink: function(link) {},complexLinks: false,change: function(newHash, newTopPosition) {},updateUrl: false });
				}
				//skrolleerre = skrollr.init({forceHeight: false});
				
			}
			
		}
		$('.actionSec').removeClass('active');
		$(this).addClass('active');
		
		$('.subOpt').children('.actionSecR.active').removeClass('active');
		$('.subOpt').children('.actionSecR').eq(num-2).addClass('active');
		$('.onHvrElt').removeClass('moveTo1');
		$('.onHvrElt').removeClass('moveTo2');
		$('.onHvrElt').removeClass('moveTo3');
		$('.onHvrElt').removeClass('moveTo4');
		$('.onHvrElt').removeClass('moveTo5');
		$('.onHvrElt').addClass('move').addClass('moveTo'+(num-1));
		setTimeout(function () {
			
			$('.onHvrElt').removeClass('move');
		},800);
		$('.actionMenuMain').children('.actionSec').eq(num-2).addClass('active');
	});
	$('.actionSecR').on('click', function(event) {
		var num = $(this).attr('enableSec');
		if (num == '1') {
			$('.portfolio').show('400');
		}else{
			$('.portfolio').not('.enabledSec'+num).hide('0');
			$('.portfolio').not('.enabledSec'+num).hide('0');
			$(".enabledSec"+num).show('400');
			if (num == 6) {
				$('.portfolio.enabledSec6').css({display: 'flex'});
				skrolleerre = skrollr.init({});
				skrollr.menu.init(skrolleerre, {animate: true,easing: 'sqrt',scale: 2,duration: function(currentTop, targetTop) {return 500;},handleLink: function(link) {},complexLinks: false,change: function(newHash, newTopPosition) {},updateUrl: false });
			}
			
		}
		$('.actionSec').removeClass('active');
		$('.actionSecR').removeClass('active');
		$(this).addClass('active');
		$(".actionMenuMain").children('.actionSec').eq(num-2).addClass('active');
		$('.onHvrElt').removeClass('moveTo1');
		$('.onHvrElt').removeClass('moveTo2');
		$('.onHvrElt').removeClass('moveTo3');
		$('.onHvrElt').removeClass('moveTo4');
		$('.onHvrElt').removeClass('moveTo5');
		$('.onHvrElt').addClass('move').addClass('moveTo'+(num-1));
		setTimeout(function () {
			
			$('.onHvrElt').removeClass('move');
		},800);
	});
	$('span[enableSec]').on('click', function(event) {
		
		var slideno = $(this).attr('enableSec');
		if (slideno==4) {
			$('.slickVidTCont').slick('slickGoTo', 0);
		}else if (slideno==5) {
			$('.slickVidTCont1').slick('slickGoTo', 0);
		}
		event.preventDefault();
	});
	

	$(document).on('mouseenter', '.tlsCont', function(){
		$('.sliderCont').addClass('active');
		
		if ($('.tlsCont:has(div)')) {
			var cordd = $('.tlsCont').children('.eachItem.active').offset();
			$('.tlsCont').children('.eachItem.active').children('.before').css('left', cordd.left+65+'px');
		}
		
	});
	$(document).on('mouseleave', '.tlsCont', function(){
		$('.sliderCont').removeClass('active');
		if ($('.tlsCont:has(div)')) {
			$('.tlsCont').children('.eachItem.active').children('.before').css('left', '50%');
		}
		
	});

	$('.eachMajor').on('mouseenter', function(event) {
		$('.eachMajorAct').removeClass('active');
		var num = $(this).attr('hoverNum');
		$('.eachMajorAct').eq(num-1).addClass('active');
	});
	
	$(window).on('scroll', function(event) {
		if (winWid>992) {
			if($(document).scrollTop()>1500){
				$('.headerFull').addClass('whiten');
				if (winWid>992) {skrolleerre.refresh();}
			}else {$('.headerFull').removeClass('whiten');}
		}else {
			if($(document).scrollTop()>windowHeight){
				$('.headerFull').addClass('whiten');
				if (winWid>992) {skrolleerre.refresh();}
			}else {$('.headerFull').removeClass('whiten');}
		}
		
	});

	if(winWid<992){
		$('.fixedTopInner').slick({
			slidesToShow: 1,
			infinite:true,
			autoplay: true,
			autoplaySpeed: 2000,
			dots:true,
			nextArrow:$('.slidNext3'),
			prevArrow:$('.slidPrev3'),
		});
		//skrolleerre = skrollr.init({});
	}else{
		skrolleerre = skrollr.init({forceHeight: false});
	}

	
	$.getScript( "https://www.youtube.com/iframe_api" )
	.done(function( script, textStatus ) {
		console.log("Success: YoutTube");
	})
	.fail(function( jqxhr, settings, exception ) {
		console.log("EError loading youtube script");
	});

	window.onYouTubeIframeAPIReady = function() {
		
	};
	$(document).on('click', '.eeachViContFulClick', function(){
		var youtubeId = $(this).attr('id');
		$('.iframeContModal').append("<div class='vidContt' id='vdosInt'></div>");

		$('.videoModal').css({display :'flex'});
		var player;
		function onYouTubePlayerAPIReady() {
			var vidWidth;
			var vidHeight;
			if (winWid>992) {
				vidWidth = (winWid-80).toString();
				vidHeight = ((parseInt(vidWidth)*9)/16).toString();
			}else {
				vidWidth = winWid.toString();
				vidHeight = ((winWid*9)/16).toString();
			}
			
		    player = new YT.Player('vdosInt', {
		        height: vidHeight,
		        width: vidWidth,
		        videoId: youtubeId,
		        autoplay: 1,
		        playerVars: { 
					'autoplay': 1,
					'controls': 1, 
					'rel' : 0,
					'showinfo':0,
					'fs' : 0,
					'loop': 1,
				},
				loop:1,
		        events: {
					'onStateChange': onPlayerStateChange,
	                'onReady': function (e) {
	                	//e.target.mute();
	                    e.target.playVideo();
	                }
				}
		    });
		    
		    document.getElementById('cToPlay1Fade').onclick = function() {
		        PlayPause();
		        return false;
		    };
		    
		};
		onYouTubePlayerAPIReady();
		

		
		var playerState;
		function onPlayerStateChange(event) {
			var getId = document.getElementById('cToPlay1');
			if(event.data === 0) {
				//getId.innerText = 'Play';
				$('#cToPlay1Fade').fadeIn(1000);
			}
			else if(event.data === 1) {
				
				//var fdId = document.getElementById('cToPlay1Fade');
				$('#cToPlay1Fade').fadeOut(1000);
				//getId.innerText = 'Pause';
			}
			else if(event.data === 2) {
				$('#cToPlay1Fade').fadeIn(1000);
				//getId.innerText = 'Resume';
			}
			else if(event.data === 3) {
				//getId.innerText = 'Loading...';
			}
			playerState = event.data;
		}
		function PlayPause() {
			if(playerState == '1') {
				player.pauseVideo();
			}
			else {
				player.playVideo();
			}
		}
	});
});