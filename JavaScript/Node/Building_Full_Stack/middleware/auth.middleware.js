import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    console.log(req.cookies);

    let token = req.cookies?.token; // ? agar cookies ke ander token hain toh dedo, nhi toh kali rahega
    console.log("Token Found:", token ? "Yes" : "No");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded data: ", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
