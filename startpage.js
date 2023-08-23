const { isDay } = sun;

// setRandomBackground();

function setRandomBackground() {
    var theme = isDay() ? "day" : "night";

    var body = document.getElementsByTagName("body")[0];
    var randomBackgroundName = Math.floor(Math.random() * 90) + 1;

    body.style.background = `url('./backgrounds/${theme}/${randomBackgroundName}.gif')`;
    body.style.backgroundSize = "cover";
}

// TODO:
// add css to popup when clicked
// show it in a list not a table
// add flicker on ones that have hierarchy

function handleArrsClick() {
    var arrsTable = document.getElementById("arrs-table");

    arrsTable.style.display = "block";
}
