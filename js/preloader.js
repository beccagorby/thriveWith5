/**
 * Created by BeccaGorby on 3/6/16.
 */

// ----------------------- VARIABLES AND FUNCTIONS FOR PRELOADER ------------- //
var imgLoaded = false;
var timesUp = false;

function turnOffPreloader() {
    if(imgLoaded && timesUp ){
        $(".preloader").addClass("hide");
    }
}

function timeoutOver() {
    timesUp = true;
    turnOffPreloader();
}

// ----------------------- DOCUMENT READY ------------------------------- //
$(document).ready(function() {
    // ------------------- TIMEOUT FOR PRELOADER ----------------------- //
    setTimeout(timeoutOver, 600);

    // ------------------- ENTER SCREEN IMAGE EFFECTS ----------------- //
    $(".downArrow, .logo").mouseenter(function () {
            $("img.desaturate").css({
                '-webkit-filter': 'grayscale(0%)',
                'filter': 'grayscale(0%)'
            });
        })
        .mouseleave(function () {
            $("img.desaturate").css({
                '-webkit-filter': 'grayscale(100%)',
                'filter': 'grayscale(100%)'
            });
        });

    $(".downArrow").click(function() {
        $(".enterScreen").addClass("animated fadeOutUp");
        $(".homeScreen").css("top","0").addClass("animated fadeInUp");
        $(".out").each(function(index) {
            TweenLite.from(
                this,
                .7,
                {delay: index * .05, alpha: 0, y: 200})
        });
    });

    if($(window).width() < 750){
        $(".out, .footer").each(function(index) {
            TweenLite.from(
                this,
                .7,
                {delay: index * .05, alpha: 0, y: 250})
        });

        $(".shop, .about, .training, .faq, .hostParty, .events, .join, .blog").removeClass("hvr-bounce-to-bottom");

        $(".social .fa").removeClass("hvr-bounce-in");
    }



});

// ----------------------- WINDOW LOAD ------------------------------- //
$(window).load(function() {
    imgLoaded = true;
    turnOffPreloader();
});