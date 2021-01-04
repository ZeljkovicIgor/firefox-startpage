(function() {
    setRandomBackground();

    function setRandomBackground() {
        var theme = 'night';

        var body = document.getElementsByTagName('body')[0];
        var randomBackgroundName = Math.floor(Math.random() * 35) + 1;

        body.style.background = `url('./backgrounds/${theme}/${randomBackgroundName}.gif')`;
        body.style.backgroundSize = 'cover';
    }
})()
