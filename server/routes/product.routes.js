const ProductController = require("../controllers/product.controllers");

const thing = (req, res, next) => {
    console.log(req.url);
    next();
}


module.exports = function(app){
    app.post("/product", ProductController.createProduct);
    app.get("/product", thing, ProductController.allProducts);
    app.get("/product/:id", ProductController.getProduct);
    app.put("/product/:id", ProductController.updateProduct);
    app.delete("/product/:id", thing, ProductController.deleteProduct);
}