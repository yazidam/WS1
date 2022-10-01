const yargs = require("yargs");
const { getAll, addNote, getOneNote, removeNote } = require("./notes");

const title = yargs.argv.title;
const body = yargs.argv.body;
const command = yargs.argv._[0];

if (command === "get") {
  getAll();
} else if (command === "add") {
  addNote(title, body);
} else if (command === "getone") {
  getOneNote(title);
} else if (command === "remove") {
  removeNote(title);
}
