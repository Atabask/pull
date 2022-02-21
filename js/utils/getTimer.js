import {sound} from "../utils/music.js"

window.startTimer = function() {
    let timer = document.getElementById("timer");   
    

    if (timer.value == 0) {
        return sound.play() & stopTimer(); 
    } else {
        document.getElementById("timer").innerHTML = timer.value --;
        setTimeout(startTimer,1000);
    }
}

window.stopTimer = function() {
    clearTimeout(timer.value);
    timer.value = 0;
}


