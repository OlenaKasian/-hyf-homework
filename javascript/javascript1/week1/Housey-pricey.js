//For Peter
const peterwide = 8;
const peterdeep = 10;
const peterhigh = 10;
const PvolumeInMeters = peterwide * peterdeep * peterhigh;
const petergardenSizeInM2 = 100;
const peterhouseCosts = 2500000;
let peterhousePrice;
peterhousePrice = petervolumeInMeters * 2.5 * 1000 + petergardenSizeInM2 * 300;
if (peterhouseCosts >= peterhousePrice) {
    console.log(`Peter\`s price ${peterhousePrice} is too much`)
}
else {
    console.log(`Peter\`s ${peterhousePrice} price is too little`)
}

//For Julia
const juliawide = 5;
const juliadeep = 11;
const juliahigh = 8;
let juliavolumeInMeters = juliawide * juliadeep * juliahigh;
const juliagardenSizeInM2 = 70;
const juliahouseCosts = 1000000;
let juliahousePrice = juliavolumeInMeters * 2.5 * 1000 + juliagardenSizeInM2 * 300;
if (juliahouseCosts >= juliahousePrice) {
    console.log(`Julia\`s price ${juliahousePrice} is too much`)
}
else {
    console.log(`Julia\`s price ${juliahousePrice} is too little`);
}
