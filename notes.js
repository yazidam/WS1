const fs = require("fs");

const fetchData = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    return [];
  }
};

var logNote = (note) => {
  console.log(`title:${note.title}`);
  console.log(`body:${note.body}`);
};

const addNote = (title, body) => {
  var notes = fetchData();
  var note = { title, body };

  const existe = notes.filter((note) => note.title === title);

  console.log("ex", existe);
  if (existe.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNote(note);
  } else {
    console.log("note already existe");
  }
};

const getOneNote = (title) => {
  var notes = fetchData();
  const note = notes.filter((note) => note.title === title);
  logNote(note[0]);
};

const getAll = () => {
  var notes = fetchData();
  notes.forEach((note) => logNote(note));
};

const removeNote = (title) => {
  var notes = fetchData();
  const note = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(note));
};

module.exports = {
  getAll,
  addNote,
  getOneNote,
  removeNote,
};
