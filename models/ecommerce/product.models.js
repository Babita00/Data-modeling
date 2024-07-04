import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    description: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
      require: true,
    },
    price: {},
    stock: {
      type: Boolean,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestams: true }
);
