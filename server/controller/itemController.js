import { Item } from "../models/Item.js";
export const addItems = async (req, res) => {
  try {
    const { itemValue, potency } = req.body;
    const itemRes = await Item.create(
      {
        itemValue: itemValue,
        potency: [potency],
      },
      console.log("item saved in db")
    );
    res.send(itemRes);
  } catch (error) {
    res.status(500).send({ message: `error${error.message}` });
  }
};
