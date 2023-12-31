import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in! ");
// });

// //Check user and admin

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account! ");
// });

// //Check admin only

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, you are logged in and you can delete all accounts! ");
// });

//UPDATE

router.put("/:id", verifyUser, updateUser);

//DELETE

router.delete("/:id", verifyUser, deleteUser);

//GET

router.get("/:id", verifyUser, getUser);

//GET ALL

router.get("/", verifyAdmin, getAllUser);

export default router;
