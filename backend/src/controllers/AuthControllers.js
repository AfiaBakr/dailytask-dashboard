import Users from "../models/UsersSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Bug fix: was using && (all must be missing), should be || (any missing)
    if (!email || !password || !name) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const hashPass = await bcrypt.hash(password, 10);
    const user = new Users({ name, email, password: hashPass, role: req.body.role });
    const data = await user.save();

    // Bug fix: jwt.sign with callback was mixed with async flow incorrectly
    // Using synchronous sign with expiresIn option instead
    const token = jwt.sign(
      { id: data._id, email: data.email, role: data.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(201).json({
      status: true,
      message: "User created successfully",
      user: data,
      token,
    });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await Users.find().select("-password");
    res.json({
      status: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log("Error fetching users:", error.message);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
    res.json({
      status: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error fetching user:", error.message);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Token not provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.id !== id.toString()) {
      return res.status(403).json({
        status: false,
        message: "Invalid token — access denied",
      });
    }

    const updatedUser = await Users.findByIdAndUpdate(id, req.body, { new: true }).select("-password");
    return res.json({
      status: true,
      message: "User updated successfully",
      updatedData: updatedUser,
    });
  } catch (error) {
    console.log("Error updating user:", error.message);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.json({
      status: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting user:", error.message);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    // Bug fix: using synchronous jwt.sign instead of broken callback approach
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.json({
      status: true,
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.log("Error logging in:", error.message);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      status: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const UserProfile = async (req, res) => {
  try {
    if (req.user) {
      return res.status(200).json({
        status: true,
        user: req.user,
      });
    }
    return res.status(401).json({ status: false, message: "Not authenticated" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export { addUser, allUsers, getUser, updateUser, deleteUser, loginUser, logout, UserProfile };
