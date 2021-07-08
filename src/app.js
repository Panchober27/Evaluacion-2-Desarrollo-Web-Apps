const express = require("express");
const morgan = require("morgan");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();

// Setts
app.set("port", port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Setts
app.use(morgan("dev"));

// Routes.
app.use(require("./routes"));

// Static Files.
app.use(express.static(path.join(__dirname, "public")));

// Starting the server.
app.listen(port, () => {
  console.log(`Prueba 2 started on port ${port}`);
});
