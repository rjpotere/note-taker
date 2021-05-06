let apiNotes = require('../db/db.json');
const Notes = require("../db/notes");

module.exports = (app) => {
        //api routes
        app.get('/api/notes', (reg, res) => res.json(apiNotes));

        app.post('/api/notes', (req, res) => {
                const newNote = new Notes(req.body.title, req.body.text, (apiNotes.length+1)+ '')
                // req.body.id = apiNotes.length;
                apiNotes.push(newNote);
                res.json(true);
        })

        app.delete('/api/notes/:id', (req, res) => {
                console.log(apiNotes);
                const idToDelete = req.params.id;
                console.log(idToDelete);
                apiNotes = apiNotes.filter(task => {
                        if (task.id === idToDelete) {
                                return (false)
                        } else { return (true) }
                })
                res.json(true);

                console.log(apiNotes);

        })
}