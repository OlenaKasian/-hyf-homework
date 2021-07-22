function runAfterDelay (delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000);
}

runAfterDelay(2, () => {
console.log('Should be logged after 2 seconds');
});
runAfterDelay(4, () => {
    console.log('Should be logged after 4 seconds');
});
runAfterDelay(6, () => {
    console.log('Should be logged after 6 seconds');
});
