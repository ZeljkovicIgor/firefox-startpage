import { getSun } from "./sun.js";

setRandomBackground();

function setRandomBackground() {
    var theme = isDay() ? 'day' : 'night';

    var body = document.getElementsByTagName('body')[0];
    var randomBackgroundName = Math.floor(Math.random() * 35) + 1;

    body.style.background = `url('./backgrounds/${theme}/${randomBackgroundName}.gif')`;
    body.style.backgroundSize = 'cover';
}

function isDay() {
    var sun = getSun();
    var hourNow = new Date().getHours();

    if (hourNow > Math.round(sun.sunrise) && hourNow < Math.round(sun.sunset)) {
        return true;
    }

    return false;
}
