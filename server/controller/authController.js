import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    console.log(password, "passowrd value");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const signupRes = await User.create({
      email: email,
      username: username,
      password: hashedPassword,
    });
    res.send(signupRes);
  } catch (error) {
    console.log(error);
    res.status(500).send(`error registering user: ${error.message}`);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.find({ email });
    console.log("userfound:", user);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const userPassword = await User.find({ password });
    userPassword.toString();

    const isMatch = bcrypt.compare(password, userPassword, () => {
      if (isMatch) {
        return res
          .status(401)
          .json({ msg: "The password you entered is incorrect" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(`error registering user: ${error.message}`);
  }
};
