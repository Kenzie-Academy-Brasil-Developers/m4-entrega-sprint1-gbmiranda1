import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  const user = userLoginService(email, password);

  if ("Message" in user) {
    return response.status(401).json(user);
  }

  return response.status(200).json(user);
};

export default userLoginController;
