const fs = require('fs');

var originalNote = {
  title: 'a title',
  body: 'some body text'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);

console.log(typeof originalNote);
console.log(typeof originalNoteString);
console.log(typeof noteString);
console.log(typeof note);
