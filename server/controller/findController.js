import { Item } from "../models/Item.js";
export const FindItem = async (req, res) => {
  const { findValue } = req.body;
  const findRes = await Item.findOne({ itemValue: findValue });
  console.log("res found");
  res.send(findRes);
};
