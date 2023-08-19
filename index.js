setInterval(function(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();

    document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}`;
}, 500);