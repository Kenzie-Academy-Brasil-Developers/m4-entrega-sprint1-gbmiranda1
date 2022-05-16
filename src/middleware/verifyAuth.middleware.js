import jwt from "jsonwebtoken";

const verifyAuthMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response
        .status(401)
        .json({ message: "Missing authorization headers" });
    }
  });
  next();
};
export default verifyAuthMiddleware;
