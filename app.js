console.log("Git initialise successfully");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

app.get("/", (res, res){
    console.log("Backend connected");  
})

app.post("/edit", (req, res){
    String name = req.params();
    res.semd("Edited successfully");
})

app.get("/edit", (req, res){
    res.redirect("/edit.js");
})
