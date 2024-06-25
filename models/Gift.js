import mongoose from "mongoose";

const GiftSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

export default mongoose.model('Gift', GiftSchema)