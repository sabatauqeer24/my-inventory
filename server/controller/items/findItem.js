import { Item } from "../../models/item.js";
export const FindItems = async (req, res) => {
  const { itemValue, id } = req.body;
  const regex = new RegExp(itemValue, "i");
  const findRes = await Item.findOne({
    _id: id,
    itemValue: { $regex: regex },
  });
  // console.log("res found");
  return res.json(findRes);
};
