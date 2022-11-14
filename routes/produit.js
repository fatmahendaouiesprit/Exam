var express = require('express');
const Produit = require('../model/Produit');
var router = express.Router();

/* GET produit listing. */

router.get('/', async function (req, res, next) {
  const produit = await Produit.find();
  res.render('index', { produit })
});



router.post('/addProduct', async function (req, res, next) {
  const { Libelle, Prix, Description, Quantite, InStock } = req.body;
  const prosuits = await Produit.findOne({ Libelle, Prix, Description, Quantite, InStock });
  if (!prosuits) {
    try {
      const produit = new Produit({ Libelle, Prix, Description, Quantite, InStock });
      const addproduit = await produit.save();
      console.log(addproduit);
      res.redirect('/product/Product')
    } catch (err) {
      res.json(err.message)
    }
  } else {
    res.redirect('/')

  }

});
router.get('/Product', async function (req, res, next) {
  const Produits = await Produit.find();
  res.render('product', { Produits })
});

router.get('/deleteproduct/:id', async function (req, res, next) {
  const { id } = req.params;
  const Produits = await Produit.findByIdAndDelete(id);
  res.redirect('/product/Product')
});


router.put('/update/:id', async function (req, res, next) {
  const { id } = req.params;
  const prosuits = await Produit.findOneAndUpdate(id);
  if (!prosuits) {
    try {
      const produit = new Produit({ Libelle, Prix, Description, Quantite, InStock });
      const addproduit = await produit.save();
      console.log(addproduit);
    } catch (err) {
      res.json(err.message)
    }
  } else {
    res.json("produit not found");

  }

})
module.exports = router;
