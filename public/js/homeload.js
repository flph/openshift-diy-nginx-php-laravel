var init = function() {
    addClass(document.querySelector('body'), 'jsenabled');
    var lines = document.querySelectorAll('#slider>ul>li');
    var total = lines.length;
    var randown = shuffleArray(getIntArray(0, total - 1));
    var current = 0;
    var interval = setInterval(setTime, 5000);
    addClass(lines[randown[current]], 'current');

    var colorArray = ["#838271", "#AA7570", '#CC5F39', '#4fa46b', '#1e7145', '#6F8A79', '#1d1d1d'];
    var totalColors = colorArray.length;
    var currentColorPosition = getRandomInt(0, totalColors - 1);
    setBackgroundColor(colorArray[currentColorPosition]);

    function setTime()
    {
        currentColorPosition = (currentColorPosition + 1 === totalColors) ? 0 : currentColorPosition + 1;
        setBackgroundColor(colorArray[currentColorPosition]);

        removeClass(lines[randown[current]], 'current');
        current = (current + 1 === total) ? 0 : current + 1;
        addClass(lines[randown[current]], 'current');
    }
};
if (document.readyState !== "loading") {
    init();
}
else {
    document.addEventListener("DOMContentLoaded", init);
}