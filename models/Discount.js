import mongoose from 'mongoose'

const DiscountSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
}, 
{
    timestamps: true
})

export default mongoose.model('Discount', DiscountSchema)