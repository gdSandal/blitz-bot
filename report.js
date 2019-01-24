const mongoose = require("mongoose");
const reportSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  userID: String
});
