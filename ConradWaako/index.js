const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();
const app = express();
//Gives you enough flexibility to switch from development, directly to a production environment.
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
//Set the path for the views(first parameter) to be in the views folder(second views), all pug files are in views folder
app.set("views", path.join(__dirname, "views"));

//Defining directory from which to serve our static files. Connects to public folder.
app.use(express.static("public"))
    //Middleware settings must be placed before CRUD handlers.
    //"urlencoded" tells body-parser to extract data from form element and add to body property in request object.
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/appRoutes");

//Connect mongoose using link copied from mongodb.
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});


// We want to test if the mongoose connection is open.
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

//import routes.
app.use('/', routes);

// Server config.
app.listen(port, () => {
    console.log("App listening on port " + port)
});