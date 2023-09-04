import Express from "express";
import { userData, addUser, auth } from "../controller/userController.js";

const router = Express.Router();
router.get("/", auth);
router.post("/signin", userData);
router.post("/signup", addUser);

export default router;
