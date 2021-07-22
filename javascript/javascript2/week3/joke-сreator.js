function logFunnyJoke() {
    console.log("Funny Jokes");
}
function logBadJoke() {
    console.log("Bad Jokes")
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {

    if (shouldTellFunnyJoke) {
        logFunnyJoke()
    }

    else {
        logBadJoke()
    }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke)