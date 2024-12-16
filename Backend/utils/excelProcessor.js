const XLSX = require("xlsx");

const processExcelFile = (filepath) => {
    try{
        const workbook = XLSX.readFile(filepath);
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        return {
            success: true,
            sheetData
        }
    }catch(error){
        return {
            success: false,
            error: error.message
        }
    }
};

module.exports = processExcelFile;