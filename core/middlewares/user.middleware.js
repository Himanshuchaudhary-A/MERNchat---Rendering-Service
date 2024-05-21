import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // console.log(req.cookies)
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized1" });
  }

  try {
    const decodedData = jwt.verify(token, jwtSecret);
    req.user = decodedData;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export { authMiddleware };
