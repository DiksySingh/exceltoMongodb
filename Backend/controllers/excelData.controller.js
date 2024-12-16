const ExcelData = require("../models/excelData.model");
const processExcelFile = require("../utils/excelProcessor");

const uploadExcelData = async(req, res) => {
    try{
        if(!req.file){
            return res.status(400).json({
                success: false, 
                message: "No File Uploaded"
            });
        }

        const {success, sheetData, error} = processExcelFile(req.file.path);
        if(!success){
            return res.status(400).json({
                success: false,
                message: "Failed to process file",
                error
            });
        }

        const result = await ExcelData.insertMany(sheetData);
        return res.status(200).json({
            success: false,
            message: "File processed & data insterted successfully",
            data: result
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
};

module.exports = {uploadExcelData};