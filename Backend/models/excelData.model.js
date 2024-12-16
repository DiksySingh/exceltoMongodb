const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const excelDataSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    }
});

const ExcelData = mongoose.model("ExcelData", excelDataSchema);
module.exports = ExcelData;