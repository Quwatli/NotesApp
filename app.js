// Notes manipulation and display features, reusability supported
// A. Z. Quwatli

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Content of note',
  demand: true,
  alias: 'b'
};

const argv = yargs.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'Listing avaialbe notes')
.command('read', 'Return the specified note by title', {
  title: titleOptions
})
.command('remove', 'Remove specified note by title', {
  title: titleOptions
})
.help().argv;
var command = argv._[0];

// console.log('Command: ', command);
// console.log('Yargs', argv);

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
