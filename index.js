setInterval(function(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();

    document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}`;
}, 500);


const greenRadioButton = document.getElementById("greenRadioButton");
const blueRadioButton = document.getElementById("blueRadioButton");
const redRadioButton = document.getElementById("redRadioButton");
const yellowRadioButton = document.getElementById("yellowRadioButton");

const div = document.getElementById("divclock");
const clock = document.getElementById("timetext");

greenRadioButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#1B1C18";
    div.style.backgroundColor = "#22261D";
    clock.style.color = "#E4E3DD";
});

blueRadioButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#1A1C1E";
    div.style.backgroundColor = "#212529";
    clock.style.color = "#E4E3DD";
});

redRadioButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#201A19";
    div.style.backgroundColor = "#2A2220";
    clock.style.color = "#E4E3DD";
});

yellowRadioButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#1C1C19";
    div.style.backgroundColor = "#25251F";
    clock.style.color = "#E4E3DD";
});