let clk_ch = document.getElementById('count-click');

function singleClick() {
    console.log("single click");
}

function doubleClick() {
    console.log("double click!");
}

let clickCount = 0;

clk_ch.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            singleClick();
        }, 500);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
});

