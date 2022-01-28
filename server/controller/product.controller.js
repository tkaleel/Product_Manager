const Product = require('../model/product.model');

module.exports.findAll = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ products: allProducts}))
    .catch(err => res.json({message:'Something went wrong when retrieving the products', error: err }));
}

module.exports.findOne = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(oneSingleProduct => res.json({ product: oneSingleProduct}))
    .catch(err => res.json({message:'Something went wrong when retrieving the product', error: err }));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json({ product : newProduct }))
    .catch(err => res.json({message:'Something went wrong when creating the product', error: err }));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id },
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({message:'Something went wrong with the update', error: err})); 
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message:'Something went wrong with the deletion', error: err }));
}