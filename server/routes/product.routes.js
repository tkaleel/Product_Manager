const ProductController = require('../controller/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAll);
    app.get('/api/products/:id', ProductController.findOne);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.post('/api/products', ProductController.createProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}