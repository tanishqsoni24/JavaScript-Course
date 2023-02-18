function datetime(){
    let datetime = new Date();
    let hrs = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();
    let session = document.getElementById("session");

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    if(hrs>=12){
        session.innerHTML = "PM"
    }
    else{
        session.innerHTML = "AM"
    }

    if(hrs>12){
        hrs-=12;
    }
}
setInterval(datetime,1000);