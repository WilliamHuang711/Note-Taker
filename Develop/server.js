const express = require('express');
let http = require ('http');
let fs = require ('fs');
const path = require ('path');
const app = express();
const PORT = 8080;

// let server = http.createServer();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Server is listening on: http://localhost: ${PORT}`));