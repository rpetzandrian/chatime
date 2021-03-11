const router = require("express").Router();
const userController = require("../controllers/UserController");
const fileUpload = require("../helpers/fileUpload");
const verify = require("../helpers/jwt");

router.get("/", verify.isAdminVerify, userController.getAllUsers);

router.get("/search", userController.searchUsersByName);

router.get("/:id", userController.getUserById);

router.post(
  "/",
  verify.isAdminVerify,
  fileUpload.uploadPhoto,
  userController.addNewUser
);

router.patch(
  "/update/:id",
  fileUpload.uploadPhoto,
  userController.updateProfile
);

router.patch("/:id", fileUpload.uploadPhoto, userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
