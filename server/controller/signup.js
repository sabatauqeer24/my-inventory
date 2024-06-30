import { SignUp } from "../models/signUp.js";
import bcrypt, { hash } from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    SignUp.create({
      email: email,
      username: username,
      password: hashedPassword,
    });
  } catch (error) {}

  res.send("sign up");
};
