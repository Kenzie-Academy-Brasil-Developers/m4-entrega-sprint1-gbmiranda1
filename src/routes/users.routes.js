import Router from "express"; // importação errada

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import userLoginController from "../controllers/userLogin.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUsersController from "../controllers/updateUser.controller";
import getProfileUserController from "../controllers/getProfileUser.controller";

import verifyIsAdmMiddleware from "../middleware/verifyAdm.middleware";
import verifyAuthMiddleware from "../middleware/verifyAuth.middleware";
import verifyEmailMiddleware from "../middleware/verifyEmail.middleware";

const router = Router();

router.post("/", verifyEmailMiddleware, createUserController);
router.get(
  "/",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.post("/login", userLoginController);
router.delete(
  "/:id",
  verifyIsAdmMiddleware,
  verifyAuthMiddleware,
  deleteUserController
);
router.put(
  "/:id",
  verifyIsAdmMiddleware,
  verifyAuthMiddleware,
  updateUsersController
);
router.get("/profile", verifyAuthMiddleware, getProfileUserController);

export default router;
