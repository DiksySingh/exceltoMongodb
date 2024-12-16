const multer = require("multer");
const fs = require("fs");
const path = require('path')

//Ensuring the uploads folder exists
const ulpoadsDir = path.join(__dirname, "../uploads");

if(!fs.existsSync(ulpoadsDir)){
    fs.mkdirSync(ulpoadsDir, {recursive: true}); //Creates the uploads folder is not exists
}

//Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, ulpoadsDir); //Use to ensured uploads folder
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname); // Extract the file extension
        cb(null, Date.now() + extension); //Generate unique filenames
    },
});

const upload = multer({storage});
module.exports = upload;