import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) => {
  const { id } = request.params;

  return response.json({ msg: deleteUserService(id) });
};

export default deleteUserController;
