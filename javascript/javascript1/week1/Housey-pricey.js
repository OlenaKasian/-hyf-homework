//For Peter
const Pwide = 8;
const Pdeep = 10;
const Phigh = 10;
let PvolumeInMeters;
PvolumeInMeters = Pwide * Pdeep * Phigh;
const PgardenSizeInM2 = 100;
const PhouseCosts = 2500000;
let PhousePrice;
PhousePrice = PvolumeInMeters * 2.5 * 1000 + PgardenSizeInM2 * 300;
if (PhouseCosts => PhousePrice) {
    console.log(`Peter\`s price ${PhousePrice} is too much`)
}
else {
    console.log(`Peter\`s ${PhousePrice} price is too little`)
}

//For Julia
const Jwide = 5;
const Jdeep = 11;
const Jhigh = 8;
let JvolumeInMeters = Jwide * Jdeep * Jhigh;
const JgardenSizeInM2 = 70;
const JhouseCosts = 1000000;
let JhousePrice;
JhousePrice = JvolumeInMeters * 2.5 * 1000 + JgardenSizeInM2 * 300;
if (JhouseCosts => JhousePrice) {
    console.log(`Julia\`s price ${JhousePrice} is too much`)
}
else {
    console.log(`Julia\`s price ${JhousePrice} is too little`);
}
