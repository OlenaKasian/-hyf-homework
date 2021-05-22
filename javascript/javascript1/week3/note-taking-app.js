console.log('==========Note==========');
const notes = [];

function saveNote(content, id) {
    let notesObject = { content: content, id: id }
    notes.push(notesObject);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
    return `Choose available number`;
}

console.log(notes);
console.log(getNote(1));
console.log(getNote(2));
console.log(getNote(7));

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i]);
    }
}
logOutNotesFormatted();



