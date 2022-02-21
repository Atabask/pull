import "./pages/dateCalc.js";
import "./utils/getTimer.js";


// import music from "../audio/audio.mp3"

import "../css/main.css"

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if(!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});


// console.log(music) 
