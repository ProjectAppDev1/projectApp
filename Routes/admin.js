const express = require("express");
const {
    index,
    createBranchForm,
    createwineForm,
    manageBranchesForm,
    createAdminsForm,
    manageAdminsForm,
    managewinesForm
  } = require("../controllers/admin");
const router = express.Router();
const HomePageContoller = require("../controllers/admin");
const {redirectIfAdminAuthenticated} = require("../middlewares/auth")

router
.get("/", redirectIfAdminAuthenticated, HomePageContoller.index )
.get("/create-admin", createAdminsForm)
.get("/create-wine", createwineForm)
.get("/create-branch", createBranchForm)
.get("/manage-wine", HomePageContoller.managewinesForm)
.post("/createAdmin", HomePageContoller.createAdmin)


module.exports = router;

