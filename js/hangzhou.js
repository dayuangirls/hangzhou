// JavaScript File

// West Lake tab on Hangzhou Page --
$(document).ready(function($) {
    $("#gallery li img").click(function() {
        $("#gallery li img").removeClass("switch");
            $(this).addClass("switch");
                $("#main-img").attr("src", $(this).attr("src"));
    });
});

// Grand Canal tab on Hangzhou Page --
$(document).ready(function($) {
    $("#gallery li img").click(function() {
        $("#gallery li img").removeClass("switch");
            $(this).addClass("switch");
                $("#main-img2").attr("src", $(this).attr("src"));
    });
});

// Tea Plantation tab on Hangzhou Page --
$(document).ready(function($) {
    $("#gallery li img").click(function() {
        $("#gallery li img").removeClass("switch");
            $(this).addClass("switch");
                $("#main-img3").attr("src", $(this).attr("src"));
    });
});

// Local Cuisines tab on Hangzhou Page --
$(document).ready(function($) {
    $("#gallery li img").click(function() {
        $("#gallery li img").removeClass("switch");
            $(this).addClass("switch");
                $("#main-img4").attr("src", $(this).attr("src"));
    });
});

// Animation on West Lake Legendary tab on Hangzhou Page:
$(document).ready(function() {
    $("#explode").click(function() {
        $("#pagoda").effect("shake", {times: 10}, "slow").effect("explode", {pieces: 400}, 600, function() {
        });
        $("#madame" ).fadeIn(8000);
    });
});