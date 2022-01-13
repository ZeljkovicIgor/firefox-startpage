const { isUpdateReady } = utils;

const sun = (function () {
    //  put in a seperate file for constants?
    const longitude = 19.833549;
    const latitude = 45.267136;
    const PI = Math.PI;
    const time_zone = 1;

    function calculateSunriseSunset() {
        console.log("Calculating sunrise and sunset times...");

        let B = ((360 / 365) * (dayOfYear() - 81) * PI) / 180;
        let EoT =
            9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
        var LSTM = 15 * time_zone;
        var time_correction = EoT + 4 * (longitude - LSTM);
        var sunDeclination = calculateSunDeclination(dayOfYear()).toFixed(2);

        var A =
            (-1 *
                (Math.sin(toRad(latitude)) * Math.sin(toRad(sunDeclination)))) /
            (Math.cos(toRad(latitude)) * Math.cos(toRad(sunDeclination)));
        var local_solar_time = Math.acos(A) / toRad(15).toFixed(6);

        var sunrise = 12.0 - local_solar_time - time_correction / 60.0;
        var sunset = 12 + local_solar_time - time_correction / 60.0;

        return {
            sunrise,
            sunset,
        };
    }

    function calculateSunDeclination(b) {
        return 23.45 * Math.sin(toRad((360 / 365) * (b - 81)));
    }

    function toRad(b) {
        return (PI / 180) * b;
    }

    function dayOfYear() {
        var date = new Date();

        return Math.floor(
            (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
        );
    }

    // function hours2HHMM(b) {
    //     var c = Math.floor(b);
    //     b = Math.round(60 * (b - c));
    //     10 > c && (c = "0" + c);
    //     10 > b && (b = "0" + b);
    //     return c + ":" + b;
    // }

    function getSun() {
        var sun = JSON.parse(localStorage.getItem("sunriseSunset"));

        if (isUpdateReady("lastSunUpdate", new Date().getDay())) {
            sun = calculateSunriseSunset();

            localStorage.setItem("sunriseSunset", JSON.stringify(sun));
        }

        return sun;
    }

    function isDay() {
        var sun = getSun();
        var hourNow = new Date().getHours();

        if (
            hourNow > Math.round(sun.sunrise) &&
            hourNow < Math.round(sun.sunset)
        ) {
            return true;
        }

        return false;
    }

    return { isDay };
})();
