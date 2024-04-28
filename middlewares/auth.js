const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: Access Denied",
      });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = user.userId;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(401).json({
      message: "Unauthorized: Invalid Token",
    });
  }
};

module.exports = {
  auth
}
