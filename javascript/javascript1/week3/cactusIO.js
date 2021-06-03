console.log(`======cactusIO=====`);
const durationLimit = 120;
const activities = [];

function addActivity(date, activity, duration) {
    const newActivites = { date: date, activity: activity, duration: duration };
    activities.push(newActivites)
}

function showStatus() {
    const numbersOfActiveties = activities.length;
    if (numbersOfActiveties === 0) {
        return console.log("Add some activities before calling showStatus");
    }
    let totalDuration = 0;
    activities.forEach(activity => totalDuration += activity.duration);
    console.log(`You have added ${numbersOfActiveties} activities. They amount to ${totalDuration} min. of usage`);

    if (totalDuration > durationLimit) {
        console.log(`You have reached ${durationLimit} minits limit, no more smartphoning for you!`);
    }
}


showStatus();
addActivity("23/5-21", "Youtube", 30);

showStatus();
addActivity("23/5-21", "Facebook", 50);

showStatus();
addActivity("23/5-21", "twitter", 20);

showStatus();
addActivity("23/5-21", "news", 30);

showStatus(); // expected not to have allowed more activities 




