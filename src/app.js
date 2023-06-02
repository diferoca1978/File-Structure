const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("server running in the 3000 port");
});

app.use("/", mainRouter);
