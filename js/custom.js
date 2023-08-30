(function($){
	"use strict";

	$(window).on('load', function(){
		$('#status').fadeOut();
		$('#preloader').delay(100).fadeOut('fast');
		//$(window).stellar({});
		//$('#myModal2').addClass("show");
	});
	//$('#myModal2').show();
	//$('#startModal').show();
	//$("#myModal2 button").click(function() {
	//	$('#myModal2').fadeOut("slow");
	//	$('#startModal').fadeOut("slow");
	//});

	$('[data-toggle="tooltip"]').tooltip()

	/*====== countdown ========*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<ul><li><span class="cdown days"><span class="time-count">%-D</span><p class="day-css">Days</p></span></li><li><span class="cdown hour"><span class="time-count">%-H</span> <p class="day-css">Hour</p></span><l/i><li><span class="cdown minutes"><span class="time-count">%M</span> <p class="day-css">Min</p></span></li><li> <span class="cdown second"><span class="time-count">%S</span> <p class="day-css">Sec</p></span></li></ul>'));
		});
	});

	/*====== Map Pointer ========*/
	$('.mapp').addClass('scrolloff');

	$('#overlay').on("mouseup", function() {
	  	$('.mapp').addClass('scrolloff');
  	});
	$('#overlay').on("mousedown", function() {
	  	$('.mapp').removeClass('scrolloff');
  	});
	$(".map").mouseleave(function() {
	  	$('.mapp').addClass('scrolloff');
	});

	/*====== jQuery MeanMenu ========*/
	jQuery('nav').meanmenu();
  
	/*====== wow js ========*/
	new WOW().init();

	/*====== counter ========*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	}); 
	
	/*====== carasol destination ========*/
	$('.destination-slider-active').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		animateOut:false,
		animateIn:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	/*====== Testimonial Carousel Slick ========*/
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		dots: false,
	});
	
	$('.slider-nav').slick({
		slidesToShow:3,
		slidesToScroll:1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		variableWidth: false,
		arrows: false,
		autoplay: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			}
		]
	});

	/*====== partner slider ========*/
	$('.partner-slider-active').owlCarousel({
		loop:true,
		margin:20,
		nav:false,
		autoplay:false,
		autoplayTimeout:1000,
		animateOut:true,
		animateIn:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	/*====== tab js ========*/
	$(function(){var b="fadeInLeft";var c;var a;d($("#myTab1 a"),$("#tab-content1"));function d(e,f,g){e.click(function(i){i.preventDefault();$(this).tab("show");var h=$(this).data("easein");if(c){c.removeClass(a);}if(h){f.find("div.active").addClass("animated "+h);a=h;}else{if(g){f.find("div.active").addClass("animated "+g);a=g;}else{f.find("div.active").addClass("animated "+b);a=b;}}c=f.find("div.active");});}$("a[rel=popover]").popover().click(function(f){f.preventDefault();if($(this).data("easein")!=undefined){$(this).next().removeClass($(this).data("easein")).addClass("animated "+$(this).data("easein"));}else{$(this).next().addClass("animated "+b);}});});
	$(function(){var b="fadeInLeft";var c;var a;d($("#myTab2 a"),$("#tab-content2"));function d(e,f,g){e.click(function(i){i.preventDefault();$(this).tab("show");var h=$(this).data("easein");if(c){c.removeClass(a);}if(h){f.find("div.active").addClass("animated "+h);a=h;}else{if(g){f.find("div.active").addClass("animated "+g);a=g;}else{f.find("div.active").addClass("animated "+b);a=b;}}c=f.find("div.active");});}$("a[rel=popover]").popover().click(function(f){f.preventDefault();if($(this).data("easein")!=undefined){$(this).next().removeClass($(this).data("easein")).addClass("animated "+$(this).data("easein"));}else{$(this).next().addClass("animated "+b);}});});
	
	/*====== date picker ========*/
	$( "#datepicker" ).datepicker();
	$( "#datepicker1" ).datepicker();
	$( "#datepicker2" ).datepicker();
	$( "#datepicker3" ).datepicker();
	$( "#datepicker4" ).datepicker();
	$( "#pickupdate" ).datepicker();
	$( "#shippickupdate" ).datepicker();
	$( "#daperture_date" ).datepicker();
	$( "#return_date" ).datepicker();
	$( "#booking-date" ).datepicker();

	/*====== select option ========*/
	$("#standard1").customselect();
	$("#standard2").customselect();
	$("#standard3").customselect();
	$("#standard4").customselect();
	$("#nosearch").customselect({search: false});
	$("#nosearch1").customselect({search: false});
	$("#nosearch2").customselect({search: false});


	/*====== Scroll to top ========*/
	jQuery('.to-top').on('click', function(event) {
	  	jQuery('html,body').animate({
		  	scrollTop: 0
	  	}, 1000);
	});

	jQuery(window).scroll(function() {
	  	if (jQuery(window).scrollTop() > 100) {
		  	jQuery('.to-top').fadeIn(1000);
	  	} else {
		  	jQuery('.to-top').fadeOut(1000);
	  	};
	});

	/*====== contact form ========*/
	$('#contactform').submit(function(){
		var action = $(this).attr('action');
		$("#message").slideUp(750,function() {
		$('#message').hide();
		$('#submit')
			.after("")
			.attr('disabled','disabled');
		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			subject: $('#subject').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');
			}
		);
		});
		return false;
	});

	/*====== home version 5 slider ========*/
	$('.slider-bg-acive').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayTimeout:11000,
		mergeFit:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	/*====== home 5 testimonoial  ========*/
	$('.testimonial-5-active').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:11000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	}); 

	/*====== package slider ========*/
	$('.popular-packages-carasoul').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		autoplay:false,
		autoplayTimeout:1000,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	/*====== Magnific Popup for video ========*/
	$('.video_iframe').magnificPopup({
		type: 'iframe',
		iframe: {
		  markup: '<div class="mfp-iframe-scaler">' +
			  '<div class="mfp-close"></div>' +
			  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			  '</div>',
	  	patterns: {
			youtube: {
			  	index: 'youtube.com/',
			  	id: 'v=',
			  	src: 'http://www.youtube.com/embed/%id%?autoplay=1'
			},
		 	vimeo: {
		  	index: 'vimeo.com/',
		  	id: '/',
		  	src: '//player.vimeo.com/video/%id%?autoplay=1'
		},
		gmaps: {
		  	index: '//maps.google.',
		  	src: '%id%&output=embed'
		}
		  	},
		  	srcAction: 'iframe_src'
		}
	});

	/*====== slick partner slider ========*/
	$('.partner-slider-2').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		dots: false,
		arrows : false,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
		{
	  	breakpoint: 1024,
		  	settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
		  	}
		},
		{
	  	breakpoint: 600,
		  	settings: {
				slidesToShow: 2,
				slidesToScroll: 2
		  	}
		},
		{
	  	breakpoint: 480,
		  	settings: {
				slidesToShow: 1,
				slidesToScroll: 1
		  	}
		}]
	});

	/*====== masonary gallery ========*/
 	var $grid1 = $('.grid-3').imagesLoaded(function() {
       	$grid1.isotope({
        	itemSelector: '.grid-item',
        	percentPosition: true,
       		masonry: {
          		columnWidth:1
        	}
      	}); 
    });
	 
    $('.grid-3').each(function() {
		$(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
			enabled: true
        },
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
    });

	/*====== select 2 ========*/
	$(".location-results").select2({
  		minimumResultsForSearch: Infinity
	});

  	$(".location-search").select2({
		maximumSelectionLength: 3
	});

	$('.slide').carousel(
		{
			interval: 0,
			ride: false,
			wrap: true,
		}
	)


	//Testimonial Carousel (Slick2)
  	$('.slider-for-two').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-two',
  	});


  	$('.slider-nav-two').slick({
		slidesToShow:7,
		slidesToScroll:1,
		asNavFor: '.slider-for-two',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		variableWidth: false,
		arrows: false,
		focusOnSelect: true,
		responsive: [
	  	{
			breakpoint: 600,
			settings: {
			  slidesToShow:5,
			  slidesToScroll: 2
			}
	  	},
	  	{
			breakpoint: 480,
			settings: {
			  	slidesToShow: 3,
			  	slidesToScroll: 1
			}
	  	}] 
	});

	$('.ImageBackground').each(function(){
		var $this = $(this),
			$imgHolder = $this.children('.ImageBackground__holder'),
			thisIMG = $imgHolder.children().attr('src'),
			thisURL = 'url('+thisIMG+')';
			$imgHolder.css('background-image', thisURL);

		if ($this.hasClass('js-Parallax') && windowWidth >768) {
			$imgHolder.regentParallax();
		}
	});

	//$dialog({
        //title: 'Text content!',
        //content: 'Simple modal!',
    //});
})(jQuery);










// Open the full screen search box
function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen search box
  function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
  }


function openOverlay()
{
	document.getElementById("intoverlay").style.display = "block";
	document.getElementById("intoverlay2").style.display = "block";
	document.getElementById("intoverlay3").style.display = "block";
	document.getElementById("intoverlay4").style.display = "block";
	document.getElementById("intoverlay5").style.display = "block";
	document.getElementById("intoverlay6").style.display = "block";
}
function closeOverlay()
{
	document.getElementById("intoverlay").style.display = "none";
	document.getElementById("intoverlay2").style.display = "none";
	document.getElementById("intoverlay3").style.display = "none";
	document.getElementById("intoverlay4").style.display = "none";
	document.getElementById("intoverlay5").style.display = "none";
	document.getElementById("intoverlay6").style.display = "none";
}
function openOverlay1()
{
	document.getElementById("intoverlaya").style.display = "block";
	document.getElementById("intoverlayaa").style.display = "block";
	document.getElementById("intoverlayaaa").style.display = "block";
}
function closeOverlay1()
{
	document.getElementById("intoverlaya").style.display = "none";
	document.getElementById("intoverlayaa").style.display = "none";
	document.getElementById("intoverlayaaa").style.display = "none";
}
function openOverlay2()
{
	document.getElementById("intoverlayb").style.display = "block";
	document.getElementById("intoverlaybbb").style.display = "block";
}
function closeOverlay2()
{
	document.getElementById("intoverlayb").style.display = "none";
	document.getElementById("intoverlaybbb").style.display = "none";
}
function openOverlay3()
{
	document.getElementById("intoverlayc").style.display = "block";
}
function closeOverlay3()
{
	document.getElementById("intoverlayc").style.display = "none";
}
function openOverlay4()
{
	document.getElementById("intoverlayd").style.display = "block";
}
function closeOverlay4()
{
	document.getElementById("intoverlayd").style.display = "none";
}
function openOverlay5()
{
	document.getElementById("intoverlaye").style.display = "block";
}
function closeOverlay5()
{
	document.getElementById("intoverlaye").style.display = "none";
}
function openOverlay6()
{
	document.getElementById("intoverlayf").style.display = "block";
}
function closeOverlay6()
{
	document.getElementById("intoverlayf").style.display = "none";
}
function openCompare()
{
	document.getElementById("compare-section").style.display = "block";
}
function closeCompare()
{
	document.getElementById("compare-section").style.display = "none";
}
function openRoomCompare()
{
	document.getElementById("room-compare-section").style.display = "block";
}
function closeRoomCompare()
{
	document.getElementById("room-compare-section").style.display = "none";
}
function openVillaCompare()
{
	document.getElementById("villa-compare-section").style.display = "block";
}
function closeVillaCompare()
{
	document.getElementById("villa-compare-section").style.display = "none";
}
function openSuiteCompare()
{
	document.getElementById("suite-compare-section").style.display = "block";
}
function closeSuiteCompare()
{
	document.getElementById("suite-compare-section").style.display = "none";
}

function filterRP() {
	var zones = 
	{
		"Altius": ["Ahmedabad Outskirts", "Gandhinagar", "Mt. Abu", "Udaipur", "Vadodara"],
		"Beach": ["Bengaluru Outskirts","Hassan", "Mysuru", "Nagarhole", "Yelagiri"],
		"Backwater": ["Bhopal Outskirts", "Indore", "Ujjain", "Panchmarhi"],
		"Heritage": ["Bhubaneshwar Outskirts", "Chilka", "Konark", "Puri", "Ratnagiri"],
		"Wildlife": ["Chandigarh Outskirts", "Kasauli", "Mussoorie", "Parwanoo", "Shimla"],
		"Wedding": ["Chennai Outskirts", "Mahabalipuram", "Puducherry"],
		"Conference": ["Indore Outskirts", "Bhopal", "Ujjain"]
	}
	var zoneSelect = document.getElementById("zone-name");
	var destinationSelect = document.getElementById("destination-name");
	var typeSelect = document.getElementById("resort-type");
	var resortSelect = document.getElementById("resort-name");
	for (var x in zones)
	{
		zoneSelect.options[zoneSelect.options.length] = new Option (x, x);
	}
	zoneSelect.onchange = function ()
	{
		var c = zones[this.value];
		destinationSelect.length = 1;
		resortSelect.length = 1;
		typeSelect.length = 1;
		for (var i = 0; i < c.length; i++) {
			destinationSelect.options[destinationSelect.options.length] = new Option(c[i], c[i]);
		}
	}
	destinationSelect.onchange = function () {
		//empty Chapters- and Topics- dropdowns
		resortSelect.length = 1;
		typeSelect.length = 1;
		//display correct values
		var sel = document.getElementById("destination-name");
		for (var y in allDestination) {
			if (sel.options[sel.selectedIndex].value == y)
			{
				for (var z in allDestination[this.value])
				{
					typeSelect.options[typeSelect.options.length] = new Option(z, z);
				}
			}
				
		}
	}
	typeSelect.onchange = function () {
		//empty Chapters dropdown
		resortSelect.length = 1;
		//display correct values
		var z = allDestination[destinationSelect.value][this.value];
		for (var i = 0; i < z.length; i++) {
			resortSelect.options[resortSelect.options.length] = new Option(z[i], z[i]);
		}
	}
	resortSelect.onchange = function ()
	{
		var resLocs = 
		{
			"Ganga Kutir": "properties/kolkata/outskirts/resort-page-gk.html",
			"The Amaya Resort": "properties/kolkata/outskirts/resort-page-amaya.html",
			"Vedic Village": "properties/kolkata/outskirts/resort-page-gk.html",
			"Fortune Park": "properties/kolkata/outskirts/resort-page-fpp.html",
			"The Ffort Raichak": "properties/kolkata/outskirts/resort-page-tfr.html",
			"The Rajbari Bawali": "properties/kolkata/outskirts/resort-page-rb.html",
			"Country Roads": "properties/kolkata/outskirts/resort-page-cr.html",
			"Hotel Sonar Bangla": "properties/kolkata/outskirts/resort-page-hsb.html",
			"Ibiza The Fern": "properties/kolkata/outskirts/resort-page-ibiza.html",
			"Breathing Earth": "properties/kolkata/outskirts/resort-page-be.html",
			"Hotel Seagull": "properties/kolkata/digha/resort-page-seagull.html",
			"Abhyagama Hotel": "properties/kolkata/digha/resort-page-abhyagama.html",
			"Cygnett Inn": "properties/kolkata/digha/resort-page-cygnett.html",
			"Hotel Coral": "properties/kolkata/digha/resort-page-coral.html",
			"Hotel Daltin": "properties/kolkata/digha/resort-page-daltin.html",
			"Hotel Green Gate": "properties/kolkata/digha/resort-page-greengate.html",
			"Hotel Nest": "properties/kolkata/digha/resort-page-nest.html",
			"Hotel Sea Sand": "properties/kolkata/digha/resort-page-seasand.html",
			"Piku's Inn": "properties/kolkata/digha/resort-page-piku.html",
			"The Beach View Hotel": "properties/kolkata/digha/resort-page-beachview.html",
			"The Palm Resort": "properties/kolkata/digha/resort-page-palm.html",
			"Aqua Marine": "properties/kolkata/mandarmani/resort-page-aquamarine.html",
			"Hotel Sonar Bangla": "properties/kolkata/mandarmani/resort-page-hotelsonar.html",
			"Suncity Resort": "properties/kolkata/mandarmani/resort-page-suncity.html",
			"The Candlewood Park Beach Resort": "properties/kolkata/mandarmani/resort-page-candlewood.html",
			"Anutri Beach Resort": "properties/kolkata/mandarmani/resort-page-anutri.html",
			"Sea Star Spa Resort": "properties/kolkata/mandarmani/resort-page-seastar.html",
			"Sun N Sand Resort": "properties/kolkata/mandarmani/resort-page-sunnsand.html",
			"Viceroy Bech & Spa Resort": "properties/kolkata/mandarmani/resort-page-viceroy.html",
			"Victoria Beach Resort": "properties/kolkata/mandarmani/resort-page-victoria.html",
			"The Sana Beach Resort": "properties/kolkata/mandarmani/resort-page-sana.html",
			"Camelia Resort": "properties/kolkata/shantiniketan/resort-page-camelia.html",
			"Hotel Royal Bengal": "properties/kolkata/shantiniketan/resort-page-hotelroyal.html",
			"Baul Sangee": "properties/kolkata/shantiniketan/resort-page-baul.html",
			"Club Central Hotel": "properties/kolkata/shantiniketan/resort-page-clubcentral.html",
			"Chhuti Holiday Resort": "properties/kolkata/shantiniketan/resort-page-chhuti.html",
			"Mohor Kutir Resort": "properties/kolkata/shantiniketan/resort-page-mohor.html",
			"Ram Shyam Village Resort": "properties/kolkata/shantiniketan/resort-page-ramshyam.html",
			"Shantiniketan Residency": "properties/kolkata/shantiniketan/resort-page-residency.html",
			"The Ananda Resort": "properties/kolkata/shantiniketan/resort-page-ananda.html",
			"The Cristallo Resort": "properties/kolkata/shantiniketan/resort-page-cristallo.html",
			"Hotel Sonar Bangla": "properties/kolkata/sundarban/resort-page-sundarhotelsonar.html",
			"Sundarban Tiger Camp": "properties/kolkata/sundarban/resort-page-tigercamp.html",
			"Gramer Bari Eco Resort": "properties/kolkata/sundarban/resort-page-gramerbari.html",
			"Royal Sundarban Wild Resort": "properties/kolkata/sundarban/resort-page-royalwild.html",
			"Solitary Nook Resort": "properties/kolkata/sundarban/resort-page-solitary.html",
			"Sundarban Gateway Resort": "properties/kolkata/sundarban/resort-page-gateway.html",
			"Sundarban Residency": "properties/kolkata/sundarban/resort-page-sundarresidency.html",
			"Sundarban Riverside Holiday Resort": "properties/kolkata/sundarban/resort-page-riverside.html",
			"Sundarban Tiger Roar Resort": "properties/kolkata/sundarban/resort-page-tigerroar.html",
			"Tora Eco Resort": "properties/kolkata/sundarban/resort-page-toraeco.html"
		}
		var sel = document.getElementById("resort-name");
		for (var x in resLocs)
		{
			if (sel.options[sel.selectedIndex].value == x)
			{
				window.location.assign(resLocs[x]);
			}
		}
	}
}

function filterRP1() {
	var destinationSelect = document.getElementById("destination-name");
	var typeSelect = document.getElementById("resort-type");
	var resortSelect = document.getElementById("resort-name");
	for (var x in allDestination) {
		destinationSelect.options[destinationSelect.options.length] = new Option(x, x);
	}
	destinationSelect.onchange = function () {
		//empty Chapters- and Topics- dropdowns
		resortSelect.length = 1;
		typeSelect.length = 1;
		//display correct values
		for (var y in allDestination[this.value]) {
			typeSelect.options[typeSelect.options.length] = new Option(y, y);
		}
	}
	typeSelect.onchange = function () {
		//empty Chapters dropdown
		resortSelect.length = 1;
		//display correct values
		var z = allDestination[destinationSelect.value][this.value];
		for (var i = 0; i < z.length; i++) {
			resortSelect.options[resortSelect.options.length] = new Option(z[i], z[i]);
		}
	}
	resortSelect.onchange = function ()
	{
		var resLocs = 
		{
			"Ganga Kutir": "../../properties/kolkata/outskirts/resort-page-gk.html",
			"The Amaya Resort": "../../properties/kolkata/outskirts/resort-page-amaya.html",
			"Vedic Village": "../../properties/kolkata/outskirts/resort-page-gk.html",
			"Fortune Park": "../../properties/kolkata/outskirts/resort-page-fpp.html",
			"The Ffort Raichak": "../../properties/kolkata/outskirts/resort-page-tfr.html",
			"The Rajbari Bawali": "../../properties/kolkata/outskirts/resort-page-rb.html",
			"Country Roads": "../../properties/kolkata/outskirts/resort-page-cr.html",
			"Hotel Sonar Bangla": "../../properties/kolkata/outskirts/resort-page-hsb.html",
			"Ibiza The Fern": "../../properties/kolkata/outskirts/resort-page-ibiza.html",
			"Breathing Earth": "../../properties/kolkata/outskirts/resort-page-be.html",
			"Hotel Seagull": "../../properties/kolkata/digha/resort-page-seagull.html",
			"Abhyagama Hotel": "../../properties/kolkata/digha/resort-page-abhyagama.html",
			"Cygnett Inn": "../../properties/kolkata/digha/resort-page-cygnett.html",
			"Hotel Coral": "../../properties/kolkata/digha/resort-page-coral.html",
			"Hotel Daltin": "../../properties/kolkata/digha/resort-page-daltin.html",
			"Hotel Green Gate": "../../properties/kolkata/digha/resort-page-greengate.html",
			"Hotel Nest": "../../properties/kolkata/digha/resort-page-nest.html",
			"Hotel Sea Sand": "../../properties/kolkata/digha/resort-page-seasand.html",
			"Piku's Inn": "../../properties/kolkata/digha/resort-page-piku.html",
			"The Beach View Hotel": "../../properties/kolkata/digha/resort-page-beachview.html",
			"The Palm Resort": "../../properties/kolkata/digha/resort-page-palm.html",
			"Aqua Marine": "../../properties/kolkata/mandarmani/resort-page-aquamarine.html",
			"Hotel Sonar Bangla": "../../properties/kolkata/mandarmani/resort-page-hotelsonar.html",
			"Suncity Resort": "../../properties/kolkata/mandarmani/resort-page-suncity.html",
			"The Candlewood Park Beach Resort": "../../properties/kolkata/mandarmani/resort-page-candlewood.html",
			"Anutri Beach Resort": "../../properties/kolkata/mandarmani/resort-page-anutri.html",
			"Sea Star Spa Resort": "../../properties/kolkata/mandarmani/resort-page-seastar.html",
			"Sun N Sand Resort": "../../properties/kolkata/mandarmani/resort-page-sunnsand.html",
			"Viceroy Bech & Spa Resort": "../../properties/kolkata/mandarmani/resort-page-viceroy.html",
			"Victoria Beach Resort": "../../properties/kolkata/mandarmani/resort-page-victoria.html",
			"The Sana Beach Resort": "../../properties/kolkata/mandarmani/resort-page-sana.html",
			"Camelia Resort": "../../properties/kolkata/shantiniketan/resort-page-camelia.html",
			"Hotel Royal Bengal": "../../properties/kolkata/shantiniketan/resort-page-hotelroyal.html",
			"Baul Sangee": "../../properties/kolkata/shantiniketan/resort-page-baul.html",
			"Club Central Hotel": "../../properties/kolkata/shantiniketan/resort-page-clubcentral.html",
			"Chhuti Holiday Resort": "../../properties/kolkata/shantiniketan/resort-page-chhuti.html",
			"Mohor Kutir Resort": "../../properties/kolkata/shantiniketan/resort-page-mohor.html",
			"Ram Shyam Village Resort": "../../properties/kolkata/shantiniketan/resort-page-ramshyam.html",
			"Shantiniketan Residency": "../../properties/kolkata/shantiniketan/resort-page-residency.html",
			"The Ananda Resort": "../../properties/kolkata/shantiniketan/resort-page-ananda.html",
			"The Cristallo Resort": "../../properties/kolkata/shantiniketan/resort-page-cristallo.html",
			"Hotel Sonar Bangla": "../../properties/kolkata/sundarban/resort-page-sundarhotelsonar.html",
			"Sundarban Tiger Camp": "../../properties/kolkata/sundarban/resort-page-tigercamp.html",
			"Gramer Bari Eco Resort": "../../properties/kolkata/sundarban/resort-page-gramerbari.html",
			"Royal Sundarban Wild Resort": "../../properties/kolkata/sundarban/resort-page-royalwild.html",
			"Solitary Nook Resort": "../../properties/kolkata/sundarban/resort-page-solitary.html",
			"Sundarban Gateway Resort": "../../properties/kolkata/sundarban/resort-page-gateway.html",
			"Sundarban Residency": "../../properties/kolkata/sundarban/resort-page-sundarresidency.html",
			"Sundarban Riverside Holiday Resort": "../../properties/kolkata/sundarban/resort-page-riverside.html",
			"Sundarban Tiger Roar Resort": "../../properties/kolkata/sundarban/resort-page-tigerroar.html",
			"Tora Eco Resort": "../../properties/kolkata/sundarban/resort-page-toraeco.html"
		}
		var sel = document.getElementById("resort-name");
		for (var x in resLocs)
		{
			if (sel.options[sel.selectedIndex].value == x)
			{
				window.location.assign(resLocs[x]);
			}
		}
	}
}

function interest()
{
	var interestSel = document.getElementById("interest-name");
	var desSel = document.getElementById("destination-name1");
	var interests = 
	{
		"Leisure":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/leisure.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Gourmet":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/gourmet.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Wellness":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/wellness.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Honeymoon":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/honeymoon.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Heritage":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/heritage.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Wildlife":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/wildlife.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Wedding":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/wedding.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
		"Conference":
		{
			"Kolkata Outskirts":"properties/kolkata/outskirts/interest/conference.html",
			"Digha":"Leisure",
			"Mandarmani":"Leisure",
			"Shanitiniketan":"Leisure",
			"Sundarban":"Leisure"
		},
	}
	for (var x in interests)
	{
		interestSel.options[interestSel.options.length] = new Option(x, x);
	}
	interestSel.onchange = function()
	{
		desSel.length = 1;
		for (var y in interests[this.value])
		{
			desSel.options[desSel.options.length] = new Option(y, y);
		}
	}
	desSel.onchange = function()
	{
		var z = interests[interestSel.value][this.value];
		console.log(window.location.assign(z));
	}
}