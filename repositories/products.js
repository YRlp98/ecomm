const Repository = require('./repositry');

class ProductsRepository extends Repository {

}

module.exports = new ProductsRepository('products.json');