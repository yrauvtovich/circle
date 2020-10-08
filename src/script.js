$(document).ready(function(){
  $( ".circle-one" ).mouseenter(function() {
    $( ".circle-one" ).animate({
			opacity: "1",
			width: "18vmin",
			height: "18vmin"
		}, 1500);
 	  $( ".circle-two" ).animate({
			opacity: "1",
			width: "38vmin",
			height: "38vmin"
		}, 1800);
 	  $( ".circle-three" ).animate({
			opacity: "1",
			width: "58vmin",
			height: "58vmin"
		}, 2100);
 	  $( ".circle-four" ).animate({
			opacity: "1",
			width: "78vmin",
			height: "78vmin"
		}, 2400);
 	  $( ".circle-five" ).animate({
			opacity: "1",
			width: "98vmin",
			height: "98vmin"
		}, 2700);
 });
  $( ".circle-one" ).mouseleave(function() {
  	$( ".circle-one" ).animate({
			opacity: "1",
			width: "10vmin",
			height: "10vmin"
		}, 2500);
  	$( ".circle-two" ).animate({
			opacity: "1",
			width: "0",
			height: "0"
		}, 3000);
  	$( ".circle-three" ).animate({
			opacity: "1",
			width: "0",
			height: "0"
		}, 3500);
  	$( ".circle-four" ).animate({
			opacity: "1",
			width: "0",
			height: "0"
		}, 4000);
  	$( ".circle-five" ).animate({
			opacity: "1",
			width: "0vmin",
			height: "0vmin"
		}, 4500);
  });
});

