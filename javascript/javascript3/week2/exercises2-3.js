function resolveFunction(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
}
resolveFunction(8).then(() => {
  console.log("I am called asynchronously");
})

//async/await

async function asyncResolveFunction(resolveAfter) {
  const result = await resolveFunction(8);
  console.log("I am called asynchronously after 8sec");
}
asyncResolveFunction();

/////
//Rewrite setTimeout

function mySetTimeOut() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}
mySetTimeOut(3).then(() => {
  console.log("Called after 3 seconds")
})

//Rewrite getCurrentPosition

function myGetCurrentLocation(position, error) {
  return new Promise((resolve, reject) => {
    resolve(navigator.geolocation.getCurrentPosition(position));
    reject(Error("Error"))
  })
};

myGetCurrentLocation()
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });

//Fetching and waiting

function randomJoke() {
  setTimeout(() => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then(res => res.json())
      .then(data => {
        console.log(`Joke have been made with using promises:`, data)
      })
  }, 3000)
}
randomJoke();

//async/await way

async function asyncRandomJoke() {
  try {
    const fetchData = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    const dataToJson = await fetchData.json();
    console.log(`Joke have been made with using async:`, dataToJson)
  }
  catch (error) {
    console.log('Joke is not founded')
  }
}

setTimeout(asyncRandomJoke, 3000)

