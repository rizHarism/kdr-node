const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./utils/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { UploadHandlerUserImage } = require("./utils/multer-config");
const fs = require("fs");
const port = process.env.PORT;
const appRouter = require("./src/routes/index");
const app = express();

app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:3000", "https://kartadayareksabumi.com", "https://kartadayareksabumi.vercel.app"],
    credentials: true,
    exposedHeaders: ["set-cookie"],
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
const uploadAvatar = UploadHandlerUserImage.single("image");
app.post("/user", (req, res) => {
  console.log(req.file);
  uploadAvatar(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.json({ message: err.message });
    } else if (err) {
      console.log(err);
      return res.send({ message: err.message });
    }
    res.send(req.body);
  });
  // console.log(req.body);
  // res.status(200);
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
