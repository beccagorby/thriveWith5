/**
 * Created by BeccaGorby on 3/1/16.
 */

function fragmentSelect() {
    $(".onScreen").click(function(){
        var fragmentId = this.id;

        $.get("fragments/" + fragmentId + ".html", function(data) {
            $(".infoScreenContent").html(data);
        });
        $(".outsideInfoScreen").addClass("animated slideInRight");
    });
}

function socialHover() {
    $(".outsidePin").mouseenter(function(){
        $(".fa-pinterest-square").css("color", "white");
    }).mouseleave(function(){
        $(".fa-pinterest-square").css("color", "#ee008c");
    });
    $(".outsideFacebook").mouseenter(function(){
        $(".fa-facebook-official").css("color", "white");
    }).mouseleave(function(){
        $(".fa-facebook-official").css("color", "#ee008c");
    });
    $(".outsideInsta").mouseenter(function(){
        $(".fa-instagram").css("color", "white");
    }).mouseleave(function(){
        $(".fa-instagram").css("color", "#ee008c");
    });
}

function initJewelry() {
    jewelryData.init();
}

$(document).ready(function() {
    initJewelry();
    socialHover();
    fragmentSelect();

    // ----------------- INFOSCREEN POPUP FUNCTIONS ----------------- //

    $(".onScreen").click(function(){
        $(".outsideInfoScreen").css("visibility", "visible").removeClass("animated slideOutRight");
    });

    $(".closeBtn").click(function(){
        $(".outsideInfoScreen").removeClass("animated slideInRight").addClass("animated slideOutRight");
    });
});

