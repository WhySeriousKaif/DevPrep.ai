import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
    ,
    profileImage: {
        type: String,
        default: ""

    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    solvedProblems: [{
        type: String, // Problem ID
    }],
    revisionProblems: [{
        type: String, // Problem ID marked for later revision
    }]


}, { timestamps: true })

const User = mongoose.model('User', userSchema);
export default User;