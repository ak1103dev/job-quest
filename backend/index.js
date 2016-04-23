let express = require('express');
let app = express();
let port = process.env.PORT || 8080;

let mongoose = require('mongoose');
let configDB = require('./config/database.js');
mongoose.connect(configDB.url);

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./app/routes.js')(app);

app.listen(port);
console.log('Server running on port: ' + port);