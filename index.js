setInterval(function(){
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();

    document.getElementById("timetext").innerHTML = `${hour}:${String(minutes).padStart(2, '0')}`;
}, 500);