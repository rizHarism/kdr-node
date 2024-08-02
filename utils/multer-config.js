const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img/')
    },
    filename: function (req, file, cb) {
        let fileExtension = file.mimetype.split('/')[1]
        cb(null, Date.now() + '.' + fileExtension)
    }
})

const filter = (req, file, cb) => {
    if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/jpg"
    ) { cb(null, true) }
    else { cb(null, false) }
}

exports.uploadHandler = multer({ storage: storage, filter: filter })