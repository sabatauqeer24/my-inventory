export const homepage = (req, res) => {
  try {
    res.send("My Inventory");
  } catch (error) {
    res.json({ msg: error.msg });
  }
};
