require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sysadmin:u0Hc32WmRd0E1Oof@ecommerce.opg746s.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }catch (err) {
    process.exit(1)
  }
}

module.exports = connectDB