/** Install Mongoosejs */
/** Requrie and Setup Mongoose  */
/** Making Schema */
/** Creat Model and Export */



/** Requrie the Mongoose   */

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/practicekaro")

/** making Schema */

const userSchema = mongoose.Schema({
  username : String,
  name : String,
  age : Number
})

/** Creat Model and Export */

// mongoose.model(naam , Schema);


module.exports = mongoose.model("user" , userSchema);