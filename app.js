const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { uploadHandler } = require("./utils/multer-config");
const fs = require("fs");
const port = process.env.PORT;
const appRouter = require("./src/routes/router");

// built in middleware
app.use(express.static("public"));
// application level middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("KDR /api");
});

app.use(appRouter);

app.post("/user", uploadHandler.single("image"), (req, res) => {
  console.log(req.file, req.body);
  res.status(200);
  res.send(req.body);
});

// response 404
app.use((req, res) => {
  res.status(404);
  res.send("404 not found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
