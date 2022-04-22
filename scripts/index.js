function hideResponsiveBlocker(){
	document.getElementById("res-block").style.visibility = "hidden";
    document.body.style.overflow = "visible";
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < $(window).height()/2){
            $("canvas").css({"opacity" : "20%"})
        }
        else{
            $("canvas").css({"opacity" : ($(this).scrollTop()-$(window).height()/2) / ($(window).height()/2)*2+.2})
        }
        // else {
        //     $("canvas").css({"opacity" : "1"})
        // }
    })
  })