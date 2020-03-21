const { Product } = require("../models/product.models");

module.exports.createProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(product => res.json(product))
        .catch(err => Response.json(err));
}

module.exports.allProducts = (req, res) => {
    Product.find({})
    .then(products => res.json(products))
    .catch(err => Response.json(err))
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id}, req.body, {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    console.log(req.url);
    Product.deleteOne({_id: req.params.id })
        .then(deleteConfirm => {
            console.log(deleteConfirm);
            res.json(deleteConfirm);
        })
        .catch(err => res.json(err))
}