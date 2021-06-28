// LOAD DATA
// We are linking our routes to a series of "data" sources.

const fs = require('fs');
const noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {
  // API GET Request
  app.get('/api/notes', (req, res) => res.json(noteData));

  // API POST Request
  app.post('/api/notes', (req, res) => {
    const newNoteBtn = req.body;
    newNoteBtn.id =uuidv4();
    console.log('newNoteBtn Id', JSON.stringify(newNoteBtn.id));
    noteData.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
      res.json(noteData);
  });
};
