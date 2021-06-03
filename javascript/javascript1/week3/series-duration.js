console.log('==========SeriesDurations==========');
const seriesDurations = [
    {
        title: "Friends",
        days: 4,
        hours: 20,
        minutes: 20,
    },
    {
        title: "Lost",
        days: 3,
        hours: 18,
        minutes: 0,
    },
    {
        title: "The Big bang theory",
        days: 4,
        hours: 6,
        minutes: 18,
    }
];
let lifeTimeInYears = 80;

logOutSeriesText(seriesDurations, lifeTimeInYears);

function logOutSeriesText(films, lifeTimeYers) {
    let totalTimeMinutes = 0;
    let lifeTimeMinutes = lifeTimeYers * 365 * 24 * 60;

    for (const film of films) {
        const filmTimeMinutes = film.days * 24 * 60 + film.hours * 60 + film.minutes;
        const filmPercentage = (filmTimeMinutes / lifeTimeMinutes) * 100;
        console.log(`${film.title} took ${filmPercentage.toFixed(3)}% of my life`);

        totalTimeMinutes += filmTimeMinutes;
    }

    let totalPercentage = (totalTimeMinutes / lifeTimeMinutes) * 100;
    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life.`);
}
