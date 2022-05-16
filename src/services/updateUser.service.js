import users from "../database";

const updateUsersService = (id, email, name) => {
  const date = new Date();

  const user = {
    id,
    name,
    email,
    updatedOn: date,
  };
  console.log(email);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return { Message: "User not found" };
  }

  users[userIndex] = { ...users[userIndex], ...user };

  return users[userIndex];
};
export default updateUsersService;
