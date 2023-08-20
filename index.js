setInterval(function(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();

    document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}`;
}, 500);


const darkRadioButton = document.getElementById("greenRadioButton");
const lightRadioButton = document.getElementById("blueRadioButton");

const div = document.getElementById("divclock");
const clock = document.getElementById("timetext");

darkRadioButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#1B1C18";
    div.style.backgroundColor = "#22261D";
    clock.style.color = "#E4E3DD";
});

lightRadioButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#1A1C1E";
    div.style.backgroundColor = "#212529";
    clock.style.color = "#E4E3DD";
});