let todoData =  require("../data/todoData")

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(todoData);
      });

    app.post("/api/notes", function(req, res) {
        todoData.push(req.body);
        res.json(true);});

    app.post("/api/clear", function(req, res) {
        todoData.length = 0;
        res.json({ ok: true });
});
}