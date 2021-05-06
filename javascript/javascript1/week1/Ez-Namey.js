const firstWords = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Stars', 'Sun'];
const secondWords = ['Dog', 'Puppy','Turtle', 'Rabbit', 'Parrot', 'Cat', 'Kitten', 'Goldfish', 'Mouse', 'Hamster'];
const FirstRandomNumber = Math.floor(Math.random() * 10) + 0;
const SecondRandomNumber = Math.floor(Math.random() * 10) + 0;
let startupName;
startupName = firstWords[FirstRandomNumber] + secondWords[SecondRandomNumber];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);