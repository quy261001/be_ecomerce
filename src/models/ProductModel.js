const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        images:  [{ type: String, required: true }],
        type: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        rating: { type: Number, required: true },
        reviews: { type:Number },
        colors: [{ type: String }],
        sizes: [{type: String}],
        description: { type: String },
        discount: { type: Number },
        selled: { type: Number }
    },
    {
        timestamps: true,
    }
);
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
