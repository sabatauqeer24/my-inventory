import mongoose from "mongoose";
const FindSchema = new mongoose.Schema({
  findValue: {
    type: String,
  },
});

export const FindItem = mongoose.model("find", FindSchema);
