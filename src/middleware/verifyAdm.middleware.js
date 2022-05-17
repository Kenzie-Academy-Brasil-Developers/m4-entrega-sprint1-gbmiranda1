import jwt from "jsonwebtoken";
import users from "../database";

const verifyIsAdmMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  const decoded = jwt.decode(token);
  if (decoded) {
    const email = decoded.email;
    const user = users.find((user) => user.email === email);

    if (user && !user.isAdm) {
      return response
        .status(401)
        .json({ message: "Missing authorization headers" });
    }
  }
  next();
};

export default verifyIsAdmMiddleware;
