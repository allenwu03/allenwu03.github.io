$(window).scroll(function() {
   		if ($("#mainNav").offset().top > 100) {
   			$("#mainNav").addClass("navbar-scrolled");
   			$("#mainNav .nav-title").addClass("nav-change");
   			$(".navbar-nav .nav-item a").addClass("nav-change");
   			$(".navbar-nav .nav-item .dropdown button").addClass("nav-change");
   			$("#logo").attr("src", "images/LogoL.png");
   			$(".navbar-nav .nav-item .dropdown-menu").css({
   			"background-color" : "rgba(255,255,255,0.8)"});
   		} else {
   			$("#mainNav").removeClass("navbar-scrolled");
   			$("#mainNav .nav-title").removeClass("nav-change");
   			$(".navbar-nav .nav-item a").removeClass("nav-change");
   			$(".navbar-nav .nav-item .dropdown button").removeClass("nav-change");
   			$("#logo").attr("src", "images/LogoLS.png");
   			$(".navbar-nav .nav-item .dropdown-menu").css({
   			"background-color" : "transparent"});
   		}
   	});



 $("#downbtn").click(function() {
           $('html, body').animate({
               scrollTop: parseInt($("#downbtn").offset().top)+45
           }, 1500);
       });
       
       $("#downbtn2").click(function() {
           $('html, body').animate({
               scrollTop: parseInt($("#downbtn2").offset().top)+45
           }, 1500);
       });
       
       $("#downbtn3").click(function() {
           $('html, body').animate({
               scrollTop: parseInt($("#downbtn3").offset().top)+45
           }, 1500);
       });
       
       $("#downbtn4").click(function() {
           $('html, body').animate({
               scrollTop: parseInt($("#downbtn4").offset().top)
           }, 1500);
       });
       
       $("#downbtn5").click(function() {
           $('html, body').animate({
               scrollTop: parseInt($("#downbtn5").offset().top)
           }, 1500);
       });