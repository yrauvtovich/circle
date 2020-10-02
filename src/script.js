$(document).ready(function(){
    $(".circle-one").mouseenter(function() {
        $(".circle-one").addClass( "circle-two" );
        $( ".circle-two" ).animate({
            opacity: "1"
        }, 1500, "linear");
        $(".circle-one").addClass( "circle-three" );
        $( ".circle-three" ).animate({
            opacity: "1"
        }, 30000, "linear");
        $(".circle-one").addClass( "circle-four" );
        $( ".circle-four" ).animate({
            opacity: "1"
        }, 60000, "linear");
        $(".circle-one").addClass( "circle-five" );
        $( ".circle-five" ).animate({
            opacity: "1"
        }, 120000, "linear");
    })
});

