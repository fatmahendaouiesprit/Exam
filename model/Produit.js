const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProduitSchema = new Schema (
    {
        Libelle: { type: String, required: true },
        Prix: { type: Number, required: true },
        Description: { type: String, required: true },
        Quantite: { type: Number, required: true },
        InStock: { type: Boolean, required: false },
    }, { timestamps: true });
module.exports = mongoose.model('Produit', ProduitSchema);
