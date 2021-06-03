let yourName = '';
let toDos = [];

function getReply(command) {
    console.log('---------------');
    console.log('The command is:');
    console.log(command);
    console.log('The reply is:')

    let regExpResult = new RegExp('(?<=Hello my name is )(.*)').exec(command);
    if (regExpResult?.length) {
        yourName = regExpResult[0];
        return `nice to meet you ${yourName}`;
    }

    regExpResult = new RegExp('What is my name').exec(command);
    if (regExpResult?.length) {
        return yourName;
    }

    regExpResult = new RegExp('(?<=Add )(.*)(?= to my todo)').exec(command);
    if (regExpResult?.length) {
        let toDoItem = regExpResult[0]
        toDos.push(toDoItem);
        return `${toDoItem} added to your todo`
    }

    regExpResult = new RegExp('(?<=Remove )(.*)(?= from my todo)').exec(command);
    if (regExpResult?.length) {
        let toDoItem = regExpResult[0]
        toDos = toDos.filter(e => e !== toDoItem);
        return ` Removed ${toDoItem} from your todo`
    }

    regExpResult = new RegExp('What is on my todo?').exec(command);
    if (regExpResult?.length) {
        let reply = `You have ${toDos.length} todos: `;
        toDos.forEach(e => reply += (e + ', '));
        return reply;
    }

    regExpResult = new RegExp('What day is it today?').exec(command);
    if (regExpResult?.length) {
        var today = new Date().toUTCString();
        return today;
    }

    regExpResult = new RegExp('(?<=What is )(\\d+ ).( \\d+)').exec(command);
    if (regExpResult?.length) {
        return doMathOperation(regExpResult[0]);
    }

}

function doMathOperation(mathExpression) {
    const arr = mathExpression.split(" ");
    const num1 = parseInt(arr[0]);
    const num2 = parseInt(arr[2]);
    const operator = arr[1];

    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "*") {
        return num1 * num2;
    }
    if (operator === "/") {
        return num1 / num2;
    }
    if (operator === "%") {
        return num1 % num2;
    }
}

console.log(getReply('Hello my name is Benjamin')); // 'Nice to meet you benjamin'
console.log(getReply('What is my name?')); // 'Your name is Benjamin'
console.log(getReply('Add fishing to my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 3 + 5"));
console.log(getReply("What is 8 - 7"));
console.log(getReply("What is 12 * 2"));