const mongoose = require("mongoose");
const autoIdSetter = require('./auto-id-setter');



const articleSchema = new mongoose.Schema({
    // articleId: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },
    title: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    seq:{
        type: Number,
    },
},
{timestamps: true}
);
autoIdSetter(articleSchema, mongoose, 'application', 'articleId');

module.exports = mongoose.model("articles", articleSchema);