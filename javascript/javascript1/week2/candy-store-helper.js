console.log('=============================')
let amountToSpend = Math.random() * 100;
console.log(`Available money is ${amountToSpend}`)

let boughtCandyPrices = [];

function addCandy(candyType, weight) {

    let currentCandyTypePrice = 0;
    switch (candyType) {
        case 'Sweet':
            currentCandyTypePrice = 0.5;
            break;
        case 'Chocolate':
            currentCandyTypePrice = 0.7;
            break;
        case 'Toffee':
            currentCandyTypePrice = 1.1;
            break
        case 'Chewing-gum':
            currentCandyTypePrice = 0.03;
            break
        default:
            console.log('No such Candy in the store');
            return;
    }

    let price = currentCandyTypePrice * weight;
    boughtCandyPrices.push(price)

    console.log(`The ${weight} grams of candy ${candyType} is added. The price is ${price}`)
}

function canBuyMoreCandy() {
    let totalPrice = boughtCandyPrices.reduce((a, b) => a + b, 0)
    let canByMore = amountToSpend > totalPrice;
    if (canByMore) {
        console.log('You can buy more, so please do!');
    } else {
        console.log('Enough candy for you!')
    }
    return canByMore;
}

// example of usage
while (canBuyMoreCandy()) {
    addCandy('Chocolate', 20);
}






