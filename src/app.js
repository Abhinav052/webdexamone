const express = require("express");
const app = express();
const dotenv = require("dotenv")
const path = require("path");
const mongoose = require("mongoose");
const Article = require("./models/Article")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

dotenv.config({ path: 'config.env' });

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB CONNECTED!"))
    .catch((err) => console.log(err))

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/create", (req, res) => {
    res.render("create")
})


app.post("/new", (req, res) => {
    const data = req.body;
    console.log(data)
    res.redirect('back')
})
app.get("/new", (req, res) => {
    const data = req;
    console.log(data)
    res.redirect('back')
})
app.get("/create", async (req, res) => {
    res.redirect(200, "/creat")
    res.status(200).end()
})

app.get("/creat", async (req, res) => {
    res.render("create")
    res.status(200).end()
})
app.delete("/delete/:id", async (req, res) => {
    const q = req.query
    console.log(q)
})
app.post("/create", async (req, res) => {
    const data = req.body
    console.log(data);
}
)
app.listen(5000, () => {
    console.log("server running at port 5000")
})
