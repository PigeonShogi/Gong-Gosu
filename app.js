if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`app.js is running on http://localhost:${port}`);
});
