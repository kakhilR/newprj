const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentName:{ type: String,required: true, trim: true},
    studentAge :{ type: Number,required: true, trim: true},
    studentId:{ type: String, required: true, unique: true}
},
{timestamps: true}
)

module.exports = mongoose.model('Student',StudentSchema)
