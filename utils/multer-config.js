const multer = require("multer");
const userImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/users");
  },
  filename: function (req, file, cb) {
    let fileExtension = file.mimetype.split("/")[1];
    cb(null, Date.now() + "." + fileExtension);
  },
});

const imageFilter = (req, file, cb) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
    cb(null, true);
  } else {
    cb(new Error("The type of file is not an image!"));
  }
};

const UploadHandlerUserImage = multer({ storage: userImageStorage, fileFilter: imageFilter });
module.exports = { UploadHandlerUserImage };
