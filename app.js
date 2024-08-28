const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./utils/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { uploadHandler } = require("./utils/multer-config");
const fs = require("fs");
const port = process.env.PORT;
const appRouter = require("./src/routes/index");
const app = express();

const allowlist = ["https://localhost:3000", "https://kartadayareksabumi.com"];

app.use(
  cors({
    origin: allowlist,
    credentials: true,
  })
);
app.disable("x-powered-by"); //Reduce fingerprinting
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// built in middleware
app.use(express.static("public"));
// application level middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use(appRouter);

app.post("/user", uploadHandler.single("image"), (req, res) => {
  console.log(req.file, req.body);
  res.status(200);
  res.send(req.body);
});

// response 404
app.use((req, res) => {
  res.status(404).json({
    status: "not found",
    code: 404,
    // data: [],
    message: "Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
