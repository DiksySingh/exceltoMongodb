const {uploadExcelData} = require("../controllers/excelData.controller");
const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerConfig");

router.post("/excel-upload", upload.single('excelFile'), uploadExcelData);

module.exports = router;