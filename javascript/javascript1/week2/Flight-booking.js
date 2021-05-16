
function getFullname(firstName, surName, useFormalName, isMaleGander) {
    let fullName = firstName + ' ' + surName;
    if (useFormalName === true) {
        if (isMaleGander === true) {
            fullName = "Lord" + ' ' + fullName;
        }
        else {
            fullName = "Mrs" + ' ' + fullName;
        }
    }
    return fullName;
}

const fullName1 = getFullname('Olena', 'Kasiianenko', true, false); //call function
const fullName2 = getFullname('Mike', 'Smit', true, true);
const fullName3 = getFullname('Mike', 'Smit', false, true);
const fullName4= getFullname('', '',);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);



