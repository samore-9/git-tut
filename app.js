console.log("Git initialise successfully");


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
