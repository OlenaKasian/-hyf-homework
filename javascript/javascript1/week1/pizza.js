console.log("I love pizza");
const favPizza = "Margarita";
const pizzaPrice = 100;
console.log(`New Pizza Order: ${favPizza}`);
console.log(`The Price of the Pizza is: ${pizzaPrice}`);

// 2part of exersice

const numPizza = 3;
let sizeFamily;
let totalPrice;
totalPrice = pizzaPrice * numPizza;

if (sizeFamily === true) {
    sizeFamily = "family size";
    totalPrice *= 2;
    console.log(`New pizza order: ${numPizza} ${sizeFamily} ${favPizza}. Total cost for the order is: ${totalPrice}`);
}

else {
    sizeFamily = "usual size";
    console.log(`New pizza order: ${numPizza} ${sizeFamily} ${favPizza}. Total cost for the order is: ${totalPrice}`);
}

