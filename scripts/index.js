function hideResponsiveBlocker(){
	document.getElementById("res-block").style.visibility = "hidden";
    document.body.style.overflow = "visible";
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < $(window).height()/2){
            $("canvas").css({"opacity" : ".2"});
            $(".main").css({"opacity" : "1"});
        }
        else{
            $("canvas").css({"opacity" : ($(this).scrollTop()-$(window).height()/2) / ($(window).height()/2)*2+.2});
            $(".main").css({"opacity" : 1-($(this).scrollTop()-$(window).height()/2) / ($(window).height()/2)*3})
        }
        // else {
        //     $("canvas").css({"opacity" : "1"})
        // }
    });

    $('#scrollToTop').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

});

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 2*$(window).height()/3) {
        $("#scrollToTop").addClass("active");
    } else {
        $("#scrollToTop").removeClass("active");
    }
});