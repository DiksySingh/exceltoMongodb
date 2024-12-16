require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
require("../Backend/database/mongoConn.js");

const excelUploadRoute = require("./routes/excelUpload.route.js");

const PORT = process.env.PORT;
app.use(cors({
    origin: true,
    redentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.send("Working Fine");
});

app.use("/user", excelUploadRoute);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
