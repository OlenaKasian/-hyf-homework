const btn = document.querySelector("#start");
const input = document.querySelector("input");
let sCount = 0;
let lCount = 0;
let confetti = null;

let timer = input.value;

document.onclick = function s() {
    sCount++;
    document.getElementById("Sresult").innerHTML += sCount;
}
document.onclick = function l() {
    lCount++;
    document.getElementById("Lresult").innerHTML += lCount;
}

function whoWin() {
    if (sCount > lCount) {
        alert('The S player is win! Congratulations!!!')

        confettiSettings = { target: "Scanvas", size: 2 };
        confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
    else if (sCount < lCount) {
        alert('The L player is win! Congratulations!!!')

        confettiSettings = { target: "Lcanvas", size: 2 };
        confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
    else {
        alert('Draw')
    }
}

const restart = document.querySelector("restart");
restart.addEventListener("click", function () {
    document.querySelector("input-time").value = "";
    document.querySelector("sCount").innerHTML = 0;
    document.querySelector("lCount").innerHTML = 0;
    countL = 0;
    countS = 0;
    if (confetti !== null) {
        confetti.clear();
    }
});

