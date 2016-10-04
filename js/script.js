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