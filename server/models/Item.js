import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  itemValue: {
    type: String,
    required: true,
    unique: true,
  },
  potency: {
    type: Array,
    required: true,
  },
});

export const Item = mongoose.model("Item", ItemSchema);
