console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if (note) {

    console.log('Note created');

    notes.printNote(note);

  } else {

    console.log('Note title taken');
  }
} else if (command === 'list') {
  console.log(notes.getAll());

} else if (command === 'read') {

  var n = notes.getNote(argv.title);
  if (n) {
    console.log(n);

  } else {
    console.log("Note not found");
  }

} else if (command === 'remove') {

  var removed = notes.removeNote(argv.title);
  var msg = removed? "Note was removed" : "Specified note was not found";
  console.log(msg);

} else {
  console.log('Command not recognized');
}
