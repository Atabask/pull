import "./pages/dateCalc.js";
import "./utils/getTimer.js";

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if(!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});
