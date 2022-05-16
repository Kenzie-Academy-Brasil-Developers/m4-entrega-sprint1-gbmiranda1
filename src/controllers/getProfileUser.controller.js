import jwt from "jsonwebtoken";
import getProfileUserService from "../services/getProfileUser.service";

const getProfileUserController = (request, response) => {
  const token = request.headers.authorization;

  const decoded = jwt.decode(token);

  const email = decoded.email;

  const user = getProfileUserService(email);

  return response.status(200).json(user);
};
export default getProfileUserController;
