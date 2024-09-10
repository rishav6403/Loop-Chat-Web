import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateWebTokenAndSetCookie from "../utils/jwtToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password:hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      await newUser.save();
      generateWebTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const {userName, password} = req.body;
  const user = await User.findOne({userName});
  const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
  if(!user || !isPasswordCorrect){
    return res.status(400).json({error:"Invalid username or password"})
  }
  generateWebTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
    });
  }
  
catch (error) {
    console.log("Error in login controller" ,error.message);
    res.status(500).json({error:"internal server error"})
  }
  
}

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.json({message:"Logged out succesfully"})
  } catch (error) {
    console.log("Error in login controller" ,error.message);
    res.status(500).json({error:"internal server error"})
  }
};
