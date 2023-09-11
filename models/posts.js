const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    image: {
      type: String,
      required: true,
    },
    caption: { type: String, required: true },
  },
  {
    timestamps: true,
    
  }
);
module.exports = mongoose.model('Post', postSchema);