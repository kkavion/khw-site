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
	$('.active-slider2 .destination-slider-active').owlCarousel({
		loop:true,
		margin:40,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		animateOut:false,
		animateIn:false,
		responsive:
		{
			360 : {items:2},
			480 : {items:3},
			1080 : {items:3},
		}
	});
	$('.active-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		animateOut:false,
		animateIn:false,
		items:3
	});
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
			interval: 5000,
			ride: true,
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


var zones = 
{
	"Altius": ["Kasauli", "Khandala", "Lavasa", "Lonavala", "Matheran", "Mount Abu", "Mussoorie", "Panchgani", "Panchmarhi", "Panvel", "Parwanoo", "Shimla", "Yelagiri"],
	"Backwater":["Alleppey", "Kollam", "Kottayam", "Kumarakom", "Poovar"],
	"Beach": ["Alibaug", "Digha", "Kanyakumari", "Kovalam", "Mahabalipuram", "Mandarmani", "Puducherry", "Varkala"],
	"Cityscape": ["Bhopal", "Indore", "Gandhinagar", "Udaipur", "Ujjain", "Vadodara"],
	"Heritage": ["Agra", "Hassan", "Mahabalipuram", "Mysuru", "Shantiniketan"],
	"Outskirts": ["Ahmedabad Outskirts", "Bengaluru Outskirts", "Bhopal Outskirts", "Chandigarh Outskirts", "Chennai Outskirts", "Indore Outskirts",
		"Kolkata Outskirts", "Mumbai Outskirts", "Nagpur Outskirts", "New Delhi Outskirts", "Pune Outskirts", "Thiruvananthapuram Outskirts"],
	"Wildlife": ["Alwar", "Bharatpur", "Mount Abu", "Nagarhole", "Kanha", "Pench", "Sariska", "Sundarbans"]
};

var deszones = 
{
	"Ahmedabad": ["Outskirts", "Gandhinagar", "Mount Abu", "Udaipur", "Vadodara"],
	"Bengaluru":["Outskirts", "Hassan", "Mysuru", "Nagarhole", "Yelagiri"],
	"Bhopal": ["Outskirts", "Indore", "Panchmarhi", "Ujjain"],
	"Chandigarh": ["Outskirts", "Kasauli", "Mussoorie", "Parwanoo", "Shimla"],
	"Chennai": ["Outskirts", "Mahabalipuram", "Puducherry"],
	"Indore": ["Outskirts", "Bhopal", "Ujjain"],
	"Kolkata": ["Outskirts", "Digha", "Mandarmani", "Shantiniketan", "Sundarbans"],
	"Mumbai": ["Outskirts", "Alibaug", "Khandala", "Lavasa", "Lonavala", "Matheran", "Panvel"],
	"Nagpur": ["Outskirts", "Kanha", "Panchmarhi", "Pench"],
	"New Delhi": ["Outskirts", "Agra", 'Alwar', 'Bharatpur', "Sariska"],
	"Pune": ["Outskirts", "Khandala", "Lavasa", "Lonavala", "Panchgani"],
	"Thiruvananthapuram": ["Outskirts", "Alleppey", "Kanyakumari", "Kollam", "Kottayam", "Kovalam", "Kumarakom", "Poovar", "Varkala"]
};

var allResort = 
{
	//Ahmedabad
	"Ahmedabad Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Gandhinagar": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Mount Abu": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Udaipur": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Vadodara": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//bengaluru
	"Bengaluru Outskirts": {
		"Premium": ["Royal Orchid Resort", "The Golden Palm Resorts"],
		"Standard": ["Angsana Oasis Spa & Resort", "Clarks Exotica Resort and Spa", "Guhantara Resort", "Windflower Prakruthi Resort & Spa", "Barog Heights", "Forest Hill Golf & Country Club", "Nalagarh Fort", "Ramshehar Fort"],
		"Economy": ["The Bharatgarh Fort"]
	},
	"Hassan": {
		"Premium": ["Mallige Residency"],
		"Standard": ["Mayura International Tanneeruhalla", "Hoysala Village Resort", "Southern Star Hassan", "The Ashhok Hassan"]
	},
	"Mysuru": {
		"Luxury": ["Grand Mercure", "Orange County Resort", "Radisson Blu Plaza Hotel"],
		"Premium": ["Country Inn & Suites", "Fortune JP Palace", "Laliths Mahal Palace Hotel", "Royal Orchid Brindavan Gardens", "Royal Orchid Metropole Hotel", "Sandesh The Prince", "The Windflower Resort & Spa"],
		"Standard": ["Golden Landmark Resort", "Hotel Southern Star", "Hotel Pai Vista", "Indus Valley Ayurvedic Centre", "Silent Shores Resort & Spa", "The Atrium Boutique Hotel", "The Hotel Viceroy", "The President Hotel"],
		"Economy": ["Anahata Healing Arts Centre", "The Village"]
	},
	"Nagarhole": {
		"Luxury": ["Kuruba Safari Lodge", "JLR Kings Sanctuary"],
		"Premium": ["The Serai Kabini", "Machaan Wilderness Lodge", "Regenta Kabini Spring Resort", "Red Earth", "Waterwoods Lodge Kabini"],
		"Standard": ["Kaav Safari Lodge", "The Peepal Tree", "Kabini River Lodge", "Kabini Lake View Resort"],
		"Boutique": ["The Bison Resort"],
		"Economy": ["Jungle Inn"]
	},
	"Yelagiri": {
		"Premium": ["Marrigold Ridge Sterling Holiday Resort"],
		"Standard": ["Hotel Emerald Dove & Hotel Nigress", "La Flora Cloud 9 Resort", "Kumararraja Palace"],
		"Economy": ["Hotel Hill Breeze Yelagiri", "Hotel Landmark"],
		"Homestay": ["Yelagiri Farmhouse"]
	},
	//bhopal
	"Bhopal Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Indore": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Ujjain": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Panchmarhi": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//chandigarh
	"Chandigarh Outskirts": {
		"Premium": ["Golden Tulip", "Surya Villas", "Nalagarh Fort"],
		"Standard": ["Aura Vaseela Resort", "Casbsa Lodge", "Kikar Lodge"],
		"Economy": ["Shilhaandara Resort", "Bheemeshwar Adventure & Nature Camp", "Galibore Nature Camp"]
	},
	"Kasauli": {
		"Premium": ["Baikunth Resort Kasauli", "Baba Resorts"],
		"Standard": ["Kasauli Hillls Resort", "The Fern Surya Resort", "Kasauli Resort by Piccadily", "Alasia Hotel", "Hotel Sanawar View", "Fortune Select Forest Hill", "Kasauli Exotica", "Safarmaina Resort", "Kasauli Castle Resort", "Birds View Kasauli", "Kasauli Regency Hotel", "Winnies Holiday Resort & Spa", "Shivalik Hotel & Resorts"]
	},
	"Musoorie": {
		"Luxury": ["Walnut Grove Resort and Spa", "Welcomhotel, The Savoy"],
		"Premium": ["Jaypee Residency Manor", "Fortune Resort Grace", "Royal Orchid Fort Resort", "The Oasis Mussoorie", "Ramada by Wyndham", "Rokeby Manor"],
		"Standard": ["Mosaic Mussoorie", "Hotel Sun N Snow", "Sterling Mussoorie", "The Fern Brentwood Resort", "Jharpani Castle", "Country Inn Premier Pacific Resort", "Hotel Vishnu Palace", "WelcomHeritage Kasmanda Palace", "Hotel Himayan Club", "Karma Vilas By Howard", "Ceyone Classic Fall Resort", "The India Big Bend"]
	},
	"Parwanoo": {
		"Premium": ["Moksha Himalaya Spa Resort"],
		"Standard": ["Timber Trail Heights and Terraces", "Timber Trail Resort", "Hotel Windsmoor", "Surya Rock Rose Resort"],
		"Economy": ["Hotel Royal Regency", "Hotel Shivalik", "Hotel Park Inn"]
	},
	"Shimla": {
		"Luxury": ["The Oberoi Cecil", "Radisson Jass", "Hotel Sunrise", "Hotel Chaman Palace", "Hotel Satyam Paradise"],
		"Premium": ["Sterling Legacy", "Larisa Shimla", "Clarkes Hotel", "Summit Le Royale Hotel", "Hotel Willow Banks", "Koti Resort", "Hotel Marina", "Shimla Havens Resort", "East Bourne Resort & Spa"],
		"Standard": ["Marigold Sarovar Portico", "The Zion Shimla", "Hotel Silverine", "Hotel The Alpine Heritage Residency", "Maharaja", "Ashiana Clarks Inn"]
	},
	//chennai
	"Chennai Outskirts": {
		"Luxury": ["Taj Fisherman's Cove Resort"],
		"Premium": ["MGM Beach Resort", "Silver Sand Beach Resort"],
		"Standard": ["The Green Coconut Resort", "Park Inn Beach Resort", "Country Club Jade Beach Resort", "Ilara Hotel & Spa", "Green Meadows Resort",  "Pleasant Days Resort", "VGP Golden Beach Resort"],
		"Economy": ["Green Meadows Resort"]
	},
	"Mahabalipuram": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Puducherry": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//indore
	"Indore Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Bhopal": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//kolkata
	"Kolkata Outskirts": {
		"Luxury": ["Ganga Kutir", "The Amaya Resort", "Vedic Village"],
		"Premium": ["Fortune Park", "The Ffort Raichak", "The Rajbari Bawali"],
		"Standard": ["Country Roads", "Hotel Sonar Bangla", "Ibiza The Fern"],
		"Boutique": ["Breathing Earth"]
	},
	"Digha": {
		"Standard": ["Hotel Seagull"],
		"Economy": ["Abhyagama Hotel", "Cygnett Inn", "Hotel Coral", "Hotel Daltin", "Hotel Green Gate", "Hotel Nest", "Hotel Sea Sand", "Piku's Inn", "The Beach View Hotel", "The Palm Resort"]
	},
	"Mandarmani": {
		"Standard": ["Aqua Marine", "Hotel Sonar Bangla", "Suncity Resort", "The Candlewood Park Beach Resort"],
		"Economy": ["Anutri Beach Resort", "Sea Star Spa Resort", "Sun N Sand Resort", "Viceroy Bech & Spa Resort", "Victoria Beach Resort"],
		"Boutique": ["The Sana Beach Resort"]
	},
	"Shantiniketan": {
		"Standard": ["Camelia Resort", "Hotel Royal Bengal"],
		"Economy": ["Baul Sangee", "Club Central Hotel", "Chhuti Holiday Resort", "Mohor Kutir Resort", "Ram Shyam Village Resort", "Shantiniketan Residency", "The Ananda Resort", "The Cristallo Resort"]
	},
	"Sundarban": {
		"Standard": ["Hotel Sonar Bangla", "Sundarban Tiger Camp"],
		"Economy": ["Gramer Bari Eco Resort", "Royal Sindarban Wild Resort", "Solitary Nook Resort", "Sundarban Gateway Resort", "Sundarban Residency", "Sundarban Riverside Holiday Resort", "Sundarban Tiger Roar Resort", "Tora Eco Resort"]
	},
	//mumbai
	"Mumbai Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Alibaug": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Khandala": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Lavasa": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Lonavala": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Matheran": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Panvel": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//nagpur
	"Nagpur Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Kanha": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Pench": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//new delhi
	"New Delhi Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Agra": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Alwar": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Bharatpur": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Sariska": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	//thiruvananthapuram
	"Thiruvananthapuram Outskirts":{
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Alleppey": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Kanyakumari": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Kollam": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Kovalam": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Kumarakom": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	},
	"Poovar": {
		"Luxury": [],
		"Premium": [],
		"Standard": [],
		"Boutique": [],
		"Economy": []
	}
};

var desLocs = 
{
	"Ahmedabad Outskirts" : "getaway/ahmedabad/outskirts-page.html",
	"Gandhinagar" : "getaway/ahmedabad/gandhinagar.html",
	"Mount Abu" : "getaway/ahmedabad/mtabu.html",
	"Udaipur" : "getaway/ahmedabad/udaipur.html",
	"Vadodara" : "getaway/ahmedabad/vadodara.html",
	
	"Bengaluru Outskirts" : "getaway/bengaluru/outskirts-page.html",
	"Hassan" : "getaway/bengaluru/hassan.html",
	"Mysuru" : "getaway/bengaluru/mysuru.html",
	"Nagarhole" : "getaway/bengaluru/nagarhole.html",
	"Yelagiri" : "getaway/bengaluru/yelagiri.html",
	
	"Bhopal Outskirts" : "getaway/bhopal/outskirts-page.html",
	"Indore" : "getaway/bhopal/indore.html",
	"Ujjain" : "getaway/bhopal/ujjain.html",
	"Panchmarhi" : "getaway/bhopal/panchmarhi.html",
	
	"Chandigarh Outskirts" : "getaway/chandigarh/outskirts-page.html",
	"Kasauli" : "getaway/chandigarh/kasauli.html",
	"Mussoorie" : "getaway/chandigarh/mussoorie.html",
	"Parwanoo" : "getaway/chandigarh/parwanoo.html",
	"Shimla" : "getaway/chandigarh/shimla.html",
	
	"Chennai Outskirts" : "getaway/chennai/outskirts-page.html",
	"Mahabalipuram" : "getaway/chennai/mahabalipuram.html",
	"Puducherry" : "getaway/chennai/puducherry.html",
	
	"Indore Outskirts" : "getaway/indore/outskirts-page.html",
	"Bhopal" : "getaway/indore/bhopal.html",
	
	"Kolkata Outskirts" : "getaway/kolkata/outskirts-page.html",
	"Digha" : "getaway/kolkata/digha.html",
	"Mandarmani" : "getaway/kolkata/mandarmani.html",
	"Shantiniketan" : "getaway/kolkata/shantiniketan.html",
	"Sundarbans" : "getaway/kolkata/sundarbans.html",
	
	"Mumbai Outskirts" : "getaway/mumbai/outskirts-page.html",
	"Alibaug" : "getaway/mumbai/alibaug.html",
	"Khandala" : "getaway/mumbai/khandala.html",
	"Lavasa" : "getaway/mumbai/lavasa.html",
	"Lonavala" : "getaway/mumbai/lonavala.html",
	"Matheran" : "getaway/mumbai/matheran.html",
	"Panvel" : "getaway/mumbai/panvel.html",
	
	"Nagpur Outskirts" : "getaway/nagpur/outskirts-page.html",
	"Kanha" : "getaway/nagpur/kanha.html",
	"Pench" : "getaway/nagpur/pench.html",
	
	"New Delhi Outskirts" : "getaway/newdelhi/outskirts-page.html",
	"Agra" : "getaway/newdelhi/agra.html",
	"Alwar" : "getaway/newdelhi/alwar.html",
	"Bharatpur" : "getaway/newdelhi/bharatpur.html",
	"Sariska" : "getaway/newdelhi/sariska.html",
	
	"Pune Outskirts" : "getaway/pune/outskirts-page.html",
	"Panchgani" : "getaway/pune/panchgani.html",
	
	"Thiruvananthapuram Outskirts" : "getaway/thiruvananthapuram/outskirts-page.html",
	"Alleppey" : "getaway/thiruvananthapuram/alleppey.html",
	"Kanyakumari" : "getaway/thiruvananthapuram/kanyakumari.html",
	"Kollam" : "getaway/thiruvananthapuram/kollam.html",
	"Kottayam" : "getaway/thiruvananthapuram/kottayam.html",
	"Kovalam" : "getaway/thiruvananthapuram/kovalam.html",
	"Kumarakom" : "getaway/thiruvananthapuram/kumarakom.html",
	"Poovar" : "getaway/thiruvananthapuram/poovar.html",
	"Varkala" : "getaway/thiruvananthapuram/varkala.html"
};

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
};

var offerZone =
{
	"Ahmedabad Outskirts" : "getaway/ahmedabad/offer_outskirts.html",
	"Gandhinagar" : "getaway/ahmedabad/offer_gandhinagar.html",
	"Mount Abu" : "getaway/ahmedabad/offer_mtabu.html",
	"Udaipur" : "getaway/ahmedabad/offer_udaipur.html",
	"Vadodara" : "getaway/ahmedabad/offer_vadodara.html",
	
	"Bengaluru Outskirts" : "getaway/bengaluru/offer_outskirts.html",
	"Hassan" : "getaway/bengaluru/offer_hassan.html",
	"Mysuru" : "getaway/bengaluru/offer_mysuru.html",
	"Nagarhole" : "getaway/bengaluru/offer_nagarhole.html",
	"Yelagiri" : "getaway/bengaluru/offer_yelagiri.html",
	
	"Bhopal Outskirts" : "getaway/bhopal/offer_outskirts.html",
	"Indore" : "getaway/bhopal/offer_indore.html",
	"Ujjain" : "getaway/bhopal/offer_ujjain.html",
	"Panchmarhi" : "getaway/bhopal/offer_panchmarhi.html",
	
	"Chandigarh Outskirts" : "getaway/chandigarh/offer_outskirts.html",
	"Kasauli" : "getaway/chandigarh/offer_kasauli.html",
	"Mussoorie" : "getaway/chandigarh/offer_mussoorie.html",
	"Parwanoo" : "getaway/chandigarh/offer_parwanoo.html",
	"Shimla" : "getaway/chandigarh/offer_shimla.html",
	
	"Chennai Outskirts" : "getaway/chennai/offer_outskirts.html",
	"Mahabalipuram" : "getaway/chennai/offer_mahabalipuram.html",
	"Puducherry" : "getaway/chennai/offer_puducherry.html",
	
	"Indore Outskirts" : "getaway/indore/offer_offer_outskirts.html",
	"Bhopal" : "getaway/indore/offer_bhopal.html",
	
	"Kolkata Outskirts" : "getaway/kolkata/offer_offer_outskirts.html",
	"Digha" : "getaway/kolkata/offer_digha.html",
	"Mandarmani" : "getaway/kolkata/offer_mandarmani.html",
	"Shantiniketan" : "getaway/kolkata/offer_shantiniketan.html",
	"Sundarbans" : "getaway/kolkata/offer_sundarbans.html",
	
	"Mumbai Outskirts" : "getaway/mumbai/offer_offer_outskirts.html",
	"Alibaug" : "getaway/mumbai/offer_alibaug.html",
	"Khandala" : "getaway/mumbai/offer_khandala.html",
	"Lavasa" : "getaway/mumbai/offer_lavasa.html",
	"Lonavala" : "getaway/mumbai/offer_lonavala.html",
	"Matheran" : "getaway/mumbai/offer_matheran.html",
	"Panvel" : "getaway/mumbai/offer_panvel.html",
	
	"Nagpur Outskirts" : "getaway/nagpur/offer_outskirts.html",
	"Kanha" : "getaway/nagpur/offer_kanha.html",
	"Pench" : "getaway/nagpur/offer_pench.html",
	
	"New Delhi Outskirts" : "getaway/newdelhi/offer_outskirts.html",
	"Agra" : "getaway/newdelhi/offer_agra.html",
	"Alwar" : "getaway/newdelhi/offer_alwar.html",
	"Bharatpur" : "getaway/newdelhi/offer_bharatpur.html",
	"Sariska" : "getaway/newdelhi/offer_sariska.html",
	
	"Pune Outskirts" : "getaway/pune/offer_outskirts.html",
	"Panchgani" : "getaway/pune/offer_panchgani.html",
	
	"Thiruvananthapuram Outskirts" : "getaway/thiruvananthapuram/offer_outskirts.html",
	"Alleppey" : "getaway/thiruvananthapuram/offer_alleppey.html",
	"Kanyakumari" : "getaway/thiruvananthapuram/offer_kanyakumari.html",
	"Kollam" : "getaway/thiruvananthapuram/offer_kollam.html",
	"Kottayam" : "getaway/thiruvananthapuram/offer_kottayam.html",
	"Kovalam" : "getaway/thiruvananthapuram/offer_kovalam.html",
	"Kumarakom" : "getaway/thiruvananthapuram/offer_kumarakom.html",
	"Poovar" : "getaway/thiruvananthapuram/offer_poovar.html",
	"Varkala" : "getaway/thiruvananthapuram/offer_varkala.html"
};

var dayoutZone =
{
	"Ahmedabad":"getaway/ahmedabad/day-out-tab.html",
	"Bengaluru":"getaway/bengaluru/day-out-tab.html",
	"Bhopal":"getaway/bhopal/day-out-tab.html",
	"Chandigarh":"getaway/chandigarh/day-out-tab.html",
	"Chennai":"getaway/chennai/day-out-tab.html",
	"Indore":"getaway/indore/day-out-tab.html",
	"Kolkata":"getaway/kolkata/day-out-tab.html",
	"Mumbai":"getaway/mumbai/day-out-tab.html",
	"Nagpur":"getaway/nagpur/day-out-tab.html",
	"Pune":"getaway/pune/day-out-tab.html",
	"New Delhi":"getaway/newdelhi/day-out-tab.html",
	"Thiruvananthapuram":"getaway/thiruvananthapuram/day-out-tab.html"
};

var resortZone =
{
	"Ahmedabad Outskirts" : "getaway/ahmedabad/outskirts-page.html",
	"Gandhinagar" : "getaway/ahmedabad/resort_gandhinagar.html",
	"Mount Abu" : "getaway/ahmedabad/resort_mtabu.html",
	"Udaipur" : "getaway/ahmedabad/resort_udaipur.html",
	"Vadodara" : "getaway/ahmedabad/resort_vadodara.html",
	
	"Bengaluru Outskirts" : "getaway/bengaluru/outskirts-page.html",
	"Hassan" : "getaway/bengaluru/resort_hassan.html",
	"Mysuru" : "getaway/bengaluru/resort_mysuru.html",
	"Nagarhole" : "getaway/bengaluru/resort_nagarhole.html",
	"Yelagiri" : "getaway/bengaluru/resort_yelagiri.html",
	
	"Bhopal Outskirts" : "getaway/bhopal/outskirts-page.html",
	"Indore" : "getaway/bhopal/resort_indore.html",
	"Ujjain" : "getaway/bhopal/resort_ujjain.html",
	"Panchmarhi" : "getaway/bhopal/resort_panchmarhi.html",
	
	"Chandigarh Outskirts" : "getaway/chandigarh/outskirts-page.html",
	"Kasauli" : "getaway/chandigarh/resort_kasauli.html",
	"Mussoorie" : "getaway/chandigarh/resort_mussoorie.html",
	"Parwanoo" : "getaway/chandigarh/resort_parwanoo.html",
	"Shimla" : "getaway/chandigarh/resort_shimla.html",
	
	"Chennai Outskirts" : "getaway/chennai/outskirts-page.html",
	"Mahabalipuram" : "getaway/chennai/resort_mahabalipuram.html",
	"Puducherry" : "getaway/chennai/resort_puducherry.html",
	
	"Indore Outskirts" : "getaway/indore/resort_offer_outskirts.html",
	"Bhopal" : "getaway/indore/resort_bhopal.html",
	
	"Kolkata Outskirts" : "getaway/kolkata/resort_offer_outskirts.html",
	"Digha" : "getaway/kolkata/resort_digha.html",
	"Mandarmani" : "getaway/kolkata/resort_mandarmani.html",
	"Shantiniketan" : "getaway/kolkata/resort_shantiniketan.html",
	"Sundarbans" : "getaway/kolkata/resort_sundarbans.html",
	
	"Mumbai Outskirts" : "getaway/mumbai/resort_offer_outskirts.html",
	"Alibaug" : "getaway/mumbai/resort_alibaug.html",
	"Khandala" : "getaway/mumbai/resort_khandala.html",
	"Lavasa" : "getaway/mumbai/resort_lavasa.html",
	"Lonavala" : "getaway/mumbai/resort_lonavala.html",
	"Matheran" : "getaway/mumbai/resort_matheran.html",
	"Panvel" : "getaway/mumbai/resort_panvel.html",
	
	"Nagpur Outskirts" : "getaway/nagpur/outskirts-page.html",
	"Kanha" : "getaway/nagpur/resort_kanha.html",
	"Pench" : "getaway/nagpur/resort_pench.html",
	
	"New Delhi Outskirts" : "getaway/newdelhi/outskirts-page.html",
	"Agra" : "getaway/newdelhi/resort_agra.html",
	"Alwar" : "getaway/newdelhi/resort_alwar.html",
	"Bharatpur" : "getaway/newdelhi/resort_bharatpur.html",
	"Sariska" : "getaway/newdelhi/resort_sariska.html",
	
	"Pune Outskirts" : "getaway/pune/outskirts-page.html",
	"Panchgani" : "getaway/pune/resort_panchgani.html",
	
	"Thiruvananthapuram Outskirts" : "getaway/thiruvananthapuram/outskirts-page.html",
	"Alleppey" : "getaway/thiruvananthapuram/resort_alleppey.html",
	"Kanyakumari" : "getaway/thiruvananthapuram/resort_kanyakumari.html",
	"Kollam" : "getaway/thiruvananthapuram/resort_kollam.html",
	"Kottayam" : "getaway/thiruvananthapuram/resort_kottayam.html",
	"Kovalam" : "getaway/thiruvananthapuram/resort_kovalam.html",
	"Kumarakom" : "getaway/thiruvananthapuram/resort_kumarakom.html",
	"Poovar" : "getaway/thiruvananthapuram/resort_poovar.html",
	"Varkala" : "getaway/thiruvananthapuram/resort_varkala.html"
};

var outskirtsZone =
{
	"Ahmedabad":"getaway/ahmedabad/outskirts-page.html",
	"Bengaluru":"getaway/bengaluru/outskirts-page.html",
	"Bhopal":"getaway/bhopal/outskirts-page.html",
	"Bhubaneswar":"getaway/bhubaneswar/outskirts-page.html",
	"Chandigarh":"getaway/chandigarh/outskirts-page.html",
	"Chennai":"getaway/chennai/outskirts-page.html",
	"Indore":"getaway/indore/outskirts-page.html",
	"Kolkata":"getaway/kolkata/outskirts-page.html",
	"Mumbai":"getaway/mumbai/outskirts-page.html",
	"Nagpur":"getaway/nagpur/outskirts-page.html",
	"New Delhi":"getaway/newdelhi/outskirts-page.html",
	"Thiruvananthapuram":"getaway/thiruvananthapuram/outskirts-page.html"
};

var bidnwinZone =
{
	"Ahmedabad":"getaway/ahmedabad/bidnwin.html",
	"Bengaluru":"getaway/bengaluru/bidnwin.html",
	"Bhopal":"getaway/bhopal/bidnwin.html",
	"Chandigarh":"getaway/chandigarh/bidnwin.html",
	"Chennai":"getaway/chennai/bidnwin.html",
	"Indore":"getaway/indore/bidnwin.html",
	"Kolkata":"getaway/kolkata/bidnwin.html",
	"Mumbai":"getaway/mumbai/bidnwin.html",
	"Nagpur":"getaway/nagpur/bidnwin.html",
	"Pune":"getaway/pune/bidnwin.html",
	"New Delhi":"getaway/newdelhi/bidnwin.html",
	"Thiruvananthapuram":"getaway/thiruvananthapuram/bidnwin.html"
};

var interests = 
{
	"Adventure": "adventure.html",
	"Cruise": "cruise.html",
	"Culture": "culture.html",
	"Gourmet":
	{
		"Indian":"gourmet/indian.html",
		"Oriental":"gourmet/oriental.html",
		"Continental":"gourmet/continental.html",
		"International":"gourmet/international.html",
	},
	"Historical": "historical.html",
	"Honeymoon":"honeymoon.html",
	"MICE": "mice.html",
	"Offbeat":"offbeat.html",
	"Pilgrimage": "pilgrimage.html",
	"Wedding":"wedding.html",
	"Wellness":"wellness.html",
	"Wildlife":"wildlife.html"
}

function filter(inner) {
	var typeSelect = document.getElementById("destination-type");
	var interestSelect = document.getElementById("interest-name");
	var destinationSelect = document.getElementById("destination-name");
	if (inner == "home" || inner == "destination")
	{
		for (var x in zones)
		{
			typeSelect.options[typeSelect.options.length] = new Option (x, x);
		}
		typeSelect.onchange = function ()
		{
			var c = zones[this.value];
			destinationSelect.length = 1;
			for (var i = 0; i < c.length; i++)
			{
				destinationSelect.options[destinationSelect.options.length] = new Option(c[i], c[i]);
			}
		}
		destinationSelect.onchange = function () {
			var sel = document.getElementById("destination-name");
			for (var x in desLocs)
			{
				if (sel.options[sel.selectedIndex].value == x)
				{
					if (inner == "destination")
					{
						window.location.assign("../../"+desLocs[x]);
					}
					else
					{
						window.location.assign(desLocs[x]);
					}
				}
			}
		}
	}
	else if (inner == "offer" || inner == "resort")
	{
		for (var x in zones)
		{
			typeSelect.options[typeSelect.options.length] = new Option (x, x);
		}
		typeSelect.onchange = function ()
		{
			var c = zones[this.value];
			destinationSelect.length = 1;
			for (var i = 0; i < c.length; i++)
			{
				destinationSelect.options[destinationSelect.options.length] = new Option(c[i], c[i]);
			}
		}
		destinationSelect.onchange = function () {
			var sel = document.getElementById("destination-name");
			if (inner == "offer")
			{
				for (var x in offerZone)
				{
					if (sel.options[sel.selectedIndex].value == x)
					{
						window.location.assign("../../"+offerZone[x]);
					}
				}
			}
			else if (inner == "resort")
			{
				for (var x in resortZone)
				{
					if (sel.options[sel.selectedIndex].value == x)
					{
						window.location.assign("../../"+resortZone[x]);
					}
				}
			}
		}
	}
	else if (inner == "dayout" || inner == "bidnwin")
	{
		for (var x in dayoutZone)
		{
			destinationSelect.options[destinationSelect.options.length] = new Option (x, x);
		}
		destinationSelect.onchange = function () {
			var sel = document.getElementById("destination-name");
			if (inner == "dayout")
			{
				for (var x in dayoutZone)
				{
					if (sel.options[sel.selectedIndex].value == x)
					{
						window.location.assign("../../"+dayoutZone[x]);
					}
				}
			}
			else if (inner == "bidnwin")
			{
				for (var x in bidnwinZone)
				{
					if (sel.options[sel.selectedIndex].value == x)
					{
						window.location.assign("../../"+bidnwinZone[x]);
					}
				}
			}
		}
	}
	else if (inner == "interest" || inner == "gourmet")
	{
		for (var x in interests)
		{
			interestSelect.options[interestSelect.options.length] = new Option (x, x);
		}
		interestSelect.onchange = function () {
			var sel = document.getElementById("interest-name");
			if (sel == "Gourmet")
			{
				var c = interests[this.value];
				destinationSelect.length = 1;
				for (var i = 0; i < c.length; i++)
				{
					destinationSelect.options[destinationSelect.options.length] = new Option(c[i], c[i]);
				}
			}
			else if (sel != "Gourmet")
			{
				for (var x in interests)
				{
					if (sel.options[sel.selectedIndex].value == x)
					{
						window.location.assign(interests[x]);
					}
				}
			}
		}
		destinationSelect.onchange = function () {
			var sel = document.getElementById("destination-name");
			for (var x in interests)
			{
				if (sel.options[sel.selectedIndex].value == x)
				{
					if (inner == "interest")
					{
						window.location.assign(interests[x]);
					}
					else if (inner == "gourmet")
					{
						window.location.assign("../"+interests[x]);
					}
				}
			}
		}
	}
}

function filterRP() {
	var zoneSelect = document.getElementById("zone-name");
	var destinationSelect = document.getElementById("destination-name1");
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
		var sel = document.getElementById("destination-name1");
		for (var y in allResort) {
			if (sel.options[sel.selectedIndex].value == y)
			{
				for (var z in allResort[this.value])
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
		var z = allResort[destinationSelect.value][this.value];
		for (var i = 0; i < z.length; i++) {
			resortSelect.options[resortSelect.options.length] = new Option(z[i], z[i]);
		}
	}
	resortSelect.onchange = function ()
	{
		var sel = document.getElementById("resort-name");
		for (var x in resLocs)
		{
			if (sel.options[sel.selectedIndex].value == x)
			{
				window.top.location = resLocs[x];
			}
		}
	}
}