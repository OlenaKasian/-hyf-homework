function getEventWeekday(eventDaysNumber) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = new Date();
    let eventDay = (today.getDay() + eventDaysNumber) % 7;
    return weekdays[eventDay];
}

console.log(getEventWeekday(1));
console.log(getEventWeekday(11));
console.log(getEventWeekday(512));