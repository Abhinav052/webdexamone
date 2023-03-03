
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 25
    },

    date: {
        type: Number,
    },
    text: {
        type: String
    },
    id: {
        type: Number,
        required: true,
    }
})


const Article = mongoose.model("Article", articleSchema)


module.exports = Article;