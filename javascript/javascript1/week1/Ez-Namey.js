const firstWords = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Stars', 'Sun'];
const secondWords = ['Dog', 'Puppy','Turtle', 'Rabbit', 'Parrot', 'Cat', 'Kitten', 'Goldfish', 'Mouse', 'Hamster'];
const firstRandomNumber = Math.floor(Math.random() * 10);
const secondRandomNumber = Math.floor(Math.random() * 10);
const startupName = firstWords[firstRandomNumber] + secondWords[secondRandomNumber];
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);