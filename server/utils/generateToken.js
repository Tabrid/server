import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.JWT_SECRET === "production",
          sameSite: process.env.JWT_SECRET === "production" ? "none" : "strict",
        })
};

export default generateTokenAndSetCookie;