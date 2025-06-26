import { User } from '../Models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register Controller
export const register = async (req, res) => {
  const { name, gmail, password } = req.body;

  try {
    let user = await User.findOne({ gmail });

    if (user) return res.status(400).json({ message: "User already exists" });

    const hashPass = await bcrypt.hash(password, 10);
    user = await User.create({ name, gmail, password: hashPass });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  const { gmail, password } = req.body;

  try {
    const user = await User.findOne({ gmail });
    if (!user) return res.status(404).json({ message: "User does not exist" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: `Welcome ${user.name}`, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Profile Controller
export const profile = async (req, res) => {
  res.status(200).json({ user: req.user });
};
