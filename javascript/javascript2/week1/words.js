const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(words) {
    let shortestWord = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestWord) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}
console.log(`${shortestWord(danishWords)}`);

//Danish letters

function findDanishLetters(danishString) {
    let yourString = danishString.split('');
    let count_å = 0;
    let count_æ = 0;
    let count_ø = 0;
    yourString.forEach(element => {
        if (element.includes('å')) {
            count_å++;
        }
        if (element.includes('æ')) {
            count_æ++;
        }
        else if (element.includes('ø')) {
            count_ø++;
        }
    })

    let total = count_å + count_æ + count_ø;
    let finalMessage = `{total: ${total}`;
    finalMessage = count_å ? finalMessage += `, å: ${count_å}` : finalMessage;
    finalMessage = count_ø ? finalMessage += `, ø: ${count_ø}` : finalMessage;
    finalMessage = count_æ ? finalMessage += `, æ: ${count_æ}` : finalMessage;
    finalMessage += '}';

    console.log(finalMessage);
}

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString);
findDanishLetters(danishString2);