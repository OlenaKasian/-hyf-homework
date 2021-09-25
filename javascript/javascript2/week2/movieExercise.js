//Create an array of movies containing the movies with a short title 
const shortTitleMovies = movies.filter (movie => movie.title.length < 5);

//Create an array of movie titles with long movie titles
const longTitleMovies = movies.filter(movie => movie.title.length > 15);

//Count the number of movies made between 1980-1989 (including both the years)

const moviesCount = movies.filter (movie => (movie.year >= 1980 && movie.year <= 1989)).length
console.log(moviesCount);

//Create a new array that has an extra key called tag. 
//The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const moviesTag = movies
moviesTag.forEach(movie => {
  if(movie.rating >= 7) {
    movie.tag = "Good"
  } else if(movie.rating >= 4) {
    movie.tag = "Average"
  } else {
    movie.tag = "Bad"
  }
  return movie;
});
console.log(moviesTag);

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
//Now map the movies array to only the rating of the movies.

const highRating = movies.filter (movie => movie.rating > 6).map(movie => movie.rating);
console.log(highRating);

//Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 
//1 with Alien and 2 with Benjamin, you would return 6.
// Can you make sure the search is case insensitive?

const amountOfKeywords = movies.filter (movie => (movie.title.includes("Surfer") || movie.title.includes("Alien") || movie.title.includes("Benjamin"))).length;
 console.log(amountOfKeywords);

//Create an array of movies where a word in the title is duplicated. 

const duplicatedWords = movies.filter(movie => {
  let titleWordsSplit = movie.title.toLowerCase().split(" ");
  const duplicatedWordseResults = titleWordsSplit.some(word =>
     titleWordsSplit.indexOf(word) != titleWordsSplit.lastIndexOf(word));
  return duplicatedWordseResults;
});
console.log(duplicatedWords.length);

//Calculate the average rating of all the movies using reduce. 
const averageRating = (movies.map(movie => movie.rating).reduce((sum,currentRating) => sum + currentRating)/ movies.length).toFixed(3);
console.log(`The average ratings of the movies is : ${averageRating}`);

//Count the total number of Good, Average and Bad movies 
const goodMovies = movies.filter(movie => movie.rating >= 7);
const goodMoviesCount = goodMovies.length;
const averageMovies = movies.filter(movie =>  movie.rating >= 4 && movie.rating < 7);
const averageMoviesCount = averageMovies.length;
const badMovies = movies.filter(movie => movie.rating <4);
const badMoviesCount = badMovies.length;
console.log(`{goodMovies: ${goodMoviesCount}, averageMovies: ${averageMoviesCount}, badMovies: ${badMoviesCount}}`);