const dogYearOfBirth = 2021;
const dogYearFuture = 2027;
let dogYear = (dogYearFuture-dogYearOfBirth)*7;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} 
else {
    console.log(`Your dog will be ${dogYear/7} human years old in ${dogYearFuture}`);
}
