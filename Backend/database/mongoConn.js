const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed", error);
    });

async function main(){
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};