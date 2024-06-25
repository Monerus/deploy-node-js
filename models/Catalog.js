import mongoose from "mongoose";

const CatalogSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: Array,
        default: [],
        required: true
    },
    size: {
        type: Array,
        default: [],
    },
    price: {
        type: Array,
        default: [],
        required: true
    },
    image: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

export default mongoose.model('Catalog', CatalogSchema)