const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    }
});

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    },
    Image: {
        type: String,
        required: true
    },
    isRead:
    {
        type:Boolean,
        default:false    
    },
    UserName: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });

const doctorSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
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
    Experience: {
        type: String,
        required: true
    },
    Specs: {
        type: String,
        required: true
    },
    PhNumber: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Fee: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Doctor"
    },
    Patients: [patientSchema],
    Notification: [notificationSchema]
}, {
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
