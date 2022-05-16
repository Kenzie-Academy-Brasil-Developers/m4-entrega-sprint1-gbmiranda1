import users from "../database";

const listUsersService = () => {
  const outputUser = users.map((user) => user);

  return outputUser;
};

export default listUsersService;
