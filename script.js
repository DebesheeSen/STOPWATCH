var msec=0, sec=0,min=0,hr=0;
var timer;

const display = document.querySelector('.timer-display');
const laps = document.querySelector('.laps');

function start(){
    if(!timer){
        timer = setInterval(run,10);
    }
}

function run(){
    display.innerHTML = getTimer();
    msec++;
    if(msec == 100){
        msec=0;
        sec++;
    }

    if(sec == 60){
        sec =0;
        min ++;
    }

    if(min== 60){
        min=0;
        hr ++;
    }
}

function getTimer(){
    return(hr<10? "0" + hr : hr) + " : " + (min<10 ? "0" + min : min) + " : " + (sec<10? "0" + sec : sec) + " : " + (msec<10 ? "0" + msec : msec)
}

function pause(){
    stopTimer();
}

function stopTimer(){
    clearInterval(timer);
    timer=false;
}

function reset(){
    stopTimer();
    msec=0;
    sec=0;
    min=0;
    hr=0;
    display.innerHTML=getTimer();
}

function restart(){
    if(timer){
        reset();
        start();
    }
}

function lap(){
    if(timer){
        var li = document.createElement("li");
        li.innerHTML = getTimer();
        laps.appendChild(li);
    }
}

function resetLaps(){
    laps.innerHTML ="";
}