const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    isRead:{
        type:Boolean,
        default:false
    },
    Fee: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        default: 'pending'
    },
    Timing: {
        type: Date,
        default: Date.now
    }
});

const historySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    UserName:{
        type:String,
        required:true
    },
    PhNumber:{
        type:String,
        required:true
    },
    Image: {
        type: String,
        required: true
    },
    Fee: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    }
}, { timestamps: true });

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    PhNumber: {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Patient"
    },
    Notification: [notificationSchema],
    History: [historySchema]
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;

