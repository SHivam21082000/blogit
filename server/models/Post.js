const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
        unique : true
    },
    desc:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    categories:{
        type: Array,
        required: false
    },
}
,{ timestamps:true} )

module.exports = mongoose.model("Post", PostSchema)