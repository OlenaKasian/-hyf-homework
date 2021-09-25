myArray = ['a', 'b', 'c'];

const a = function () {
    return 5;
};
function b() {
    return 7;
}

console.log(a());
console.log(b());

a();
b();


let myObject = {
    key: function () {
        console.log(`My name is Olena`);
    }
};

myObject.key();