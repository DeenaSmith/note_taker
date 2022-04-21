
//Requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");


// Server
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



// Routes/Requests
app.get("api/notes", function(req, res) {
    readFileAsync("./develop/db/db.json", "utf8").then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});



app.post("/api/notes", function(req, res) {
    const note = req.body;
    readFileAsync("./develop/db/db.json", "utf8").then(function(data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.lenth + 1;
        notes.push(note);
    }).then(function(notes) {
        writeFileAsynch("./develop/db/db.json", JSON.stringify(notes));
        res.json(note);
    })

});



// Routes that push to HTML pages
app.get("/notes", function(req, res) {
    
})



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
