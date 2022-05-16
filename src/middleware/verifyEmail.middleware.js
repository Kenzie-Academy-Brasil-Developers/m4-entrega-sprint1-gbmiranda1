import users from "../database";

const verifyEmailMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return response.status(401).json({ message: "E-mail already registered" });
  }
  next();
};
export default verifyEmailMiddleware;
