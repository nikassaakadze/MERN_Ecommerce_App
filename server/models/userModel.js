const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  userName: {
    type: String
  },
  userPassword: {
    type: String
  },
  userEmail: {
    type: String
  },
  userPhone: {
    type: Number
  }
})

const User = mongoose.model("", userSchema)
module.exports = User