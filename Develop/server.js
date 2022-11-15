let express = require('express');
let http = require ('http');
let fs = require ('fs');
let path = require ('path');
let app = express();
let PORT = 8080;

let server = http.createServer();