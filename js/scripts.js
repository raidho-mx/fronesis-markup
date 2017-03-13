// HOME TABS
$(".tabs-menu a").click(function(event) {
	event.preventDefault();
	$(this).parent().addClass("current");
	$(this).parent().siblings().removeClass("current");
	var tab = $(this).attr("href");
	$(".tab-content").not(tab).css("display", "none");
	$(tab).fadeIn();
});


// BOOKING: SECONDARY NAVIGATION
$(".nav a.triggerNav").click(function(event) {
	event.preventDefault();
	$(this).parent().toggleClass("current");
	$(this).parent().siblings().removeClass("current");
	var tab = $(this).attr("href");
	$(".booking-nav-hidden").not(tab).toggleClass("display");
	$(tab).toggleClass("display");
});


// MAIN NAVIGATION
$('#triggerStMenu, #closeBtn').click(function(){
	$('.st-menu.hidden-menu').toggleClass('show');
});


// SLIDER ONE COLUMN
$('.one-col-slider').slick({
	slidesToShow: 1,
	slide: '.slider-item',
	arrows: true,
	prevArrow: '<span class="slick-prev"></span>',
	nextArrow: '<span class="slick-next"></span>',
	appendArrows: '.one-col-slider .arrow-container'
});


// SLIDER SIX COLUMNS
$('.six-col-slider').slick({
	slidesToShow: 6,
	infinite: true,
	slidesToScroll: 1,
	slide: '.slider-item',
	arrows: true,
	prevArrow: '<span class="slick-prev"></span>',
	nextArrow: '<span class="slick-next"></span>',
	appendArrows: '.six-col-slider .arrow-container',
	responsive: [
	{
		breakpoint:  1200,
		settings: {
			slidesToShow: 4
		}
	},
	{
		breakpoint: 800,
		settings: {
			slidesToShow: 3
		}
	},
	{
		breakpoint: 420,
		settings: {
		  slidesToShow: 2
		}
	},
	{
		breakpoint: 300,
		settings: {
		  slidesToShow: 1
		}
	}
	]
});


// BOOKING: ADJUST NAVIGATION WIDTH
var widthLi = $(".booking-nav .nav li").outerWidth();
var sizeLi = $(".booking-nav .nav li").length;
var totalWidthLi = widthLi * sizeLi + 100;
$(".booking-nav .nav ul").css({"width" : totalWidthLi });


// // MODALS: TRIGGER SUGGESTION LIST AT SEARCH BUTTON
// $( ".search input" ).focus(function() {
// 	$('.suggestion-list').addClass('show');
// }).blur(function() {
// 	$('.suggestion-list').removeClass('show');
// });

// POP CALENDAR
$( ".datepicker" ).datepicker({
	dateFormat: 'd MM yy'
});


// INDEX: POP ADD URL BOX
$(".create-post .add").click(function(){
	$(".create-post.add-url").addClass("show");
});

$('.create-post.add-url').keypress(function(e) {
	var key = e.which;
	if (key === 13) {
		$('.create-post.url-added').toggleClass('show');
		$('.create-post.add-url').toggleClass('show');
	}
});
