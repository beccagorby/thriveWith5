/**
 * Created by BeccaGorby on 3/1/16.
 */
var jewelryData = (function(){
    var _jsonObj = {};

    var _initData = function(){
        $.getJSON("data/jewelryImages.json", function(data){
            var jewelry = data.jewelry;

            _jsonObj = jewelry;

            $.each(jewelry, function(key, piece){
                $(".jewelryBanner").append('<img src="' +piece.imgURL+ '">');
            });
        });
    };

    return {
        init: _initData
    }
})();