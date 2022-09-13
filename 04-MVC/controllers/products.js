const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
  });
};

exports.render404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: '404 Error: Page Not Found' });
};
