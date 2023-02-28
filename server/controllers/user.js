import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal from "../models/user.js";
import express from "express";
const secret = "test";
const app = express();

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email: email });
    if (!oldUser){
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) {
      console.log("----");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ user: oldUser }, secret, {
      expiresIn: "23h",
    });

    res.cookie("token", token, {
      withCredentials: true,
      httpOne: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const signup = async (req, res) => {
  console.log(req.body);
  const { email, password, firstName } = req.body;
  try {
    const oldUser = await UserModal.findOne({ email: email });

    if (oldUser) {
      console.log("-----");
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = new UserModal({
      email: email,
      password: hashedPassword,
      firstName: firstName,
    });
await result.save()
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "23h",
    });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};