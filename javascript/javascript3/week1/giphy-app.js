const inputWord = document.querySelector('.input-name');
const inputNumber = document.querySelector('.input-number');
const button = document.querySelector('.main-button')
button.addEventListener('click', reseachImageByName)

const gifysConainer = document.querySelector('.gifs-container');

function reseachImageByName() {
    gifysConainer.innerHTML = '';
    const url = `http://api.giphy.com/v1/gifs/search?q=${inputWord.value}&api_key=OHUb360dRDbAHrYKdTe1yz6HSYtkQsxG&limit=${inputNumber.value}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.data.forEach(element => {
                let image = document.createElement('img');
                image.setAttribute("src", element.images.fixed_height_small.url);
                gifysConainer.appendChild(image);
            });
        })
}
