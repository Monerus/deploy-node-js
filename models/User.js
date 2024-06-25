import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    passwordHash: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
    },
    city: {
        type: String,
    },
    number: {
        type: String,
    }
}, 
{
    timestamps: true
})

export default mongoose.model('User', UserSchema)