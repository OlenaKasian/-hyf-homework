function choosenCloses(temperature) {
    let clothesToWear;
    if (temperature < -10) {
        clothesToWear = 'Your clothes must be very, very warm';
      } else if (temperature <= 0) {
        clothesToWear = 'Your clothes should be very warm';
      } else if (temperature <= 7) {
        clothesToWear = 'Your clothes should be warm coat, hat, hoody';
      } else if (temperature <= 15) {
        clothesToWear = 'Your clothes should be windbreaker, sweater';
      } else { // It's hotter than 15 degrees
        clothesToWear = 'Your clothes should be shorts and t-shirts';
      }
    return clothesToWear;
}
const clothesToWear1 = choosenCloses(5);
const clothesToWear2 = choosenCloses(25);
console.log(clothesToWear1);
console.log(clothesToWear2);