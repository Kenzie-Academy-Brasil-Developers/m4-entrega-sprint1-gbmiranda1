import listUsersService from "../services/listUsers.service";

const listUsersController = (request, response) => {
  const usersList = listUsersService();

  return response.json(usersList);
};

export default listUsersController;
