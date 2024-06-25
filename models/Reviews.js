import mongoose from 'mongoose'

const ReviewsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, 
{
    timestamps: true
})

export default mongoose.model('Reviews', ReviewsSchema)