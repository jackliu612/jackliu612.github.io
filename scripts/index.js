let transp = 1;

function hideResponsiveBlocker(){
	document.getElementById("res-block").style.visibility = "hidden";
    document.body.style.overflow = "overlay";
}

function setCanvasOpacity(){
    if($(this).scrollTop() < $(document).height()/4){
        $("canvas").css({"opacity" : ".2"});
        $(".main").css({"opacity" : "1"});
    }
    else{
        $("canvas").css({"opacity" : ($(this).scrollTop()-$(document).height()/4) / ($(document).height())*4+.2});
        $(".main").css({"opacity" : 1-($(this).scrollTop()-$(document).height()/4) / ($(document).height())*8});
    }
}

$(document).ready(function(){
    $(window).scroll(function(){
        setCanvasOpacity();
    });

    $('#scrollToTop').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

});

// $('canvas').ready( function() {
//     setCanvasOpacity();
// });

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 2*$(document).height()/5) {
        $("#scrollToTop").addClass("active");
    } else {
        $("#scrollToTop").removeClass("active");
    }
});