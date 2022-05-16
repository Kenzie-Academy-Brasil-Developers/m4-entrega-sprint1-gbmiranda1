import users from "../database";

const getProfileUserService = (email) => {
  const user = users.find((user) => user.email === email);

  return {
    email: user.email,
    name: user.name,
    isAdm: user.isAdm,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    id: user.id,
  };
};

export default getProfileUserService;
