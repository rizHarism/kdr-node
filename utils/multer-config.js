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

const imageFilter = (req, file, next) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
    next(null, true);
    req.file = file;
  } else {
    next(null, false);
    req.file = null;
  }
};

const UploadHandlerUserImage = multer({ storage: userImageStorage, fileFilter: imageFilter });
module.exports = { UploadHandlerUserImage };
