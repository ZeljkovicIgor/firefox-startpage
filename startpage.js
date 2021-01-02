(function() {
    setRandomBackground();

    function setRandomBackground(theme = 'night') {
        var body = document.getElementsByTagName('body')[0];
        var randomBackgroundName = Math.floor(Math.random() * 35) + 1;
        var productionUrl = '/mnt/Stuff/5_HOBBY/5_Programming/5_startpage';
        var testUrl = '';

        body.style.background = `url('${productionUrl}/backgrounds/${theme}/${randomBackgroundName}.gif')`;
        body.style.backgroundSize = 'cover';
    }
})()
