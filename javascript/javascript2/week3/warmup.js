//1
console.log('Called after 2.5 seconds');

function calledAfter() {
    setTimeout(() => {
        console.log('Called after 2.5 seconds')
    }, 2500);
}
calledAfter();

//2
console.log('delay and stringToLog');

function myFunc(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}
myFunc(5, 'This string logged after 5 seconds');
myFunc(3, 'This string logged after 3 seconds');

//3
console.log('click button');
const delayButton = document.getElementById('click-button');

delayButton.addEventListener('click', () => {
    myFunc(2, 'This string logged after 2 seconds');
});

//4

function earthLogger() {
    console.log('Earth');
}
function saturnLogger() {
    console.log('Saturn');
}

function planetLogFunction(callback) {
    callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);