const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
  headline: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  hero: {
    type: String
  },
  location:{
    type: String
  },
  userName:{
    type: String
  },
  mobileNumber:{
    type: Number
  },
  price:{
    type: Number
  }
})

const Product = mongoose.model("product", productsSchema)
module.exports = Product