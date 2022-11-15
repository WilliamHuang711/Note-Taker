let todoData =  require("../data/todoData")

const fs = require('fs');

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        fs.readFile("db/db.json","utf-8", (error, data) =>{
            if (error) {
                return console.log(error);
            }
            console.log(data);
            res.json(JSON.parse(data))
        });
        // res.json(todoData);
      });

    app.post("/api/notes", (req, res) => {
        console.log(req.body);

        let notTask = {
            title: req.title,
            text: req.text,
            id: req.id
        }

        res.send(JSON.stringify(req.body));

        data.push(req.body);
        renderHtml();
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

function renderHtml() {
    fs.writeFileSync("./public/assets/notes.html", render(data), "utf-8")
}