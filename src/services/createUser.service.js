import bcrypt from "bcryptjs/dist/bcrypt";
import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPass = await bcrypt.hash(password, 10);
  const date = new Date();

  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return "This email address is already being used";
  }

  const newUser = {
    email,
    name,
    password: hashedPass,
    isAdm,
    createdOn: date,
    updatedOn: date,
    id: uuidv4(),
  };

  users.push(newUser);

  return {
    email: newUser.email,
    name: newUser.name,
    isAdm: newUser.isAdm,
    createdOn: newUser.createdOn,
    updatedOn: newUser.updatedOn,
    id: newUser.id,
  };
};

export default createUserService;
