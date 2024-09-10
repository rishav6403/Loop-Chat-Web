import User from "../models/userModel.js";

export const getUsersForSidebar = async(req, res)=>{
try {
    const loggedInUserId = req.user._id;

    const filterUsers = await User.find({id: {$ne : loggedInUserId }}).select("-password")

    return res.status(200).json(filterUsers)
} catch (error) {
    console.error("Error found in getuserssidebar", error.message);
    return res.status(500).json("Internal Server Error")
}

}