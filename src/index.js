const express = require("express");
const path = require("path");
const hand = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Set up handlebars as the view engine.
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  hand.engine({
    layoutsDir: "src/resources/views/layouts", // directory to handlebars files
    defaultLayout: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));

// log all requests to the console
app.use(morgan("combined"));

// routes
app.get("/", (req, res) => res.render("home"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
