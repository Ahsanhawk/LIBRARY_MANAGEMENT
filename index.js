const express = require("express");
const app = express();
const router= require("./routes/router")
const path= require("path")
// app.set('view engine', 'ejs');
// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/user', userroute)
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views")); //
app.set("view engine", "ejs");
app.use(router)

app.listen(2000);


