const Product = require("../models/productModel")

const getAllProducts = async (req, res) => {

  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const addProduct =  (req, res) => {

  headline = req.body.headline,
  category = req.body.category,
  description = req.body.description,
  hero = req.body.hero,
  location = req.body.location,
  userName = req.body.userName,
  mobileNumber = req.body.mobileNumber,
  price = req.body.price

  const newProduct = new Product({headline, category, description, hero, location, location, userName, mobileNumber,price})

  newProduct.save()
  .then(() => res.json(`Product - ${headline} added`))
  .catch(err => {res.send(err)})
}

module.exports = {getAllProducts, addProduct}