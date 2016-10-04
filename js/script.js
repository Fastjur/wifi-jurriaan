var randColor = function() {
    var hexRgb = Math.floor(Math.random() * 16777215).toString(16);
    return hexRgb;
};

var setBgColor = function() {
    var rand = randColor();
    var colorString = "#" + rand;
    $('#rand-color').css('background-color', colorString);
};

window.setInterval(setBgColor, 100);

var hidePlayDiv = function() {
    $('#startPlayDiv').hide();
};

var showPlayDiv = function() {
    $('#startPlayDiv').show();
    console.log("show");
};

var startPlaying = function() {
    document.getElementById('audio').play();
    hidePlayDiv();
};

var checkPlaying = function() {
    var player = document.getElementById('audio');
    if (player.paused) {
        showPlayDiv();
    }
    console.log("check");
};

$('#audio').ready(function() {
    var player = document.getElementById('audio');
    player.onloadeddata = function () {
        checkPlaying();
    }
});