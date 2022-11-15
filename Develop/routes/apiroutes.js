
const fs = require('fs');
let { v4: uuidv4 } = require("uuid");

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        fs.readFile("./db/db.json","utf-8", (error, data) =>{
            if (error) {
                throw error
            }
            res.json(JSON.parse(data))
        });
      });

    app.post("/api/notes", (req, res) => {
        let noteId = uuidv4();

        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: noteId
        }

        fs.readFile("./db/db.json", "utf-8", (error, noteData) => {
            console.log("Test");
            if (error) {
              return console.log(`this is a line 14 ${error}`);
            }
            
            let testRead = JSON.parse(noteData);
            testRead.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(testRead, null, 2), err => {
              if (err) throw err;
              res.send(testRead);
              console.log('Successfully wrote file')
            })
          });


          fs.readFile("./db/db.json", "utf-8", (error, noteData) => {
            console.log("Test");
            if (error) {
              return console.log(`this is a line 14 ${error}`);
            }
            
            let testRead = JSON.parse(noteData);
            testRead.push(newNote);
            fs.writeFile("./db/db.json", JSON.stringify(testRead, null, 2), err => {
              if (err) throw err;
              res.send(testRead);
              console.log('Successfully wrote file')
            })
          });



        // res.send(JSON.stringify(req.body));

        // data.push(req.body);
        // renderHtml();
    });

    // app.post("/api/notes", function(req, res) {
    //     todoData.push(req.body);
    //     res.json(true);});

    app.delete("/api/notes/:id", (req, res) => {
        res.send("Delete request at notes")
    });

//     app.post("/api/clear", function(req, res) {
//         todoData.length = 0;
//         res.json({ ok: true });
// });
};

// function renderHtml() {
//     fs.writeFileSync("./public/assets/notes.html", render(data), "utf-8")
// }